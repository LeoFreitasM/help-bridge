package com.helpbridge.dto;

import com.helpbridge.enums.Profile;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioUpdateDTO {

    private String name;
    private String email;
    private String password;
    private Profile profile;

}
