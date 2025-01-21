
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { useContext } from 'react';
import { AppContext } from './store';
import { LuSunMoon } from "react-icons/lu";
import { IoIosMoon } from "react-icons/io";
import Header from './components/header';
import  './App.css'


const checkAuthUrlAndHome=window.location.href.split('/').find(key=>key==='auth'||key==='home')

const App = () => {
   const { theme,dispatch } = useContext(AppContext);
   const handleToggleTheme = () => dispatch({ type: 'toggleTheme' })

   return <>
       {!checkAuthUrlAndHome&&<Header/>}
       <p className={`theme-coun-${theme} theme-coun`}
         onClick={handleToggleTheme}>
         {theme === 'dark' ?
            <IoIosMoon size={22} cursor={'pointer'} /> : <LuSunMoon size={22} cursor={'pointer'} />
         } {theme}</p>
      <RouterProvider router={routes} />
   </>

}

export default App;
