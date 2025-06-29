BEGIN
  DBMS_OUTPUT.PUT_LINE('Scenario 2: Promoting customers with balance > 10,000 to VIP');
  FOR cust IN (SELECT customer_id, balance FROM customers) LOOP
    IF cust.balance > 10000 THEN
      UPDATE customers
      SET isvip = 'TRUE'
      WHERE customer_id = cust.customer_id;
    END IF;
  END LOOP;
  COMMIT;
END;
/
SELECT * FROM customers;