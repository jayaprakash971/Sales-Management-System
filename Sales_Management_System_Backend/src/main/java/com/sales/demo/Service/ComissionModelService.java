package com.sales.demo.Service;

import com.sales.demo.Model.ComissionModel;
import com.sales.demo.Model.Products;
import com.sales.demo.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class ComissionModelService {

    @Autowired
    private SalesPersonRepo spr;
    @Autowired
    private SaleLineItemsRepo slir;
    @Autowired
    private ProductsRepo pr;

    @Autowired
    private LocationQuotaRepo lqr;

    @Autowired
    private ComissionModelRepo cmr;

    public List<ComissionModel> getAllComissionsOfSids(){ return cmr.findAll();}

    @Scheduled(cron = "0 0 0 L * *")
    public void comissionCalculationEveryMonthSaveRecord() ///adding the record in the backend
    {
        System.out.println("executed");
        List<Integer> sids = spr.getAllSids();
        LocalDate currentDate = LocalDate.now();
        Integer month = currentDate.getMonthValue(); //////basic
        Integer year = currentDate.getYear(); ////basic
        for (Integer each : sids)
        {
            List<Integer> pids = slir.getPids(each, month, year);
            Integer totalcost = 0, comissiontosid = 0;
            for (Integer eachpid : pids)
            {
                Integer costforproduct = pr.getPCostOfId(eachpid);
                Integer typeofproduct = pr.getPtypeOfId(eachpid);
                comissiontosid += calculateComissionOfId(costforproduct, typeofproduct);
                totalcost += costforproduct;
            }
            Integer slevel = spr.getSalesPersonRecord(each).getSlevel();

            String slocation = spr.getSalesPersonRecord(each).getSlocation();
            Integer quota = lqr.existsByLocation(slocation).getQuota();

            System.out.println("sid = " + each + ", slevel = " + slevel + ", slocation = " + slocation + ", quota = " + quota);

            if(totalcost>quota)
                comissiontosid+=(comissiontosid*20)/100;

            if(slevel==1)comissiontosid/=10;
            else if(slevel==2)comissiontosid/=20;
            else if(slevel>=3)comissiontosid/=50;

            //System.out.println("sid = "+ each +", sales cost = " + totalcost + ", commision = " + comissiontosid);

            ComissionModel x= new ComissionModel();
            x.setMonth(month);
            x.setYear(year);
            x.setMonthlycommision(comissiontosid);
            x.setSalespersonid(each);
            x.setMonthlysales(totalcost);

            cmr.save(x);
        }
    }

    @Scheduled(cron = "0 0 0 * * *")
    public void comissionCalculationCurrentMonthSaveRecord() ///adding the record in the backend
    {
        System.out.println("executed");
        List<Integer> sids = spr.getAllSids();

        LocalDate currentDate = LocalDate.now();
        Integer day = currentDate.getDayOfMonth();
        Integer month = currentDate.getMonthValue();
        Integer year = currentDate.getYear();
//        Integer day = 12;
//        Integer month = 2;
//        Integer year = 2022;

        for (Integer each : sids)
        {
            List<Integer> pids = slir.getPids(each, day, month, year);
            Integer totalcost = 0, comissiontosid = 0;
            for (Integer eachpid : pids)
            {
                Integer costforproduct = pr.getPCostOfId(eachpid);
                Integer typeofproduct = pr.getPtypeOfId(eachpid);
                comissiontosid += calculateComissionOfId(costforproduct, typeofproduct);
                totalcost += costforproduct;
            }
            Integer slevel = spr.getSalesPersonRecord(each).getSlevel();

            String slocation = spr.getSalesPersonRecord(each).getSlocation();
            Integer quota = lqr.existsByLocation(slocation).getQuota();

            //System.out.println("sid = " + each + ", slevel = " + slevel + ", slocation = " + slocation + ", quota = " + quota);

            if(totalcost>quota)
                comissiontosid+=(comissiontosid*20)/100;

            if(slevel==1)comissiontosid/=10;
            else if(slevel==2)comissiontosid/=20;
            else if(slevel>=3)comissiontosid/=50;

            //System.out.println("sid = "+ each +", sales cost = " + totalcost + ", commision = " + comissiontosid);

            ComissionModel x= new ComissionModel();
            x.setMonth(month);
            x.setYear(year);
            x.setMonthlycommision(comissiontosid);
            x.setSalespersonid(each);
            x.setMonthlysales(totalcost);

            cmr.save(x);
        }
    }

    ///basic
    public Integer calculateComissionOfId(Integer cost,Integer top)
    {
        Integer r=0;
        if(top==2222)
        {
            if(cost < 30000){ r=(3*cost)/100;}
            else if(cost>=30000 && cost<=50000){r=(5*cost)/100;}
            else if(cost>50000){r=(8*cost)/100;}
        }
        else if(top == 3333)
        {
            if(cost < 50000){r=(3*cost)/100;}
            else if(cost>=50000){r=(5*cost)/100;}
        }
        else if(top == 4444)
        {
            if(cost<100000){r=(4*cost)/100;}
            else if(cost>=100000 && cost<=500000){r=(6*cost)/100;}
            else if(cost>500000){r=(10*cost)/100;}
        }
        else if(top == 5555)
        {
            if(cost<500000){r=(6*cost)/100;}
            else if(cost>=500000){r=(11*cost)/100;}
        }
        return r;
    }


}
