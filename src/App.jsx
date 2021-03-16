import './styles/index.scss';
import { Navbar } from './components/NavBar/NavBar';
import { Sidebar } from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}

export default App;
