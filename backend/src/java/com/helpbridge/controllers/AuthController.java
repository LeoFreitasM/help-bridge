package com.helpbridge.controllers;

import com.helpbridge.dto.AuthenticationDTO;
import com.helpbridge.dto.LoginResponseDTO;
import com.helpbridge.model.Usuarios;
import com.helpbridge.services.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    public AuthController(AuthenticationManager authenticationManager, TokenService tokenService){
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
    }


@PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data) {
    var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password()); //classe instanciada do Spring Security
    var auth = authenticationManager.authenticate(usernamePassword);

    var token = tokenService.generateToken((Usuarios) auth.getPrincipal());

    return ResponseEntity.ok(new LoginResponseDTO(token));

}
}
