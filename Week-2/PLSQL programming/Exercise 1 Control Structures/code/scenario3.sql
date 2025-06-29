BEGIN
  DBMS_OUTPUT.PUT_LINE('Scenario 3: Sending reminders for loans due within 30 days');
  FOR loan IN (
    SELECT customer_id, due_date
    FROM loans
    WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan for customer ID ' || loan.customer_id ||
                         ' is due on ' || TO_CHAR(loan.due_date, 'DD-MON-YYYY'));
  END LOOP;
END;
/
SELECT * FROM loans
WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30;
