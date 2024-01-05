import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';


function App() {
  return (
    <div className="App">
     <Navbar font-style={'Playfair Display,serif'} />
     <br /><br /><br /><br /><br /><br />
     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum explicabo sunt nostrum incidunt dicta recusandae unde quo iure rem harum facilis temporibus, vitae magni aut officia. Et eius consequuntur ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea, cumque magnam provident nam ratione ex suscipit blanditiis at itaque commodi saepe rem accusamus quas assumenda est! Incidunt, quae laboriosam. </p>
     <br /><br /><br /><br /><br /><br /><br /><br /><br />
     <Slider/>
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     <h2>hi</h2>
    </div>
  );
}

export default App;
