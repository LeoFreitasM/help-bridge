package com.helpbridge.controllers;

import com.helpbridge.dto.CallsRequestDTO;
import com.helpbridge.dto.CallsResponseDTO;
import com.helpbridge.dto.CallsUpdateDTO;
import com.helpbridge.services.CallsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calls")
public class CallsController {

    @Autowired
    CallsService callsService;

    @PostMapping
    public ResponseEntity<CallsResponseDTO> create(
            @RequestBody CallsRequestDTO requestDTO) {

        CallsResponseDTO response = callsService.createCall(requestDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }


    @GetMapping(value = "/{id}")
    public ResponseEntity<CallsResponseDTO> findById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(callsService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<CallsResponseDTO>> findAll() {
        return ResponseEntity.ok(callsService.findAll());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CallsResponseDTO> update(@PathVariable("id") Long id, @RequestBody CallsUpdateDTO dto) {
        return ResponseEntity.ok(callsService.update(id, dto));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        callsService.delete(id);
        return ResponseEntity.ok().build();
    }

}
