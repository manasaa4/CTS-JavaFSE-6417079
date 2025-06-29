CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_name IN VARCHAR2,
  bonus_percent IN NUMBER
) IS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_percent / 100)
  WHERE department = dept_name;

  DBMS_OUTPUT.PUT_LINE('Bonus of ' || bonus_percent || '% applied to department: ' || dept_name);
  COMMIT;
END;
/

-- Execute: 10% bonus to IT department
BEGIN
  UpdateEmployeeBonus('IT', 10);
END;
/

-- View results
SELECT * FROM employees;
