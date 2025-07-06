package com.cognizant.orm_learn.service;

import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.List;

@Service
public class EmployeeService {

    public List<String> getAllCountries() {
        return Arrays.asList("India", "United States", "Germany");
    }
}
