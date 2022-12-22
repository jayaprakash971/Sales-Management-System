package com.sales.demo.Service;

import com.sales.demo.Model.ComissionRules;
import com.sales.demo.Model.Products;
import com.sales.demo.Repository.ComissionRulesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ComissionRulesService {
    @Autowired
    ComissionRulesRepo crRepo;

    public List<ComissionRules> getAllComissionRules(){ return crRepo.findAll();}

    public void addComissionRule(ComissionRules p){ crRepo.save(p); }

    public Boolean deleteComissionRule(Integer level) {
        ComissionRules val = crRepo.findByLevel(level);
        if (val == null) {
            return false;
        }
        crRepo.deleteByLevel(level);
        return true;
    }

    public ComissionRules updateComissionRule(ComissionRules c) {
        ComissionRules existingRecord = crRepo.findByLevel(c.getLevel());

        existingRecord.setComissionamount(c.getComissionamount());
        existingRecord.setLevel(c.getLevel());

        return crRepo.save(existingRecord);

    }
}
