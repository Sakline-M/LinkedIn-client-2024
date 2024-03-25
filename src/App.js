import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Feed from './pages/Feed/Feed';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/feed' element={<Feed/>} />
   </Routes>
   </>
  );
}

export default App;
