package com.sales.demo.Model;

import com.fasterxml.jackson.databind.DatabindException;
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
public class SaleLineItems {

    @Id
    @GeneratedValue
    @Column
    private Integer Sno;
    @Column
    private Integer sid;
    @Column
    private Integer pid;
    @Column
    private Date sale_date;

    public SaleLineItems() {
    }

    public SaleLineItems(Integer sno, Integer sid, Integer pid, Date sale_date) {
        Sno = sno;
        this.sid = sid;
        this.pid = pid;
        this.sale_date = sale_date;
    }

    @Override
    public String toString() {
        return "SaleLineItems{" +
                "Sno=" + Sno +
                ", sid=" + sid +
                ", pid=" + pid +
                ", sale_date=" + sale_date +
                '}';
    }

    public Integer getSno() {
        return Sno;
    }

    public void setSno(Integer sno) {
        Sno = sno;
    }

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public Date getSale_date() {
        return sale_date;
    }

    public void setSale_date(Date sale_date) {
        this.sale_date = sale_date;
    }
}
