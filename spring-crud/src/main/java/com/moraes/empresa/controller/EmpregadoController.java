package com.moraes.empresa.controller;

import com.moraes.empresa.model.Empregado;
import com.moraes.empresa.service.EmpregadoService;
import java.net.URI;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin
@RequestMapping(value = "/empregados")
public class EmpregadoController {

    @Autowired
    private EmpregadoService empregadoService;

    @GetMapping
    public ResponseEntity<List<Empregado>> findAll() {
        List<Empregado> listaEmpregados = empregadoService.findAll();
        return ResponseEntity.ok().body(listaEmpregados);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Empregado> findById(@PathVariable Long id) {
        Empregado empregado = empregadoService.findById(id);
        return ResponseEntity.ok().body(empregado);
    }

    @PostMapping
    public ResponseEntity<Empregado> save(@Valid @RequestBody Empregado obj) {
        obj = empregadoService.save(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        empregadoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Empregado> update(@PathVariable Long id,
            @Valid @RequestBody Empregado obj) {
        obj = empregadoService.update(id, obj);
        return ResponseEntity.ok().body(obj);
    }
}
