package com.sales.demo.Service;

import com.sales.demo.Model.SaleLineItems;
import com.sales.demo.Repository.SaleLineItemsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleLineItemsService {

    @Autowired
    SaleLineItemsRepo sliRepo;

    public List<SaleLineItems> getAllSaleLineItems(){return sliRepo.findAll();}

    public void addProductSaleDetail(SaleLineItems sli){sliRepo.save(sli);}

//    public boolean updateProductSaleDetail(SaleLineItems sli ){
//        SaleLineItems existingRecord = sliRepo.findByPid(sli.getPid());
//        if(existingRecord!=null)
//        {
//            existingRecord.setPid(sli.getPid());
//            existingRecord.setSale_date(sli.getSale_date());
//
//            sliRepo.save(existingRecord);
//            return true;
//        }
//        return false;
//    }


}
