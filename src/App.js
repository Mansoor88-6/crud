

import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Update from './components/Update';
import Create from './components/Create';
import Listing from './components/Listing'



function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element= {<Home />}/>
        <Route path='/listing' element={<Listing />}/>
          <Route path='/create' element={<Create/>} />
          <Route path='/update/:id' element={<Update/>} />
          
          
        
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
