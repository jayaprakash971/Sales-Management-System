package com.sales.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ComissionModel {

    @Id
    @GeneratedValue
    @Column
    private Integer Sno;
    @Column
    private Integer salespersonid;
    @Column
    private Integer month;
    @Column
    private Integer year;
    @Column
    private Integer monthlycommision;
    @Column
    private Integer monthlysales;//total cost got from sales


    public ComissionModel() {
    }

    public ComissionModel(Integer sno, Integer salespersonid, Integer month, Integer year, Integer monthlycommision, Integer monthlysales) {
        Sno = sno;
        this.salespersonid = salespersonid;
        this.month = month;
        this.year = year;
        this.monthlycommision = monthlycommision;
        this.monthlysales = monthlysales;
    }

    @Override
    public String toString() {
        return "ComissionModel{" +
                "Sno=" + Sno +
                ", salespersonid=" + salespersonid +
                ", month=" + month +
                ", year=" + year +
                ", monthlycommision=" + monthlycommision +
                ", monthlysales=" + monthlysales +
                '}';
    }

    public Integer getSno() {
        return Sno;
    }

    public void setSno(Integer sno) {
        Sno = sno;
    }

    public Integer getSalespersonid() {
        return salespersonid;
    }

    public void setSalespersonid(Integer salespersonid) {
        this.salespersonid = salespersonid;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMonthlycommision() {
        return monthlycommision;
    }

    public void setMonthlycommision(Integer monthlycommision) {
        this.monthlycommision = monthlycommision;
    }

    public Integer getMonthlysales() {
        return monthlysales;
    }

    public void setMonthlysales(Integer monthlysales) {
        this.monthlysales = monthlysales;
    }
}
