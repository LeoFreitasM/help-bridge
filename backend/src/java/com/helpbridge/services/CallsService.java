package com.helpbridge.services;

import com.helpbridge.dto.CallsRequestDTO;
import com.helpbridge.dto.CallsResponseDTO;
import com.helpbridge.dto.CallsUpdateDTO;
import com.helpbridge.enums.Status;
import com.helpbridge.mapstruct.CallsMapper;
import com.helpbridge.model.Calls;
import com.helpbridge.model.Usuarios;
import com.helpbridge.repositories.CallsRepository;
import com.helpbridge.repositories.UsuariosRepository;
import com.helpbridge.security.SecurityFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CallsService {

    @Autowired
    CallsRepository callsRepository;

    @Autowired
    CallsMapper mapper;

    @Autowired
    UsuariosRepository usuariosRepository;


    public CallsResponseDTO createCall(CallsRequestDTO request) {

        Calls calls = mapper.forCallsEntity(request);

        Usuarios users = (Usuarios) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        Long userId = users.getId();

        Usuarios usuario = usuariosRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário padrão não encontrado"));
        calls.setUsuario(usuario);

        calls.setStatus(Status.NEW);

        calls = callsRepository.save(calls);

        return mapper.forCallsResponseDTO(calls);

    }

  /*  public CallsResponseDTO findByTitle(String title){
        return mapper.forCallsResponseDTO(
                callsRepository.findByTitle(title));
    }*/

    public CallsResponseDTO findById(Long id) {
        return callsRepository.findById(id)
                .map(calls -> mapper.forCallsResponseDTO(calls))
                .orElseThrow(() -> new RuntimeException("Chamado não encontrado"));
    }

    public List<CallsResponseDTO> findAll() {

        return mapper.forListCallsResponseDTO(
                callsRepository.findAll());
    }

    public CallsResponseDTO update(Long id, CallsUpdateDTO dto) {

        Calls calls = callsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Chamado não encontrado"));


        if (dto.getDescription() != null) calls.setDescription(dto.getDescription());
        if (dto.getPriority() != null) calls.setPriority(dto.getPriority());
        if (dto.getStatus() != null) calls.setStatus(dto.getStatus());
        if (dto.getAdminResponse() != null) calls.setAdminResponse(dto.getAdminResponse());



        Calls updated = callsRepository.save(calls);

        return mapper.forCallsResponseDTO(updated);

    }


    public void delete(Long id) {
        callsRepository.deleteById(id);
    }

}
