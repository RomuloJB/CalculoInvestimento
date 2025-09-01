package com.ifpr.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifpr.backend.model.Calculo;

@Repository
public interface CalculoRepository extends JpaRepository<Calculo, Long> {
}
