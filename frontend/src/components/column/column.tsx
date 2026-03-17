import { useDroppable } from "@dnd-kit/core";

import './column.css';


type ColumnProps = {
  id: string;
  title: string;
  children: React.ReactNode;

}

function Column({ id, title, children }: ColumnProps) {

  const { setNodeRef } = useDroppable({
    id: id
  });

   return (

    <div ref={setNodeRef} className="column">

      <h2>{title}</h2>

      {children}

    </div>

  );

}

export default Column;