package com.sales.demo.Repository;

import com.sales.demo.Model.ProductTypes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductTypesRepo extends JpaRepository<ProductTypes,Integer> {

}
