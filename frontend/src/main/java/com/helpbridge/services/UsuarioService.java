package com.helpbridge.services;

import com.helpbridge.dto.UsuarioRequestDTO;
import com.helpbridge.dto.UsuarioResponseDTO;
import com.helpbridge.dto.UsuarioUpdateDTO;
import com.helpbridge.mapstruct.UsuarioMapper;
import com.helpbridge.model.Usuarios;
import com.helpbridge.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UsuarioService {

    @Autowired
    UsuariosRepository usuariosRepository;

    @Autowired
    UsuarioMapper mapper;

  /*  public Usuarios create (Usuarios usuarios){

        return usuariosRepository.save(usuarios);
    }*/

    public UsuarioResponseDTO createUsuario(UsuarioRequestDTO request) {

        return mapper.forResponseDTO(
                (usuariosRepository.save(
                        mapper.forUsuarioEntity(request))));
    }

   /* public List<Usuarios> findAll(){
        return usuariosRepository.findAll();
    }*/

    public List<UsuarioResponseDTO> findAll() {

        return mapper.forListarUsuarioResponseDTO(
                usuariosRepository.findAll());

    }

   /* public Optional<Usuarios> findById (Long id){

        return usuariosRepository.findById(id);
    }*/

    public UsuarioResponseDTO findById(Long id) {

        return usuariosRepository.findById(id)
                .map(usuario -> mapper.forResponseDTO(usuario))
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

    }

    public UsuarioResponseDTO update(Long id, UsuarioUpdateDTO dto) {

        Usuarios usuario = usuariosRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário padrão não encontrado"));

        if (dto.getName() != null) usuario.setName(dto.getName());
        if (dto.getEmail() != null) usuario.setEmail(dto.getEmail());
        if (dto.getPassword() != null) usuario.setPassword(dto.getPassword());

        Usuarios updated = usuariosRepository.save(usuario);

        return mapper.forResponseDTO(updated);

    }

    public void delete(Long id) {
        usuariosRepository.deleteById(id);
    }


}