import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function ErrorView() {
    const navigate=useNavigate();

    useEffect(()=>{
        const timer=setTimeout(()=>{
            navigate('/')
        },3000);
        return () => {
            clearTimeout(timer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
    <section>
        <h1>Error</h1>
        <p>Ha ocurrido un error 😢</p>
        <p>Redirigiendo a Login...</p>
    </section>
  )
}
