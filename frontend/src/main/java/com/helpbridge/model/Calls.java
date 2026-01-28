package com.helpbridge.model;

import com.helpbridge.enums.Priority;
import com.helpbridge.enums.Status;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "calls")
public class Calls {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 80)
    private String title;

    @Column(nullable = false, length = 255)
    private String description;

    @Column(nullable = false, length = 80)
    private String department;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Priority priority;

    //Usuário que abriu o chamado
    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuarios usuario;

    //Admin que respondeu
    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Usuarios admin;  //admin que respondeu

    //Resposta do admin
    @Column(nullable = true, length = 255)
    private String adminResponse;
}
