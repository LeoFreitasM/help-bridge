
import { useState } from 'react';
import { useCallsData } from '../../hooks/useCallsData';
import { Card } from '../card/card';
import { CreateModal } from '../create-modal/create-modal';

import './calls.css';

function Calls() {
      const { data } = useCallsData();
      const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev);
    }

    
      return (
        <div className="container">
          <h1>Chamados</h1>
    
          <div className='kanban'>
    
        <div className="new-calls">
          <h2>New</h2>
          {data?.map(item =>
              item.status === "NEW" && (
                <Card
                  title={item.title}
                  description={item.description}
                  department={item.department}
                  status={item.status}
                  priority={item.priority}
                  usuario={item.usuario} 
                />
              )
          )}
        </div>
    
        <div className="progress-calls">
          <h2>Progress</h2>
          {data?.map(item =>
              item.status === "IN_PROGRESS" && (
                <Card
                  title={item.title}
                  description={item.description}
                  department={item.department}
                  status={item.status}
                  priority={item.priority}
                  usuario={item.usuario} 
                />
              )
          )}
        </div>
    
        <div className="waiting-calls">
          <h2>Waiting Response</h2>
          {data?.map(item =>
              item.status === "WAITING_RESPONSE" && (
                <Card
                  title={item.title}
                  description={item.description}
                  department={item.department}
                  status={item.status}
                  priority={item.priority}
                  usuario={item.usuario} 
                />
              )
          )}
        </div>
    
         <div className="resolved-calls">
          <h2>Resolved</h2>
          {data?.map(item =>
              item.status === "RESOLVED" && (
                <Card
                  title={item.title}
                  description={item.description}
                  department={item.department}
                  status={item.status}
                  priority={item.priority}
                  usuario={item.usuario} 
                />
              )
          )}
        </div>
    
        </div>
    
    
                {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
                <button onClick={handleOpenModal}>Novo</button>
        </div>
      
      )
    }

export default Calls