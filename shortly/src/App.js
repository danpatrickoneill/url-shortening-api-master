import React from 'react';
import './styles/styles.css';
import { Nav, Header, MainContent, Footer } from './components';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
