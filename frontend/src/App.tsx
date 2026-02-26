
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Calls from './components/calls/calls';

function App() {

return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/calls' element={<Calls/>}/>
  </Routes>
  </BrowserRouter>
)

}

{/*function App() {
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
}*/}

export default App
