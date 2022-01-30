import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NotesList from './components/NotesList';
import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';


function App() {
  return (
    <Router>
    <Navigation />
        <Routes>
          <Route path="/" element={<NotesList/>} />
          <Route path="/edit/:id" element={<CreateNote/>} />
          <Route path="/create" element={<CreateNote/>} />
          <Route path="/user" element={<CreateUser/>} />
        </Routes>
    </Router>
  );
}

export default App;
