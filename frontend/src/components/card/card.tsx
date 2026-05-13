import { useDraggable } from '@dnd-kit/core';
import './card.css'
import { useState } from 'react';
import { ResponseModal } from '../create-modal/response-modal';
import { DeleteCallModal } from '../create-modal/deleteCall-modal';



interface CardProps {

    id: number;
    title: string;
    description: string;
    department: string;
    status: string;
    priority: "LOW" | "MEDIUM" | "HIGH"; 
    usuario: string;
    adminResponse: string;
}
export function Card({ id, title, 
    description,
    department,
    priority,
    usuario,
    adminResponse }: CardProps) {

          const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

    const getPriorityText = (priority: string) => {
        switch (priority) {
            case 'MEDIUM': return 'Media';
            case 'HIGH': return 'Alta';
            case 'LOW': return 'Baixa';
            default: return priority;
        }
    }

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'MEDIUM': return '#f59e0b';
            case 'HIGH': return '#ef4444';
            case 'LOW': return '#10b981';
            default: return '#6b7280';
        }
    }

        const style = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
        }
        : undefined;

        const [isModalOpenResponse, setIsModalOpenResponse] = useState(false);
        const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

        const handleDeleteCall = () => {
            setIsModalDeleteOpen(false);
        }
       

        const handleCallResponse = () => {
            setIsModalOpenResponse(false);
        }

    return (

        <div>
        
        <div  ref={setNodeRef} style={style} className="card">
           
           <div {...listeners} {...attributes} >
            <div className='title-priority'>
                <p className='title' ><b> {title}</b></p>
                <p className='priority' style={{ backgroundColor: getPriorityColor(priority) }}><b> {getPriorityText(priority)}</b></p>
            </div>
            

        <div className="divider"></div>
            <div className='description'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#838282" viewBox="0 0 256 256"><path d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"></path></svg>
                <p>{description}</p>
            </div>
            

        <div className='depart-user'>
            <div className='department'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#838282" viewBox="0 0 256 256"><path d="M240,208h-8V72a8,8,0,0,0-8-8H184V40a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,112H80a8,8,0,0,0,8-8V48h80V72a8,8,0,0,0,8,8h40V208H152V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40H40Zm96,96H120V176h16ZM112,72a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,72Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,104Zm56,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,104ZM88,136a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H80A8,8,0,0,1,88,136Zm0,32a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H80A8,8,0,0,1,88,168Zm24-32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,136Zm56,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,168Z"></path></svg>
                <p><b>{department}</b></p>
            </div>

            <div className='user'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#838282" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>
                <p>#<b>{usuario}</b></p>
            </div>
        </div>
        </div>

        <div className="divider"></div>

            <div className="action-buttons">
                <div>
                    {isModalOpenResponse && <ResponseModal selectedUser={{id, title, description, department, priority, status, usuario, adminResponse}} closeModal={handleCallResponse} />}
                    
                    <a href="#" onClick={() =>  setIsModalOpenResponse(true)}>
                        
                        Ver Detalhes
                    </a>
                </div>   

            <div>

                {isModalDeleteOpen && <DeleteCallModal selectedUser={{id}} closeModal={handleDeleteCall} />}
                <button
                    onClick={() => setIsModalDeleteOpen(true)}
                    className="action-btn delete-btn"
                    title="Excluir"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0  24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"data-fg-b9qd103="57.12:57.15049:/src/app/pages/Users.tsx:334:25:9999:10:e:Trash2::::::c98" data-fgid-b9qd103=":r9i:"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                </button>
             
             </div>
                
                </div>
                

        </div>
        </div>
    )
}