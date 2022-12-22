package com.sales.demo.Repository;

import com.sales.demo.Model.LocationQuota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface LocationQuotaRepo extends JpaRepository<LocationQuota,Integer> {
    @Query("select l from LocationQuota l where l.location = ?1")
    public LocationQuota existsByLocation(String loc);

    @Transactional
    @Modifying
    @Query("delete from LocationQuota l where l.location = ?1")
    public Integer deleteByLocation(String loc);



}
