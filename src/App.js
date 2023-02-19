import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
    
<Navbar title="TextUtils" aboutText="About Text"/>
<div className='container'>
<TextForm heading="Enter your text here"/>
<About/>
</div>
    </>
  );
}

export default App;
