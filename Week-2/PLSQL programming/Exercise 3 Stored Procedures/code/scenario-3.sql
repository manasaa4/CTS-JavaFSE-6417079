CREATE OR REPLACE PROCEDURE TransferFunds (
  from_account_id IN NUMBER,
  to_account_id IN NUMBER,
  amount IN NUMBER
) IS
  from_balance bank_accounts.balance%TYPE;
BEGIN
  -- Get source account balance
  SELECT balance INTO from_balance
  FROM bank_accounts
  WHERE account_id = from_account_id
  FOR UPDATE;

  IF from_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
  END IF;

  -- Deduct from source
  UPDATE bank_accounts
  SET balance = balance - amount
  WHERE account_id = from_account_id;

  -- Add to destination
  UPDATE bank_accounts
  SET balance = balance + amount
  WHERE account_id = to_account_id;

  DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' from account ' || from_account_id || ' to account ' || to_account_id);
  COMMIT;
END;
/

-- Execute transfer: 3000 from 101 to 102
BEGIN
  TransferFunds(101, 102, 3000);
END;
/

-- View results
SELECT * FROM bank_accounts;
