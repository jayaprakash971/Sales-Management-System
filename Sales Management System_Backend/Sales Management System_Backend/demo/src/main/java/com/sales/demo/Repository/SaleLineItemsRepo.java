package com.sales.demo.Repository;

import com.sales.demo.Model.SaleLineItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SaleLineItemsRepo extends JpaRepository<SaleLineItems,Integer> {
    @Query("select s from SaleLineItems s where s.pid=?1")
    public SaleLineItems findByPid(Integer pid);

    @Query("select pid from SaleLineItems where (sid= ?1 and month(sale_date) = ?2 and year(sale_date) = ?3)")
    public List<Integer> getPids(Integer salespersonId,Integer month,Integer year);

    @Query("select pid from SaleLineItems where (sid= ?1 and day(sale_date) = ?2 and month(sale_date) = ?3 and year(sale_date) = ?4)")
    public List<Integer> getPids(Integer salespersonId, Integer day, Integer month,Integer year);
}
