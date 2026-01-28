package com.helpbridge.mapstruct;

import com.helpbridge.dto.CallsRequestDTO;
import com.helpbridge.dto.CallsResponseDTO;
import com.helpbridge.model.Calls;
import com.helpbridge.model.Usuarios;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CallsMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "usuario", ignore = true)
    @Mapping(target = "admin", ignore = true)
    @Mapping(target = "adminResponse", ignore = true)
    Calls forCallsEntity(CallsRequestDTO dto);

    @Mapping(source = "usuario.id", target = "usuario")
    @Mapping(source = "admin.id", target = "admin")
    CallsResponseDTO forCallsResponseDTO(Calls callsEntity);

    List<CallsResponseDTO> forListCallsResponseDTO(List<Calls> callsList);


}
