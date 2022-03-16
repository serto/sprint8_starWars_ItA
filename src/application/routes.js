import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Detail from '../pages/detail';
import List from '../pages/list';
import ErrorPage from '../pages/errorPage';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/ship/:id" element={<Detail/>} />
        <Route path="*" element={<ErrorPage /> } />
      </Routes>
    </BrowserRouter>
  );
}


export default RoutesApp;
