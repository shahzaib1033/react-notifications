import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Notification from './pages/testing-notification';
import ProtectedRoute from './protection';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route path='/test-notifications' element={
            <ProtectedRoute>
            <Notification/>            
            </ProtectedRoute>
          }></Route>
      </Routes>
      </BrowserRouter>


    </div>
  );
}
export default App;
