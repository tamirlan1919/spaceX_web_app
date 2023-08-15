import './App.css';
import Header from './components/header/Header';
import './components/header/header.css'
import Main from './components/main/Main';
import '../src/components/main/main.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  const Home = ()=>{
    <>

    </>
  }
  return (
    <div className="App">

<Header/>
          <Main/>
    </div>
  );
}

export default App;
