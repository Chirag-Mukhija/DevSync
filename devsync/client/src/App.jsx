import {useState , useEffect} from 'react';
function App() {
  const [message, setMessage] = useState("") 
  const fetchData = async () =>{
    const result = await fetch("http://localhost:8080/api/test")
    const data = await result.json() ;
    setMessage(data.message);
  }
  useEffect(()=>{
    fetchData() 
  },[])
  
  return (
    <>
      <h2>{message}</h2>
    </>
  );
}

export default App;
