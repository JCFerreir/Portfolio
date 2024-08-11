import React from 'react';
import Header from './components/Header-portfolio';
import Footer from './components/Footer-portfolio'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa o JavaScript do Bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
        </div>
    );
}

export default App;
