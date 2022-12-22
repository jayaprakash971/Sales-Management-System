package com.sales.demo.Repository;

import com.sales.demo.Model.SalesPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalesPersonRepo extends JpaRepository<SalesPerson,Integer> {

    @Query("select s from SalesPerson s where s.semail = ?1")
    public SalesPerson getUserByEmail(String email);

    @Query("select s.sid from SalesPerson s where s.semail != 'admin@gmail.com'")
    public List<Integer> getAllSids();

    @Query("select s from SalesPerson s where s.sid = ?1")
    public SalesPerson getSalesPersonRecord(Integer sid);





}
