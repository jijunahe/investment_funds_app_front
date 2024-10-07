// src/App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetailsAxios from './components/routs/UserDetailsAxios';  
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
 

function App() {
  return (
   
<Router>
    <Routes>
      <Route path="/users/:userId" element={<UserDetailsAxios />} />
      <Route path="/" element={<UserDetailsAxios/>} />
      
       <Route path="/:userId" element={<Layout/>} />
      
    </Routes>
</Router>


  );
}

export default App;
