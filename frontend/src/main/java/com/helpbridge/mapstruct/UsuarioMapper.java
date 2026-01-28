package com.helpbridge.mapstruct;

import com.helpbridge.dto.UsuarioRequestDTO;
import com.helpbridge.dto.UsuarioResponseDTO;
import com.helpbridge.model.Usuarios;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;


@Mapper(componentModel = "spring")
public interface UsuarioMapper {

    @Mapping(target = "id", ignore = true)
    Usuarios forUsuarioEntity(UsuarioRequestDTO dto);

    UsuarioResponseDTO forResponseDTO(Usuarios usuarioEntity);

    List<UsuarioResponseDTO> forListarUsuarioResponseDTO(List<Usuarios> usuariosList);

}
