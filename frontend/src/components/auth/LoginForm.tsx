import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
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

      <Button type="submit">Login</Button>

      <p className="text-center">
        No account? <Link to="/register/select-role">Create one</Link>
      </p>
    </form>
  );
};

export default LoginForm;
