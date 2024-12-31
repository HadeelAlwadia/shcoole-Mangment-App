import React from 'react'
import { useLocation } from 'react-router-dom';

//this fun to check user
const userinfo = localStorage.getItem('user-info');
console.log(userinfo)


const Home = () => {
  return (
    <>
      {userinfo ? <div>
        home page
      </div>:
      <div>
        go to login
       </div> }
         
    </>

  )
}

export default Home
