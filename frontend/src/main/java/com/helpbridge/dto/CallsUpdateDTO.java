package com.helpbridge.dto;

import com.helpbridge.enums.Priority;
import com.helpbridge.enums.Status;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CallsUpdateDTO {

    private String description;
    private Status status;
    private Priority priority;
    private String adminResponse;


}
