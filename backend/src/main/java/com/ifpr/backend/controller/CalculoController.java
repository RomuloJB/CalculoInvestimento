package com.ifpr.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ifpr.backend.model.Calculo;
import com.ifpr.backend.service.CalculoService;

@RestController
@RequestMapping("/api")
public class CalculoController {
    @Autowired CalculoService calculoService;
    
    @PostMapping("/calculo")
    public Map<String, Double> calcular(@RequestBody Map<String, Object> body) {
        double valorInicial = (double) body.get("valorInicial");
        double prazo = (double) body.get("prazo");
        double jurosMensais = (double) body.get("jurosMensais");
        double valorFinal = calculoService.calcularValorFinal(valorInicial, prazo, jurosMensais);
        return Map.of("valorFinal", valorFinal);
    }

    @PostMapping("/salvar")
    public Calculo salvar(@RequestBody Calculo calculo) {
        return calculoService.salvarCalculo(calculo);
    }

    @GetMapping("/listar")
    public List<Calculo> listar() {
        return calculoService.listarCalculos();
    }

    @DeleteMapping("/calculo")
    public void limpar() {
        calculoService.limpar();
    }
}
