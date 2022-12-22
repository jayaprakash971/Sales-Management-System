package com.sales.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class LocationQuota {
    @Id
    @GeneratedValue
    @Column
    private Integer s_no;
    @Column
    private String location;
    @Column
    private Integer quota;

    public LocationQuota() {
    }

    public LocationQuota(Integer s_no, String location, Integer quota) {
        this.s_no = s_no;
        this.location = location;
        this.quota = quota;
    }

    public Integer getS_no() {
        return s_no;
    }

    public void setS_no(Integer s_no) {
        this.s_no = s_no;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getQuota() {
        return quota;
    }

    public void setQuota(Integer quota) {
        this.quota = quota;
    }
}
