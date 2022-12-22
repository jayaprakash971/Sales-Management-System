package com.sales.demo.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class ProductTypes {

    @Id
    @GeneratedValue
    @Column
    private Integer pro_id;

    @Column
    private String pro_type;

    public ProductTypes() {
    }

    public ProductTypes(Integer pro_id, String pro_type) {
        this.pro_id = pro_id;
        this.pro_type = pro_type;
    }

    @Override
    public String toString() {
        return "ProductTypes{" +
                "pro_id=" + pro_id +
                ", pro_type='" + pro_type + '\'' +
                '}';
    }

    public Integer getPro_id() {
        return pro_id;
    }

    public void setPro_id(Integer pro_id) {
        this.pro_id = pro_id;
    }

    public String getPro_type() {
        return pro_type;
    }

    public void setPro_type(String pro_type) {
        this.pro_type = pro_type;
    }
}
