import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading, error } = useAuth();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      // You may handle navigation after successful login here
    } catch {
      // error is already handled inside useAuth and stored in `error`
    }
  };

  return (
    <form onSubmit={submit} className="form">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>

      {error && <p className="error">{error}</p>}

      <p className="text-center">
        No account? <Link to="/register/select-role">Create one</Link>
      </p>
    </form>
  );
};

export default LoginForm;
