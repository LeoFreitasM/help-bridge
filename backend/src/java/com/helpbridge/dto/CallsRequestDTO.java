package com.helpbridge.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.helpbridge.enums.Priority;
import com.helpbridge.enums.Status;
import com.helpbridge.model.Usuarios;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CallsRequestDTO {

    @JsonProperty(required = true)
    private String title;

    @JsonProperty(required = true)
    private String description;

    @JsonProperty(required = true)
    private String department;

    @JsonProperty(required = true)
    private Priority priority;


}
