package com.helpbridge.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.helpbridge.enums.Profile;
import com.helpbridge.model.Usuarios;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioResponseDTO {

    private Long id;

    @JsonProperty(required = true)
    private String name;

    @JsonProperty(required = true)
    private String email;

    @JsonProperty(required = true)
    private Profile profile;

    public UsuarioResponseDTO(){

    }

    public UsuarioResponseDTO(Usuarios usuario) {
        this.id = usuario.getId();
        this.name = usuario.getName();
        this.email = usuario.getEmail();
        this.profile = usuario.getProfile();
    }

}


