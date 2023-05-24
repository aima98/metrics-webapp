import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Crypto from './components/crypto';
import Header from './components/header';
import NavBar from './components/NavBar';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <NavBar />
            <Home />
          </>
        )}
      />
      <Route
        path="/crypto-details/:id"
        element={(
          <>
            <Header />
            <Crypto />
          </>
        )}
      />
    </Routes>
  );
}

export default App;
