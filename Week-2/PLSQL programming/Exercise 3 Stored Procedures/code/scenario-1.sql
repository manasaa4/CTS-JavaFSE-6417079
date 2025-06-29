CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR acc IN (SELECT account_id, balance FROM savings_accounts) LOOP
    UPDATE savings_accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_id = acc.account_id;
  END LOOP;
  
  DBMS_OUTPUT.PUT_LINE('Monthly interest processed for all savings accounts.');
  COMMIT;
END;
/

-- Execute
BEGIN
  ProcessMonthlyInterest;
END;
/

-- View results
SELECT * FROM savings_accounts;
