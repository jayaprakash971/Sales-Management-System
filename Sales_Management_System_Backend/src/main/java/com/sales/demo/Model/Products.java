package com.sales.demo.Model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Getter
@Setter
public class Products {

    @Id
    @GeneratedValue
    @Column
    private Integer pid;
    @Column
    private String pname;
    @Column
    private Integer ptype_int;

    @Column
    private Integer pcost;

    @Column
    private Date pmanu_date;

    public Products() {
    }

    public Products(Integer pid, String pname, Integer ptype_int, Integer pcost, Date pmanu_date) {
        this.pid = pid;
        this.pname = pname;
        this.ptype_int = ptype_int;
        this.pcost = pcost;
        this.pmanu_date = pmanu_date;
    }

    @Override
    public String toString() {
        return "Products{" +
                "pid=" + pid +
                ", pname='" + pname + '\'' +
                ", ptype_int=" + ptype_int +
                ", pcost=" + pcost +
                ", pmanu_date=" + pmanu_date +
                '}';
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public Integer getPtype_int() {
        return ptype_int;
    }

    public void setPtype_int(Integer ptype_int) {
        this.ptype_int = ptype_int;
    }

    public Integer getPcost() {
        return pcost;
    }

    public void setPcost(Integer pcost) {
        this.pcost = pcost;
    }

    public Date getPmanu_date() {
        return pmanu_date;
    }

    public void setPmanu_date(Date pmanu_date) {
        this.pmanu_date = pmanu_date;
    }
}
