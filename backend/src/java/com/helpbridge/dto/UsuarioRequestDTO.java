package com.helpbridge.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.helpbridge.enums.Profile;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioRequestDTO {

    @JsonProperty(required = true)
    private String name;

    @JsonProperty(required = true)
    private String email;

    @JsonProperty(required = true)
    private String password;

    @JsonProperty(required = true)
    private Profile profile;


}
