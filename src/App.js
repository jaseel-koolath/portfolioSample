import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Posts from './components/Posts';
import Works from './components/Works';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='md:max-w-screen-lg mx-auto'>
        <Header />
        <Routes>
          <Route
            path='/'
            exact
            element={
              <>
                <Hero />
                <Posts />
                <Works />
              </>
            }
          />
          <Route path='/work' exact element={<Works />} />
          <Route path='/blog' exact element={<Posts />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
