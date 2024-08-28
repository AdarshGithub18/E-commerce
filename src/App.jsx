import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ContextWrapper from './contexts/ContextWrapper';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <ContextWrapper>
        <Navbar />
        <Outlet />
        <Footer />
        <Toaster />
      </ContextWrapper>
    </>
  );
};

export default App;
