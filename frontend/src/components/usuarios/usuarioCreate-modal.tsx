import { useEffect, useState } from "react";
import type { CreateUsuariosData, UsuariosData, UpdateUsuariosData } from "../../interface/UsuariosData";
import { useUsuariosDataMutate } from "../../hooks/useUsuariosDataMutate";
import './usuarioCreateModal.css';
import { useUpdateUsuarios } from "../../hooks/useUpdateUsuarios";

type Option = {
  label: string;
  value: "ROLE_ADMIN" | "ROLE_USER";
};

interface UsuarioCreateModalProps {
    label?: string;
    value: string;
    updateValue: (value: string) => void;
    type?: "text" | "select" | "password";
    options?: Option[];

}

interface ModalProps {
  selectedUser: UsuariosData | null;
  closeModal: () => void;
}

const Input = ({label, value, updateValue, type = "text", options = [] }: UsuarioCreateModalProps) => {
    return(
        <> 
            {label && <label>{label}</label>}

            {type === "text" && (
                <input
                    value={value as string  }
                    onChange={(event) =>
                        updateValue(event.target.value as unknown as string)
                    }
                />
            )}

            {type === "password" && (
                <input
                type="password"
                    value={value as string  }
                    onChange={(event) =>
                        updateValue(event.target.value as unknown as string)
                    }
                />
            )}

                 {type === "select" && (
                <select
                    value={value as string}
                    onChange={(event) =>
                        updateValue(event.target.value as "ROLE_ADMIN" | "ROLE_USER")
                    }
                >
                    {options?.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </select>
            )}
        </>
    )
};

export function CreateModal({ selectedUser, closeModal }: ModalProps) {

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState<CreateUsuariosData["profile"]>("ROLE_ADMIN");
    const {mutate, isSuccess: isCreateSuccess} = useUsuariosDataMutate();
    const { mutate: mutateUpdate,  isSuccess: isUpdateSuccess } = useUpdateUsuarios();
    

    const isEditMode = !!selectedUser;

    useEffect(() => {
        if(selectedUser) {
            
            setName(selectedUser.name);
            setEmail(selectedUser.email);
            setPassword("");
            setProfile(selectedUser.profile ?? "ROLE_ADMIN");
        }
    }, [selectedUser]);    


    const submit = () => {
        if (isEditMode) {
            const updateData: UpdateUsuariosData = {
                id: selectedUser.id,
                name,
                email,
                profile
            }
            mutateUpdate(updateData);
        } else {
        const usuariosData: CreateUsuariosData = {
            name,
            email,
            password,
            profile
        }
        
     mutate(usuariosData);
    }
}

    useEffect(() => {
        if (isCreateSuccess || isUpdateSuccess) {
            closeModal();
        }
    }, [isCreateSuccess, isUpdateSuccess]);


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Criar Usuário</h2>

                <form>
                    <Input label="Nome" value={name} updateValue={setName} type="text" />
                    <Input label="Email" value={email} updateValue={setEmail} type="text" />
                    {!isEditMode && (
                            <Input
                                label="Senha"
                                value={password}
                                updateValue={setPassword}
                                type="password"
                            />
                    )}
                   
                    <Input label="Perfil" value={profile} updateValue={setProfile} type="select" options={[
                        { label: "Administrador", value: "ROLE_ADMIN" },
                        { label: "Usuário", value: "ROLE_USER" }
                    ]} />
                    <button className="create-button" type="button" onClick={submit}> {isEditMode ? "Atualizar Usuário" : "Criar Usuário" }</button>
                    <button className="close-modal" type="button" onClick={closeModal}>Fechar</button>
                </form>    

            </div>
        </div>
    );
}