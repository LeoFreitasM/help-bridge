package com.helpbridge.controllers;

import com.helpbridge.dto.UsuarioResponseDTO;
import com.helpbridge.dto.UsuarioRequestDTO;
import com.helpbridge.dto.UsuarioUpdateDTO;
import com.helpbridge.model.Usuarios;
import com.helpbridge.repositories.UsuariosRepository;
import com.helpbridge.services.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/usuarios")
public class UsuariosController {


    private final UsuarioService usuarioService;
    private final UsuariosRepository usuariosRepository;

    public UsuariosController(UsuarioService usuarioService, UsuariosRepository usuariosRepository){
        this.usuarioService = usuarioService;
        this.usuariosRepository = usuariosRepository;
    }


   @PostMapping("/newUsuario")
    public ResponseEntity<UsuarioResponseDTO> create(@RequestBody @Valid UsuarioRequestDTO dto) {
        return ResponseEntity.ok(usuarioService.createUsuario(dto));
    }



    @GetMapping(value = "/{id}")
    public ResponseEntity<UsuarioResponseDTO> findById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(usuarioService.findById(id));
    }


    @GetMapping
    public ResponseEntity<List<UsuarioResponseDTO>> findAll() {
        return ResponseEntity.ok(usuarioService.findAll());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UsuarioResponseDTO> update(@PathVariable("id") Long id,
                                                     @RequestBody UsuarioUpdateDTO dto) {

        return ResponseEntity.ok(usuarioService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        usuarioService.delete(id);
        return ResponseEntity.ok().build();
    }

}   
