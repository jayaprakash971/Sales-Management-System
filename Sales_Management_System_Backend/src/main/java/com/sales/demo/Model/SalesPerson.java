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
public class SalesPerson {
    @Id
    @GeneratedValue
    @Column
    private Integer sid;
    @Column
    private String sname;
    @Column
    private Integer slevel;
    @Column
    private String semail;
    @Column
    private String spassword;
    @Column
    private String sphone;
    @Column
    private String slocation;

    public SalesPerson() {
    }

    public SalesPerson(Integer sid, String sname, Integer slevel, String semail, String spassword, String sphone, String slocation) {
        this.sid = sid;
        this.sname = sname;
        this.slevel = slevel;
        this.semail = semail;
        this.spassword = spassword;
        this.sphone = sphone;
        this.slocation = slocation;
    }

    @Override
    public String toString() {
        return "SalesPerson{" +
                "sid=" + sid +
                ", sname='" + sname + '\'' +
                ", slevel=" + slevel +
                ", semail='" + semail + '\'' +
                ", spassword='" + spassword + '\'' +
                ", sphone='" + sphone + '\'' +
                ", slocation='" + slocation + '\'' +
                '}';
    }

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public Integer getSlevel() {
        return slevel;
    }

    public void setSlevel(Integer slevel) {
        this.slevel = slevel;
    }

    public String getSemail() {
        return semail;
    }

    public void setSemail(String semail) {
        this.semail = semail;
    }

    public String getSpassword() {
        return spassword;
    }

    public void setSpassword(String spassword) {
        this.spassword = spassword;
    }

    public String getSphone() {
        return sphone;
    }

    public void setSphone(String sphone) {
        this.sphone = sphone;
    }

    public String getSlocation() {
        return slocation;
    }

    public void setSlocation(String slocation) {
        this.slocation = slocation;
    }
}
