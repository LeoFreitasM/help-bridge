import './App.css'
import { Card } from './components/card/card';
import type { CallsData } from './interface/CallsData';


function App() {
const data: CallsData[] = [];

  return (
    <div className="container">
      <h1>Chamados</h1>
      <div className="card-grid">
      {data.map(item => 
      <Card 
      title={item.title} 
      description={item.description} 
      departament={item.departament} 
      status={item.status} 
      priority={item.priority} 
      usuario={item.usuario}/>)}
      </div>

    </div>
  )
}

export default App
