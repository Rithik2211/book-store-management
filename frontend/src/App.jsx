import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <NavigationBar />
        <main className='w-full py-6 font-primary'>
          <Outlet />
        </main>
        <Footer />
      </AuthProvider>
    </>
  )
};

export default App;
