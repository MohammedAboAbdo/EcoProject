// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    // <>
    //   <Login />
    //   <SignUp />
    // </>
    <Routes>
      {/* المسار الرئيسي */}
      <Route path="/" element={<Landing />} />

      {/* مسار صفحة تسجيل جديد*/}
      <Route path="/SignUp" element={<SignUp />} />

      {/* مسار صفحة تسجيل الدخول */}
      <Route path="/Login" element={<Login />} />

      {/* مسار افتراضي لأي رابط غير موجود (صفحة 404) */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>

  );
}

export default App
