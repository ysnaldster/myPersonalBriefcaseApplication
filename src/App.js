import React from 'react';
// Importacion componentes 
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  return (
      <React.Fragment>
      <section className = "header">
          <Header  name = 'Mi HV'/>
      </section>
      <section className="main">
          <Main />
      </section>
      <section>
          <Footer/>
      </section>
      </React.Fragment>
  );
}

export default App;
