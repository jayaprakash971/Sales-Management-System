package com.sales.demo.Controller;

import com.sales.demo.Model.ComissionModel;
import com.sales.demo.Model.ComissionRules;
import com.sales.demo.Model.LocationQuota;
import com.sales.demo.Service.ComissionRulesService;
import com.sales.demo.Service.LocationQuotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/comissionrules")
public class ComissionRulesController {
    @Autowired
    ComissionRulesService crs;


    @GetMapping("/getall")
    public List<ComissionRules> get_all_comission_rules(){ return crs.getAllComissionRules(); }

    @PostMapping("/add")
    public String add_comission_rule(@RequestBody ComissionRules cr)
    {
        crs.addComissionRule(cr);
        return "successfully added location";
    }

    @DeleteMapping("/delete/{Level}")
    public String delete_location_quota(@PathVariable Integer Level)
    {
        boolean YES = crs.deleteComissionRule(Level);
        if(YES==true)
            return "Comission Rule deleted";
        else
            return "Comission Rule not deleted";
    }

    @PutMapping("/update")
    public ComissionRules update_location_quota(@RequestBody ComissionRules cr)
    {
        return crs.updateComissionRule(cr);
    }
}
