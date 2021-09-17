import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import Button from '@mui/material/Button';
import Countdown from "react-countdown";

class App extends React.Component{
  render(){
    return (
      <div style = {{backgroundColor : "#000000"}}>
         <BackgroundAnimation />
         <Button variant="contained">Registeration Link(Coming soon)</Button>
         <p>Are you ready? hint - Welcome</p>
         <Countdown date={Date.now() + 10000} />
      </div>
    );
  }
}

export default App;
