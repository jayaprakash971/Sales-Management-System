package com.sales.demo.Controller;

import com.sales.demo.Model.SaleLineItems;
import com.sales.demo.Model.SalesPerson;
import com.sales.demo.Repository.SalesPersonRepo;
import com.sales.demo.Service.SalesPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/salesperson")
public class SalesPersonController {

    @Autowired
    SalesPersonService sps;

    @GetMapping("/getall")
    public List<SalesPerson> getallsalesperson(){ return sps.getAllSalesPersons(); }

    @PostMapping("/add")
    public String addsalesperson(@RequestBody SalesPerson s)
    {
        sps.addSalesPerson(s);
        return "successfully added salesperson";
    }

    @DeleteMapping("/delete/{id}")
    public String deletesalesperson(@PathVariable Integer id)
    {
       boolean YES = sps.deleteSalePerson(id);
        if(YES==true)
            return "Salesperson Record deleted";
        else
            return "SalesPerson Record not deleted";
    }
    @PutMapping("/update")
    public SalesPerson updatesalesperson(@RequestBody SalesPerson s)
    {
        return sps.updateSalesPerson(s);
    }


}
