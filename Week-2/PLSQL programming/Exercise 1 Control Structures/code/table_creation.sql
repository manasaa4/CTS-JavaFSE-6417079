-- Enable DBMS Output
SET SERVEROUTPUT ON;

-- Force drop loans table if it exists (with locks)
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE loans CASCADE CONSTRAINTS PURGE';
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Loans table could not be dropped: ' || SQLERRM);
END;
/

-- Force drop customers table if it exists (with locks)
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE customers CASCADE CONSTRAINTS PURGE';
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Customers table could not be dropped: ' || SQLERRM);
END;
/

-- Create customers table
CREATE TABLE customers (
  customer_id NUMBER PRIMARY KEY,
  age NUMBER,
  balance NUMBER,
  loan_interest_rate NUMBER,
  isvip VARCHAR2(5)
);

-- Create loans table
CREATE TABLE loans (
  loan_id NUMBER PRIMARY KEY,
  customer_id NUMBER REFERENCES customers(customer_id),
  due_date DATE
);

-- Insert sample data
INSERT INTO customers VALUES (1, 65, 12000, 10, 'FALSE');
INSERT INTO customers VALUES (2, 45, 8000, 12, 'FALSE');
INSERT INTO customers VALUES (3, 70, 15000, 11, 'FALSE');

INSERT INTO loans VALUES (101, 1, SYSDATE + 10);
INSERT INTO loans VALUES (102, 2, SYSDATE + 40);
INSERT INTO loans VALUES (103, 3, SYSDATE + 25);

COMMIT;
