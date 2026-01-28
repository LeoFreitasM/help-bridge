package com.helpbridge.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.helpbridge.enums.Profile;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioResponseDTO {

    @JsonProperty(required = true)
    private String name;

    @JsonProperty(required = true)
    private String email;

    @JsonProperty(required = true)
    private Profile profile;
}
