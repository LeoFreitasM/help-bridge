import { useEffect, useState } from "react";
import type { CallsData, CreateCallData, UpdateCallData } from "../../interface/CallsData";
import { useResponseCallMutate } from "../../hooks/useResponseCallMutate";
import './response-modal.css';

interface InputProps<T> {
    label?: string;
    value: T;
    updateValue: (value: T) => void;
    type?: "text" | "select" | "textarea";
    options?: T[];
}

interface ModalProps {
    selectedUser: CallsData | null;
    closeModal: () => void;
}

const Input = <T,>({label, value, updateValue, type = "text", options = []}: InputProps<T>) => {
    return (
        <>
            {label && <label>{label}</label>}

            {type === "text" && (
                <input
                    value={value as string}
                    onChange={(event) =>
                        updateValue(event.target.value as unknown as T)
                    }
                    
                />
            )}

            {type === "textarea" && (
                <textarea
                    value={value as string}
                    onChange={(event) =>
                        updateValue(event.target.value as unknown as T)
                    }
                    rows={4}
                    
                />
            )}

            {type === "select" && (
                <select
                    value={value as string}
                    onChange={(event) =>
                        updateValue(event.target.value as unknown as T)
                    }

                >
                    {options.map((option) => (
                        <option key={String(option)} value={option as string}>
                            {String(option)}
                        </option>
                    ))}
                </select>
            )}
        </>
    );
};

export function ResponseModal({ selectedUser, closeModal}: ModalProps ) {

    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState("");
    const [priority, setPriority] = useState<CreateCallData["priority"]>("LOW");
    const [usuario, setUsuario] = useState("");
    const [adminResponse, setAdminResponse] = useState("");

    
    const {mutate, isSuccess} = useResponseCallMutate();

   useEffect(() => {
        if(selectedUser) {
            setId(selectedUser.id); 
            setTitle(selectedUser.title);
            setDescription(selectedUser.description);
            setDepartment(selectedUser.department);
            setPriority(selectedUser.priority);
            setUsuario(selectedUser.usuario);
            setAdminResponse(selectedUser.adminResponse);
        }
        }, [selectedUser]);


    const submit = () =>{
            const updateData: UpdateCallData = {
            id,
            title,
            description,
            department,
            priority,
            usuario,
            adminResponse
        }
        mutate(updateData);
    }


  useEffect(() => {
    if (isSuccess) {
        closeModal();
    }
}, [isSuccess])

    return (
      
        <div className="modal-overlay">
            <div className="modal-body">

                <h2>Responder chamado</h2>
                
                <form className="input-container">

                    <div>
                        <label>Título: </label>  { title }
                     
                    </div>

                    <div>
                     <label>Descrição: </label> { description }
                     
                    </div>
                    
                    <div className="department">
                        <label>Departamento: </label> { department }
                        
                    </div>
                    
                    <div className="department">
                        <label>Usuario: </label> <p> #{ usuario }</p>
                        
                    </div>

                     <div className="department">
                        <label>Resposta Chamado</label>
                        <Input value={ adminResponse } updateValue={setAdminResponse} type="textarea" />
                    </div>
                    

                </form>

                <div className="btns">
                    <button onClick={submit} className="btn-secondary">Responder</button>
                    <button onClick={closeModal} className="btn-cancelar">Cancelar</button>
                </div>
            </div>

        </div>
    )
}