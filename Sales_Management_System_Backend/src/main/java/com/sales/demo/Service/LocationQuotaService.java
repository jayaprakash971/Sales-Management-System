package com.sales.demo.Service;

import com.sales.demo.Model.LocationQuota;
import com.sales.demo.Model.Products;
import com.sales.demo.Repository.LocationQuotaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class LocationQuotaService {
    @Autowired
    private LocationQuotaRepo lqRepo;

    public List<LocationQuota> getAllLocationQuotas(){ return lqRepo.findAll();}

    public void addLocationQuota(LocationQuota q){
        lqRepo.save(q);
        System.out.println("add location quota");
    }

    public Boolean deleteLocationQuota(String loc) {
        LocationQuota store = lqRepo.existsByLocation(loc);
        if (store==null) {
            return false;
        }
        lqRepo.deleteByLocation(loc);
        return true;
    }

    public LocationQuota updateLocationQuota(LocationQuota lq) {
        LocationQuota existingRecord = lqRepo.existsByLocation(lq.getLocation());

        existingRecord.setLocation(lq.getLocation());
        existingRecord.setQuota(lq.getQuota());

        return lqRepo.save(existingRecord);

    }

}
