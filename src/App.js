import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Crypto from './components/crypto';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <Home />
          </>
        )}
      />
      <Route
        path="/crypto-details"
        element={(
          <>
            <Crypto />
          </>
        )}
      />
    </Routes>
  );
}

export default App;
