import './App.css';
import Layot from './components/layot/Layot';
import Home from './pages/Home';
import CreateCommmand from './pages/CreateCommand';
import ErrorPage from './pages/Error';
import UpdateCommandPage from './pages/UpdateCommand';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Layot>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<CreateCommmand/>}/>
            <Route path='/update/:id' element= {<UpdateCommandPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </Layot>
      </Router>
  );
}

export default App;
