package com.sales.demo.Service;

import com.sales.demo.Model.SalesPerson;
import com.sales.demo.Repository.SalesPersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class SalesPersonService {

    @Autowired
    private SalesPersonRepo spRepo;


    public List<SalesPerson> getAllSalesPersons(){ return spRepo.findAll(); }

    public void addSalesPerson(SalesPerson s) {
        spRepo.save(s);
    }

    public boolean deleteSalePerson(Integer id) {
        if (!spRepo.existsById(id)) {
            return false;
        }
        spRepo.deleteById(id);
        return true;
    }


    public SalesPerson updateSalesPerson(SalesPerson s) {
        SalesPerson existingUser = spRepo.findById(s.getSid()).orElse(null);

        existingUser.setSname(s.getSname());
        existingUser.setSemail(s.getSemail());
        existingUser.setSphone(s.getSphone());
        existingUser.setSlocation(s.getSlocation());
        existingUser.setSlevel(s.getSlevel());

        return spRepo.save(existingUser);
    }

    public String getLocation(Integer id)
    {
        SalesPerson s = spRepo.findById(id).orElse(null);
        return s.getSlocation();
    }

}
