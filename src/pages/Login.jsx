import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../context/tokenContext";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    const formData = new URLSearchParams();
    formData.append("username", login);
    formData.append("password", password);

    try {
      const response = await fetch("https://api.mediehuset.net/token", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error");
      }

      const data = await response.json();
      setToken(data);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {error && <p>{error}</p>}
      {token && <p>{token}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </section>
  );
};
