import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Detail from '../pages/detail'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home/>} />
        <Route path="/ship/:id" element={<Detail/>} />
        <Route path="*" element={<div>404</div> } />
      </Routes>
    </BrowserRouter>
  );
}


export default RoutesApp;
