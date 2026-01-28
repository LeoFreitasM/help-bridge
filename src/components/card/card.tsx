import './card.css'

interface CardProps{

    title: string;
    description: string;
    departament: string;
    status: string;
    priority: string;
    usuario: string;
}
export function Card({ title, description, departament, status, priority, usuario } : CardProps){
    return(
        <div className="card">
            <h2>{title}</h2>
            <p><b>Description:</b> {description}</p>
            <p><b>Departament:</b> {departament}</p>
            <p><b>Status:</b> {status}</p>
            <p><b>Priority:</b> {priority}</p>
            <p><b>Usuario:</b> {usuario}</p>
        </div>
    )
}