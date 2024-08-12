import React from 'react';
import Header from './components/Header-portfolio';
import Footer from './components/Footer-portfolio';
import MainComeço from './components/Main-começo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa o JavaScript do Bootstrap


function App() {
    return (
        <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainComeço />} />
            <Route path="/Welcome" element={<Welcome/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
}

export default App;
