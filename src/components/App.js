import Switch from './Switch';
import Rating from './Rating';
import Slider from './Slider';
import Accordion from './Accordion';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Components</h1>
      <h2 className='title block'>Switch</h2>
      <Switch/>

      <h2 className='title block'>Rating</h2>
      <Rating/>

      <h2 className='title block'>Slider</h2>
      <Slider/>

      <h2 className='title block'>Accordion</h2>
      <Accordion/>
      
      <h2 className='title block'>Tree-button</h2>

      <Footer/>

    </div>
  );
}

export default App;