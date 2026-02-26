import './card.css'

interface CardProps {

    title: string;
    description: string;
    department: string;
    status: string;
    priority: string;
    usuario: string;
}
export function Card({ title, 
    description,
    department,
    status,
    priority,
    usuario }: CardProps) {
    return (
        <div className="card">
            <p><b>Title:</b> {title}</p>
            <p><b>Description:</b> {description}</p>
            <p><b>Department:</b> {department}</p>
            <p><b>Status:</b> {status}</p>
            <p><b>Priority:</b> {priority}</p>
            <p><b>Usuario:</b> {usuario}</p>
        </div>
    )
}