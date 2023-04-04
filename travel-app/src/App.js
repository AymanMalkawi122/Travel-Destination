import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TourDetails from './Components/TourDetails/TourDetails'
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  let data = require('./Data/db.json');
  return (
    <Router>
      <div className="App">

        <Header />
        <Routes>
          <Route exact path='/' element={<Home data={data} />}>
          </Route>

          <Route exact path='/city/:id' element={<TourDetails data={data} />}>
          </Route>

        </Routes>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
