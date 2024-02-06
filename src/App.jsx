import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllDoc from './Components/AllDoc';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewDoc from './Components/ViewDoc';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<AllDoc/>}/>
        <Route path='/view/:id' element={<ViewDoc/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;