
import { RouterProvider } from 'react-router-dom';
import './App.css'
import { routes } from './routes';
import Header from './components/header';




function App() {
  return (
    <>
    <Header/>
     <main>
       <RouterProvider router={routes}/>
    </main>

    </>

  )
}


export default App;
