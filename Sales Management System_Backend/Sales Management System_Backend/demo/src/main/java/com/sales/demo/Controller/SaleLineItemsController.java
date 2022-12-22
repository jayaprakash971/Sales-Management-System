package com.sales.demo.Controller;

import com.sales.demo.Model.SaleLineItems;
import com.sales.demo.Service.SaleLineItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/salelineitems")
public class SaleLineItemsController {

    @Autowired
    SaleLineItemsService slis;

    @RequestMapping("/getall")
    public List<SaleLineItems> getallsalelineitems()
    {
        return slis.getAllSaleLineItems();
    }

    @PostMapping("/add")
    public String addproductsaledetail(@RequestBody SaleLineItems sli)
    {
        slis.addProductSaleDetail(sli);
        return "Successfully added product sale detail record";
    }

//    @PutMapping("/update")
//    public String updateproductsaledetail(@RequestBody SaleLineItems sli)
//    {
//       boolean YES = slis.updateProductSaleDetail(sli);
//       if(YES==true)
//           return "Successfully updated";
//       else
//           return "NoT Updated";
//    }

}
