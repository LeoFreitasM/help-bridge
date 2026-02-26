import { useEffect, useState } from "react";
import { useCallsDataMutate } from "../../hooks/useCallsDataMutate";
import type { CreateCallData } from "../../interface/CallsData";

import './modal.css';

interface InputProps<T> {
    label: string;
    value: T;
    updateValue: (value: T) => void;
    type?: "text" | "select" | "textarea";
    options?: T[];
}

interface ModalProps {
    closeModal: () => void;
}

const Input = <T,>({ label, value, updateValue, type = "text", options = [] }: InputProps<T>) => {
    return (
        <>
            <label>{label}</label>

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


// modal que aparece ao clicar em novo 
export function CreateModal({closeModal}: ModalProps ) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState("");
    const [priority, setPriority] = useState<CreateCallData["priority"]>("LOW");
    const { mutate, isSuccess } = useCallsDataMutate();

    const submit = () =>{
        const callsData: CreateCallData = {
            title,
            description,
            department,
            priority
        
        }
        mutate(callsData);
    }

    useEffect(() => {
        if(!isSuccess) return;
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo chamado</h2>
                <form className="input-container">
                    <Input label="Title" value={ title } updateValue={setTitle} type="text" />
                    <Input label="Description" value={ description } updateValue={setDescription} type="textarea" />
                    <Input label="Department" value={ department } updateValue={setDepartment} type="text" />
                    <Input label="Priority" value={ priority } updateValue={setPriority} type="select" options={["LOW", "MEDIUM", "HIGH"]} />

                </form>

                <button onClick={submit} className="btn-secondary">Cadastrar</button>
            </div>

        </div>
    )
}