import React from 'react';
import logo from './logo.svg';
import Header from './components/layout/Header'
import Footer from "./components/layout/Footer";
import './App.css';


class App extends React.Component {
    render() {
        return (
                <div>
                    <Header></Header>
                    <div>
                        <h2>Hey, I am Home!</h2>
                    </div>
                    <Footer></Footer>
                </div>
        );
    }
}

export default App;
