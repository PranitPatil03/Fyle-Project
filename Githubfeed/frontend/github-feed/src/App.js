import './App.css';
import { RepoDetails } from './components/RepoDetails';
import Userdetails from './components/Userdetails'
import Footer from './components/Footer'
import { Searchuser } from './components/Searchuser';

function App() {
  return (
    <>
        <Searchuser/>
        <Userdetails/>
        <RepoDetails/>
        <Footer/>
    </>
    );
}

export default App;
