import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { useEffect } from "react";

export default function LoginView() {
  const navigate=useNavigate();
  useEffect(()=>{
    localStorage.getItem('token') && navigate('/home');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <section>
        <h1>Login</h1>
        <LoginComponent/>
    </section>
  )
}
