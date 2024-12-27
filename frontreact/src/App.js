import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Course from './Components/Course';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Register />
      <Course />
      <Contact/>

    </>
  );
}

export default App;
