package com.ifpr.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifpr.backend.model.Calculo;
import com.ifpr.backend.repository.CalculoRepository;

import lombok.AllArgsConstructor;

@Service
public class CalculoService {
    @Autowired private CalculoRepository repo;

    public double calcularValorFinal(double valorInicial, double prazo, double jurosMensais) {
        return valorInicial * Math.pow(1 + jurosMensais, prazo);
    }

    public Calculo salvarCalculo(Calculo calculo){
        return repo.save(calculo);
    }

    public List<Calculo> listarCalculos() {
        return repo.findAll();
    }

    public void limpar(){
        repo.deleteAll();
    }
    
}
