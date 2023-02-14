import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  
  useEffect(() =>{
    axios.get('http://localhost:3000/api')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/1',{data1:"hello from the client"})
      .then(res => console.log(res.data1))
      .catch(err => console.error(err));
  };

  console.log(data[1]);


  return (
    <div className="App">
      <div>
        {data.map(item => (
          <p>{item}</p>
          ))}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={data1} onChange = {e => setData1(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
