
import Content from './components/Content';
import Header from './components/Header';
import Artworks from './components/Artworks';
import Transactions from './components/Transactions';
import Footer from './components/Footer';

function App() {
  return (

    <div className="min-h-screen bg-slate-300">
    
      <div className='bg-gray-600'>
        <Header />
        <Content />
      </div>

      <Artworks />
      <Transactions />
      <Footer />

    </div>
  );
}

export default App;
