package com.sales.demo.Repository;

import com.sales.demo.Model.ComissionRules;
import com.sales.demo.Model.LocationQuota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ComissionRulesRepo extends JpaRepository<ComissionRules,Integer> {

    @Query("select c from ComissionRules c where c.level = ?1")
    public ComissionRules findByLevel(Integer level);

    @Transactional
    @Modifying
    @Query("delete from ComissionRules c where c.level = ?1")
    public Integer deleteByLevel(Integer level);
}
