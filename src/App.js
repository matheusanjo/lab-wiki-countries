import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <CountriesList />

        <Routes>
          <Route path=":cca3" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
