package com.helpbridge.dto;

import com.helpbridge.enums.Priority;
import com.helpbridge.enums.Status;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CallsResponseDTO {

    private Long id;

    private String title;

    private String description;

    private String department;

    private Status status;

    private Priority priority;

    private Long usuario;

    private Long admin;

    private String adminResponse;
}
