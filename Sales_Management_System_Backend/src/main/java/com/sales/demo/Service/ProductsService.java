package com.sales.demo.Service;

import com.sales.demo.Model.Products;
import com.sales.demo.Model.SalesPerson;
import com.sales.demo.Repository.ProductsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepo pRepo;

    public List<Products> getAllProducts(){ return pRepo.findAll();}

    public void addProduct(Products p){ pRepo.save(p); }

    public Boolean deleteProduct(Integer id) {
        if (!pRepo.existsById(id)) {
            return false;
        }
        pRepo.deleteById(id);
        return true;
    }

    public Products updateProduct(Products p) {
        Products existingProduct = pRepo.findById(p.getPid()).orElse(null);

        existingProduct.setPname(p.getPname());
        existingProduct.setPtype_int(p.getPtype_int());
        existingProduct.setPcost(p.getPcost());
        existingProduct.setPmanu_date(p.getPmanu_date());

        return pRepo.save(existingProduct);

    }




}
