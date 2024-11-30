import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userprofilecard from './Userprofilecard/Userprofilecard'

function App() {

  return (
  
       <div className='user'>
            <Userprofilecard imgUrl='https://img.freepik.com/premium-photo/stylish-handsome-boy-portrait_1046319-115661.jpg?w=740' name={'Bhavesh Sondagar'} age={22} email={'bsondagar0@gmail.com'} hobby={'Gaming'} gender={'Male'} Phone={9727198641} />
            <Userprofilecard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqmq9p6rCh5L5RyhRucAqfgmyOyK-KBKAhA&s' name={'Brijesh nirjan'} age={19} email={'b123@gmail.com'} hobby={'swimming'} gender={'Male'} Phone={9658755599} />
            <Userprofilecard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblCr09YVOYKCpiZPlnXV1UFM59cnt284Gdg&s' name={'Nency kukdiya'} age={20} email={'kuku0@gmail.com'} hobby={'crying'} gender={'FeMale'} Phone={8544456325} />
            <Userprofilecard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3ZERDE3tUyYTr-Y-g6O-wdDpmHq2HCoAyA&s' name={'Mitulbhimani'} age={22} email={'mitu0@gmail.com'} hobby={'speaking'} gender={'Male'} Phone={8547654510} />

        </div>
   
  )
}

export default App
