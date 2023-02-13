// import page by page
import { useState } from 'react'

import Header from './components/Header'
import Home from './pages/home'
import Projects from './components/ProjectList'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  const [page, setPage] = useState('home')
  // adding a prop
  const brand = 'I could be working hard for you!'

  // switch function to take a case dependant on the changes of a click listener in header
  const handlePageView = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />
    }
  }


  return (
    <>
      <Header brand={brand} setPage={setPage} />
      {handlePageView()}
      <Footer />
    </>
  );
}

export default App;
