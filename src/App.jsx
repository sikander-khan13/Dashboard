import React, { useState } from "react";
import Dashboard from "./Components/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Incident from "./Components/Incident";
import Newincident from "./Components/Newincident";
import Getstart from "./Components/Getstart";
import Nextpage from "./Components/Nextpage";
import Finished from "./Components/Finished";
import Location from "./Components/Location";




function App() {

  return (
    <BrowserRouter>
    <Dashboard/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/Incidents"  element={<Incident/>}/>
          <Route path="/new-incident" element={<Newincident/>}/>
          <Route path="/get-started" element={<Getstart/>}/>
          <Route path="/next-step" element={<Nextpage/>}/>
          <Route path="/Finished" element={<Finished/>}/>
          <Route path="/locations" element={<Location/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App
