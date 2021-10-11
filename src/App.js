import { getDefaultNormalizer } from '@testing-library/dom';
import React,{useEffect,useState} from 'react';
import './App.css';
import Card from './components/Card';
import axios from 'axios';



function App() {

  const [data, setData] = useState([])


  const getData = async() =>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data)
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
        console.log('error');
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    getData()
  },[])
  return (
    <div className="App">
      <center><h2>USERS DATA</h2></center>
      <div style={{
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap',
        margin:'2rem',
        
        // background:'black'
      }}>
      {/* <Card /> */}
        {
          data.map(e=>{
            return <Card obj={e}/>
          })
        }

      </div>
    </div>
  );
}

export default App;
