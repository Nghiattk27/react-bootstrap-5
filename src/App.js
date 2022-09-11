import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CustomProgressBar from './components/CustomProgressBar/CustomProgressBar';
import CustomFigure from './components/CustomFigure/CustomFigure';
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import CustomeOverlay from './components/CustomOverlay/CustomeOverlay';

function App() {
  useEffect(() => {
    ScrollReveal().reveal('.login', {
      interval: 16,
      reset: true,
      scale: 1.1,
      distance: '-200px',
      origin: 'right',
      rotate: {
        x: 0,
        y: 0,
        z: 30,
      },
    });
  }, [])

  return (
    <div className="App">
      {/* <Header /> */}

      <CustomeOverlay />

      {/* <div className='login'>
        <Login />

      </div> */}
      {/* <Home /> */}
      {/* <div className="mt-5" >
        <CustomProgressBar />
      </div> */}

      {/* <CustomFigure /> */}
    </div>
  );
}
export default App;
