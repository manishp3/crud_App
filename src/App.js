import './App.css';

import { Routes, Route } from 'react-router-dom';
import Header from './compo/Header';
import Userlist from './compo/Userlist';
import Home from './compo/Home';
import Footer from './compo/Footer';
import Adduser from './compo/Adduser';
import Edituser from './compo/Edituser';
import Productlist from './compo/Productlist';
import Addproduct from './compo/Addproduct';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
	  //This is crud app and check for comment 
        <Route path="/" element={<Home />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser/:id" element={<Edituser />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/productlist" element={<Productlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
