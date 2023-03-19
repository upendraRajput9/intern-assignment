import React from 'react';
import {Routes,Route} from "react-router-dom";
import Posts from './Components/posts';
import Header from './Components/Header';
import Cart from './Components/Cart';


function App() {
  return (
    <React.Fragment>
    <Header/>
    <Routes> 
      <Route path='/' element={<Posts/>}/>  
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<div>
        <h2>PAGE NOT FOUND</h2>
      </div>}/>
    </Routes>
    </React.Fragment>
  );
}

export default App;
