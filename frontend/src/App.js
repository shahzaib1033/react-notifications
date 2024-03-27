import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>


    </div>
  );
}
export default App;
