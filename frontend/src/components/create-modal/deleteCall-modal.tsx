import { useEffect } from 'react';
import type { DeleteCallData } from '../../interface/CallsData';
import '../usuarios/usuarioDeleteModal.css';
import { useDeleteCallsData } from '../../hooks/useDeleteCallsData';

interface ModalProps {
    selectedUser: DeleteCallData;
    closeModal:() => void;
}


export function DeleteCallModal({selectedUser, closeModal}: ModalProps) {


    const {mutate, isSuccess} = useDeleteCallsData();

    const submit = () => {
    const deleteCall: DeleteCallData = {
        id: selectedUser.id
    }

    mutate(deleteCall.id);
}

useEffect(() => {
    if(isSuccess) 
        closeModal();
}, [isSuccess])




    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Deseja excluir o chamado {selectedUser?.id}?</h2>
                <button className="btn-excluir" onClick={submit}>
                    Excluir
                </button>
                <button className="btn-close-modal" onClick={closeModal}>
                    Cancelar
                </button>
            </div>
        </div>
    )
}

