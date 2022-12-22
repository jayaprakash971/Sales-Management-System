package com.sales.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ComissionRules {

    @Id
    @GeneratedValue
    @Column
    private Integer s_number;
    @Column
    private Integer level;
    @Column
    private Integer comission_amount;

    public ComissionRules() {
    }

    public ComissionRules(Integer s_number, Integer level, Integer comission_amount) {
        this.s_number = s_number;
        this.level = level;
        this.comission_amount = comission_amount;
    }

    @Override
    public String toString() {
        return "ComissionRules{" +
                "s_number=" + s_number +
                ", level=" + level +
                ", comission_amount=" + comission_amount +
                '}';
    }

    public Integer getS_number() {
        return s_number;
    }

    public void setS_number(Integer s_number) {
        this.s_number = s_number;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getComissionamount() {
        return comission_amount;
    }

    public void setComissionamount(Integer comissionamount) {
        this.comission_amount = comission_amount;
    }
}
