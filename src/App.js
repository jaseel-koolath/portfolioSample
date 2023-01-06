import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Posts from './components/Posts';
import Works from './components/Works';

function App() {
  return (
    <div className='md:max-w-screen-lg mx-auto'>
      <Header />
      <Hero />
      <Posts />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
