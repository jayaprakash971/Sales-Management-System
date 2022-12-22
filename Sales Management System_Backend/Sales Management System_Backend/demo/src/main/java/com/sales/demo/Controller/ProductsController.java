package com.sales.demo.Controller;

import com.sales.demo.Model.Products;
import com.sales.demo.Service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    private ProductsService ps;

    @GetMapping("/getall")
    public List<Products> getproducts()
    {
        return ps.getAllProducts();

    }

    @PostMapping("/addproduct")
    public String addproduct(@RequestBody Products p)
    {
        ps.addProduct(p);
        return "Product added successfully";
    }

    @DeleteMapping("/delproduct/{id}")
    public String delproduct(@PathVariable Integer id)
    {
        boolean YES = ps.deleteProduct(id);
        if(YES==true)
            return "Product deleted";
        else
            return "Product not deleted";
    }

    @PutMapping("/updateproduct")
    public Products updateproduct(@RequestBody Products p){
        return ps.updateProduct(p);
    }

}
