import { useState } from "react";
import { setAuthToken, fetchWithAuth } from "../api";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
    try {
        const URL = "https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default/login";

        const formDataUrlEncoded = new URLSearchParams();
        formDataUrlEncoded.append("email", userData.email);
        formDataUrlEncoded.append("password", userData.password);

        const response = await fetchWithAuth(URL,"POST",formDataUrlEncoded.toString());

        setAuthToken(response.token);
        alert("Formulario enviado con éxito");

        navigate('/home');
    } catch (err) {
        navigate('/error');
        alert("Error de autenticacion!");
        console.log("Error " + err);
      }
    }
  };

  return (
    <article>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 20 }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@you.com"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="login" />
      </form>
    </article>
  );
}
