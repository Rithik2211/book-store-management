import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
        <Outlet />
      </main>
      {/* <footer><Footer /></footer> */}
      <Footer />
    </>
  )
};

export default App;
