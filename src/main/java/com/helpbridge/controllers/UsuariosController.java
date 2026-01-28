package com.helpbridge.controllers;

import com.helpbridge.dto.UsuarioResponseDTO;
import com.helpbridge.dto.UsuarioRequestDTO;
import com.helpbridge.dto.UsuarioUpdateDTO;
import com.helpbridge.model.Usuarios;
import com.helpbridge.services.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UsuariosController {

    @Autowired
    UsuarioService usuarioService;

    /*@PostMapping
    public Usuarios create(@RequestBody Usuarios usuarios){
        return usuarioService.create(usuarios);
    }*/
    @PostMapping
    public ResponseEntity<UsuarioResponseDTO> create(@RequestBody UsuarioRequestDTO dto) {
        return ResponseEntity.ok(usuarioService.createUsuario(dto));
    }

   /* @GetMapping(value = "/{id}")
    public Optional<Usuarios> findById(@PathVariable("id") Long id){
        return usuarioService.findById(id);
    }*/

    @GetMapping(value = "/{id}")
    public ResponseEntity<UsuarioResponseDTO> findById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(usuarioService.findById(id));
    }

   /* @GetMapping
    public List<Usuarios> findAll(){
        return usuarioService.findAll();
    }*/

    @GetMapping
    public ResponseEntity<List<UsuarioResponseDTO>> findAll() {
        return ResponseEntity.ok(usuarioService.findAll());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UsuarioResponseDTO> update(@PathVariable("id") Long id,
                                                     @RequestBody UsuarioUpdateDTO dto) {

        return ResponseEntity.ok(usuarioService.update(id, dto));
    }


   /* @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id){
        usuarioService.delete(id);
    } */

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        usuarioService.delete(id);
        return ResponseEntity.ok().build();
    }

}
