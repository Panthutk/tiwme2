import axios from 'axios';
import './App.css';

import {Sidebar} from './components/Sidebar'
import { form } from './components/form'
function App() {
  axios.post('http://165.22.3.172:9999/users', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  axios.get("http://165.22.3.172:9999/users").then((res)=>console.log(res.data)) 
  return (
    <div className="App">
        <login/>
    </div>
  );
}

export default App;
