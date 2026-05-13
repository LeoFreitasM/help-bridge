import { useEffect } from "react";
import { useDeleteUsuariosData } from "../../hooks/useDeleteUsuariosData";
import type { DeleteUsuariosData } from "../../interface/UsuariosData";
import './usuarioDeleteModal.css';


interface ModalProps {
  selectedUser: DeleteUsuariosData;
  closeModal: () => void;
}

export function UsuarioDeleteModal({ selectedUser, closeModal }: ModalProps) {

    const {mutate, isSuccess} = useDeleteUsuariosData();

     const submit = () => {
        const deleteUser: DeleteUsuariosData = {
             id: selectedUser.id
          
        }

        mutate(deleteUser.id);
    }

     useEffect(() => {
        if (isSuccess)
            closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Deseja excluir o usuário {selectedUser.id}?</h2>
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