package com.sales.demo.Service;

import com.sales.demo.Model.SalesPerson;
import com.sales.demo.Repository.SalesPersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SAuthService {

    @Autowired
    private SalesPersonRepo spRepo;

    public SalesPerson register(SalesPerson user) {
        SalesPerson user2 = spRepo.getUserByEmail(user.getSemail());
        if(user2 != null)
            return null;

        return spRepo.save(user);
    }

    public SalesPerson login(SalesPerson user) {
        SalesPerson existingUser = spRepo.getUserByEmail(user.getSemail());

        System.out.println(existingUser);
        if(existingUser == null)
            return null;

        if(existingUser.getSemail().equals(user.getSemail()) &&
                existingUser.getSpassword().equals(user.getSpassword())) {

            existingUser.setSpassword("");
            return existingUser;
        }
        return null;
    }

    public String getUsernameById(int id) {
        SalesPerson user = spRepo.findById(id).orElse(null);
        return user.getSname();
    }



}
