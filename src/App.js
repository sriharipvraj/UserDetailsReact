
import './App.css';

import UsersPage from './COMPONENTS/UsersPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import UsersDetails from './COMPONENTS/UsersDetails';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        
     <Route path='/' element={<UsersPage/>}></Route> 
     <Route path='/details/:id' element={<UsersDetails/>}></Route>
        
      </Routes>
      </BrowserRouter>
      
      
    
    </div>
  );
}

export default App;
