import { useState } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';



function App() {
  const [title,setTitle] = useState("blog")
  const likes = 50


  return (
    <div className="App" >
      <Navbar/>
    <div className="content">
      <Home/>
      <h1>welcome to my {title}</h1>
      <button style={{marginTop:"3rem"}} onClick={()=>setTitle('Website')}>Change it</button>
    </div>
    </div>
  );
}

export default App;
