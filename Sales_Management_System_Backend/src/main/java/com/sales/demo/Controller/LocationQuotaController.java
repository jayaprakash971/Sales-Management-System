package com.sales.demo.Controller;

import com.sales.demo.Model.LocationQuota;
import com.sales.demo.Model.SalesPerson;
import com.sales.demo.Service.LocationQuotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/locationquota")
public class LocationQuotaController {

    @Autowired
    LocationQuotaService lqs;


    @GetMapping("/getall")
    public List<LocationQuota> get_all_location_quotas(){ return lqs.getAllLocationQuotas(); }

    @PostMapping("/add")
    public String add_location_quota(@RequestBody LocationQuota lq)
    {
        lqs.addLocationQuota(lq);
        return "successfully added location";
    }
    @DeleteMapping("/delete/{Location}")
    public String delete_location_quota(@PathVariable String Location)
    {
        boolean YES = lqs.deleteLocationQuota(Location);
        if(YES==true)
            return "LocationQuota Record deleted";
        else
            return "LocationQuota Record not deleted";
    }
    @PutMapping("/update")
    public LocationQuota update_location_quota(@RequestBody LocationQuota lq)
    {
        return lqs.updateLocationQuota(lq);
    }



}
