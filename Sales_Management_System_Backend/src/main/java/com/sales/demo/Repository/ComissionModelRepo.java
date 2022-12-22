package com.sales.demo.Repository;

import com.sales.demo.Model.ComissionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComissionModelRepo extends JpaRepository<ComissionModel,Integer> {

}
