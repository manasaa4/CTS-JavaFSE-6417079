-- Enable output
SET SERVEROUTPUT ON;

-- Drop old tables if they exist
BEGIN EXECUTE IMMEDIATE 'DROP TABLE bank_accounts CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE savings_accounts CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE employees CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;
/

-- Create savings_accounts table
CREATE TABLE savings_accounts (
  account_id NUMBER PRIMARY KEY,
  customer_id NUMBER,
  balance NUMBER
);

-- Create employees table
CREATE TABLE employees (
  emp_id NUMBER PRIMARY KEY,
  name VARCHAR2(50),
  department VARCHAR2(30),
  salary NUMBER
);

-- Create bank_accounts table
CREATE TABLE bank_accounts (
  account_id NUMBER PRIMARY KEY,
  customer_id NUMBER,
  balance NUMBER
);

-- Insert sample data into savings_accounts
INSERT INTO savings_accounts VALUES (201, 1, 10000);
INSERT INTO savings_accounts VALUES (202, 2, 15000);
INSERT INTO savings_accounts VALUES (203, 3, 20000);

-- Insert sample data into employees
INSERT INTO employees VALUES (301, 'Alice', 'IT', 50000);
INSERT INTO employees VALUES (302, 'Bob', 'HR', 45000);
INSERT INTO employees VALUES (303, 'Charlie', 'IT', 55000);

-- Insert sample data into bank_accounts
INSERT INTO bank_accounts VALUES (101, 1, 10000);
INSERT INTO bank_accounts VALUES (102, 2, 8000);
INSERT INTO bank_accounts VALUES (103, 3, 12000);

COMMIT;

-- Confirm
SELECT * FROM savings_accounts;
SELECT * FROM employees;
SELECT * FROM bank_accounts;
