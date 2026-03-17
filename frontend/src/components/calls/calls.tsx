
import { useEffect, useState } from 'react';
import { useCallsData } from '../../hooks/useCallsData';
import { Card } from '../card/card';
import { CreateModal } from '../create-modal/create-modal';
import { DndContext } from "@dnd-kit/core";

import './calls.css';
import axios from 'axios';
import Column from '../column/column';


function Calls() {
      const { data } = useCallsData();

      const [isModalOpen, setIsModalOpen] = useState(false);

      const [calls, setCalls] = useState<any[]>([]);

    
    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev);
    }

    

    useEffect(() => {
      if(data) {
        setCalls(data);
      }
    }, [data]);


    const handleDragEnd = async (event: any) => { 
      
      const { active, over } = event; 

       if (!over) return; 

      const callId = String(active.id);
      const newStatus = String(over.id); 

      try {

        const token = localStorage.getItem("token");

        await axios.put(`http://localhost:8080/calls/update/${callId}`, //está sendo feita a requisição do frontend para o backend(permite que o react converse com o spring)
          { status: newStatus },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setCalls(prevCalls => 
          prevCalls.map(call =>
            call.id === Number(callId)
            ? { ...call, status: newStatus }
            : call
          )
        );

      } catch (error) {
        console.error("Erro ao atualizar status", error);
      }

    }
    

      return (
        <div>
          
          <header className="dashboard-header">
          <div className="header-content">
            <div className="header-left">
              <div className="logo-container">
                <div className="logo-icon">
                  <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
                </div>

                <h1 className='logo-text'>HelpBridge</h1>
              </div>
              <div className="search-container">
                <search className='search-icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-fg-38d12="22.11:28.2:/src/app/pages/Dashboard.tsx:176:17:5525:34:e:Search::::::B9rK"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></search>
                <input
                  className='search-input'
                  type="text"
                  placeholder="Buscar chamados..."
                />
              </div>
            </div> 

            <div className="header-actions">
              {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
              <button 
                className="btn btn-primary"
                onClick={handleOpenModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='svg-mais' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-fg-38d16="22.11:28.2:/src/app/pages/Dashboard.tsx:192:17:6078:8:e:Plus::::::ISW"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Novo Chamado
              </button>

              <button className='btn btn-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-fg-38d23="22.11:28.2:/src/app/pages/Dashboard.tsx:200:17:6363:8:e:User::::::wpV"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </button>
             
            </div>
          </div>

        </header>


    <DndContext onDragEnd={handleDragEnd}>
      <div className='kanban'>
        
      
       
          <Column id='NEW' title='Novo'>
          <div className='column-indicator-new'></div> 
          {calls?.map(item =>
              item.status === "NEW" && (
                <div className="new-calls">
          
                <Card
                    key={item.id}
                    id={item.id}
                  title={item.title}
                  description={item.description}
                  department={item.department}
                  status={item.status}
                  priority={item.priority}
                  usuario={item.usuario} 
                />
                </div>
              )
          )}
          </Column>
        
        
    
        
          <Column id="IN_PROGRESS" title="Em Andamento">
          <div className='column-indicator-inprogress'></div> 
          {calls?.map(item =>
              item.status === "IN_PROGRESS" && (
                <div className="progress-calls">
                <Card
                key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  department={item.department}
                  status={item.status}
                  priority={item.priority}
                  usuario={item.usuario} 
                />
                </div>
              )
              
          )}
          </Column>
        
        
           <Column id="WAITING_RESPONSE" title="Aguardando Resposta">
            <div className='column-indicator-waiting'></div> 
          {calls?.map(item =>
              item.status === "WAITING_RESPONSE" && (
                <div className="waiting-calls">
                <Card
                key={item.id}
                id={item.id}
                  title={item.title}
                  description={item.description}
                  department={item.department}
                  status={item.status}
                  priority={item.priority}
                  usuario={item.usuario} 
                />
                </div>
              )
          )}
          </Column>
          
          <Column id="RESOLVED" title="Resolvido">
         <div className='column-indicator-resolved'></div> 
          {calls?.map(item =>
              item.status === "RESOLVED" && (
                <div className="resolved-calls">
                <Card
                 key={item.id}
              id={item.id}
                  title={item.title}
                  description={item.description}
                  department={item.department}
                  status={item.status}
                  priority={item.priority}
                  usuario={item.usuario} 
                />
                </div>
              )
          )}
        </Column>  
        
    
        </div>
        </DndContext>
      </div>
      
      
      )
    }

export default Calls

