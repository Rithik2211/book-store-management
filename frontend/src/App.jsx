import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <main className='w-full py-6 font-primary'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
};

export default App;
