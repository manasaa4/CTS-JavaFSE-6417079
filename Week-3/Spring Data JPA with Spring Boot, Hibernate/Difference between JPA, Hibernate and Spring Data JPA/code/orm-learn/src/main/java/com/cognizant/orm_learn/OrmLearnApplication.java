package com.cognizant.orm_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.orm_learn.model.Employee;
import com.cognizant.orm_learn.service.EmployeeService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static EmployeeService employeeService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        employeeService = context.getBean(EmployeeService.class);
        LOGGER.info("Inside main");
        testAddEmployee();
    }

    private static void testAddEmployee() {
        LOGGER.info("Start testAddEmployee");

        Employee emp = new Employee();
        emp.setName("John Doe");
        emp.setDepartment("Engineering");
        emp.setSalary(75000.0);

        employeeService.addEmployee(emp);
        LOGGER.debug("Inserted Employee: {}", emp);

        LOGGER.info("End testAddEmployee");
    }
}
