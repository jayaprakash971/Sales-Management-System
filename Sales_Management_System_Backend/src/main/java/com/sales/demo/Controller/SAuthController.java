package com.sales.demo.Controller;

import com.sales.demo.Model.SalesPerson;
import com.sales.demo.Service.SAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class SAuthController {

    @Autowired
    private SAuthService authService;

    @PostMapping("/login")
    public SalesPerson login(@RequestBody SalesPerson s) {
        return authService.login(s);
    }

    @PostMapping("/register")
    public SalesPerson register(@RequestBody SalesPerson s) {
        System.out.println("register");
        return authService.register(s);
    }

    @GetMapping("/username/{id}")
    public String username(@PathVariable Integer id) {
        return authService.getUsernameById(id);
    }
}
