import { FrontpageScreen, ContactScreen } from './screens'
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route  path="/" element={<FrontpageScreen/>} /> 
        <Route  path="/contact" element={<ContactScreen/>} /> 
    </Routes>
    </div>
  );
}

export default App;
