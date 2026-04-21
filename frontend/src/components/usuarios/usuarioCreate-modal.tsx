import { useEffect, useState } from "react";
import type { CreateUsuariosData } from "../../interface/UsuariosData";
import { useUsuariosDataMutate } from "../../hooks/useUsuariosDataMutate";
import './usuarioCreateModal.css';

type Option = {
  label: string;
  value: "ROLE_ADMIN" | "ROLE_USER";
};

interface UsuarioCreateModalProps {
    label?: string;
    value: string;
    updateValue: (value: string) => void;
    type?: "text" | "select";
    options?: Option[];

}

interface ModalProps {
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


export function CreateModal({ closeModal }: ModalProps) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState<CreateUsuariosData["profile"]>("ROLE_ADMIN");
    const {mutate, isSuccess} = useUsuariosDataMutate();




    const submit = () => {
        const usuariosData: CreateUsuariosData = {
            name,
            email,
            password,
            profile
        }
        
     mutate(usuariosData);
    }

    useEffect(() => {
        if(isSuccess) {
            closeModal();
        }
    }, [isSuccess]);


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Criar Usuário</h2>

                <form>
                    <Input label="Nome" value={name} updateValue={setName} type="text" />
                    <Input label="Email" value={email} updateValue={setEmail} type="text" />
                    <Input label="Senha" value={password} updateValue={setPassword} type="text" />
                    <Input label="Perfil" value={profile} updateValue={setProfile} type="select" options={[
                        { label: "Administrador", value: "ROLE_ADMIN" },
                        { label: "Usuário", value: "ROLE_USER" }
                    ]} />
                    <button className="create-button" type="button" onClick={submit}>Criar Usuário</button>
                    <button className="close-modal" type="button" onClick={closeModal}>Fechar</button>
                </form>    

            </div>
        </div>
    );
}