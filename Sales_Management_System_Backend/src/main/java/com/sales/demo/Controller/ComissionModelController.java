package com.sales.demo.Controller;

import com.sales.demo.Model.ComissionModel;
import com.sales.demo.Model.LocationQuota;
import com.sales.demo.Service.ComissionModelService;
import com.sales.demo.Service.LocationQuotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/comissionOfAllSids")
public class ComissionModelController {
    @Autowired
    ComissionModelService cms;


    @GetMapping("/getall")
    public List<ComissionModel> get_all_comission_records_of_sids(){ return cms.getAllComissionsOfSids(); }

    @GetMapping("/calculate")
    public String add_record_comission_model()
    {
        cms.comissionCalculationCurrentMonthSaveRecord();
        return "Forced commission calculation done";
    }

}
