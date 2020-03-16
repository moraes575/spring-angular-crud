package com.moraes.empresa.service;

import com.moraes.empresa.model.Empregado;
import com.moraes.empresa.repository.EmpregadoRepository;
import com.moraes.empresa.service.exception.DatabaseException;
import com.moraes.empresa.service.exception.ResourceNotFoundException;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

@Service
public class EmpregadoService {

    @Autowired
    private EmpregadoRepository empregadoRepository;

    public List<Empregado> findAll() {
        return empregadoRepository.findAll();
    }

    public Empregado findById(Long id) {
        Optional<Empregado> obj = empregadoRepository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public Empregado save(Empregado obj) {
        return empregadoRepository.save(obj);
    }

    public void deleteById(Long id) {
        try {
            empregadoRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException((id));
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException(e.getMessage());
        }
    }

    public Empregado update(Long id, Empregado obj) {
        try {
            Empregado entidade = empregadoRepository.getOne(id);
            atualizarDados(entidade, obj);
            return empregadoRepository.save(entidade);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    private void atualizarDados(Empregado entidade, Empregado obj) {
        entidade.setNome(obj.getNome());
        entidade.setSobrenome(obj.getSobrenome());
        entidade.setEmail(obj.getEmail());
    }
}
