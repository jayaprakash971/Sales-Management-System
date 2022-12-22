package com.sales.demo.Repository;

import com.sales.demo.Model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepo extends JpaRepository<Products, Integer> {

      @Query("select pcost from Products where pid= ?1")
      public Integer getPCostOfId(Integer pid);

      @Query("select ptype_int from Products where pid= ?1")
      public Integer getPtypeOfId(Integer pid);



}
