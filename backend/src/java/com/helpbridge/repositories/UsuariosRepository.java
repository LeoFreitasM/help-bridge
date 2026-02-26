package com.helpbridge.repositories;

import com.helpbridge.model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface UsuariosRepository extends JpaRepository<Usuarios, Long> {

  Optional<Usuarios> findByEmail(String email);

}
