import React from 'react'
import Header from './components/Header/Header.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme/Theme.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Carousel prop={"Aquí va a ir un carousel"} />
          <ItemListContainer greetings={"Aquí va a ir el listado de productos"} />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
