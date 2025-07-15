import { AlertTriangle  , CheckCircle2 , Info , XCircle  } from 'lucide-react';


import './App.css'

import Alert from './components/Alert/Alert'

function App() {

  return (
    <>
   <header> <h1>  Alert Component  <span>v1.0.0</span>  </h1></header>
   <div className='alert-container'>
    
   <Alert type={"alert-error"} icon={<XCircle />} title={"Something went wrong"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore numquam assumenda asperiores harum voluptates eos quos aliquid veritatis accusantium!"} />
      <Alert type={"alert-warning"} icon={<AlertTriangle />} title={"Something went wrong"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore numquam assumenda asperiores harum voluptates eos quos aliquid veritatis accusantium!"} />
      <Alert type={"alert-success"} icon={<CheckCircle2 />} title={"Something went wrong"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore numquam assumenda asperiores harum voluptates eos quos aliquid veritatis accusantium!"} />
      <Alert type={"alert-info"} icon={<Info />} title={"Something went wrong"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore numquam assumenda asperiores harum voluptates eos quos aliquid veritatis accusantium!"} />
   </div>
   
    </>
  )
}

export default App
