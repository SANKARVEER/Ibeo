  // import logo from './logo.svg';
  import './App.css';
  // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import { Cards, Content, Header, Navbar } from './Module';
import { Footer } from './Module/Screen/Footer';
  function App() {
    return (
      // <Router>
        <div className='section-space'>
          <Navbar />
          <Header/>
          <Cards/>
          <Content/>
          <Footer/>
         
          
          {/* <Footer /> */}
        </div>
      // </Router>
    );
  }

  export default App;
