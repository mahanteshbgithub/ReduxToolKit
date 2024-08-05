import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Product from './product';
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Dashboard from './Dashboard';
import Cart from './Cart';


function App() {
  const Router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element ={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
   <div className="App">
    <RouterProvider router={Router}/>
   </div>
  );
}

export default App;
