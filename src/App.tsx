
import { RouterProvider, useLocation, useNavigate } from 'react-router-dom';
import './App.css'
import { routes } from './routes';
import Header from './components/header';


function App() {
  const location = window.location.href;

  return (
    <>
 {location==='http://localhost:5173/login'?'':<Header/>}
 
     <main>
       <RouterProvider router={routes}/>
    </main>
    </>

  )
}


export default App;
