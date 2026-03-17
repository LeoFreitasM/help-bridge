import { useDraggable } from '@dnd-kit/core';
import './card.css'

interface CardProps {

    id: number;
    title: string;
    description: string;
    department: string;
    status: string;
    priority: string;
    usuario: string;
}
export function Card({ id, title, 
    description,
    department,
    status,
    priority,
    usuario }: CardProps) {

          const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

        const style = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
        }
        : undefined;

    return (
        <div  ref={setNodeRef} style={style} {...listeners} {...attributes} className="card">
           {/* <p><b>Id:</b> {id}</p>}*/}
            <p><b>Título:</b> {title}</p>
            <p><b>Descrição:</b> {description}</p>
            <p><b>Departamento:</b> {department}</p>
            {/* <p><b>Status:</b> {status}</p> */}
            <p className='prioridade'><b>Prioridade:</b> {priority}</p>
            <p><b>Usuario:</b> {usuario}</p>
        </div>
    )
}