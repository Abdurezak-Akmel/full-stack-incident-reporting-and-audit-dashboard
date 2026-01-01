import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import PasswordInput from "../common/PasswordInput";

type Props = {
  role: "EMPLOYEE" | "ADMIN";
};

const RegisterForm = ({ role }: Props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    console.log("Register user");
  };

  return (
    <form onSubmit={submit} className="form">
      <Input type="text" placeholder="Full Name" required />
      <Input type="email" placeholder="Email" required />

      <PasswordInput
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />

      <PasswordInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
      />

      <small className="hint">
        Use 8+ characters with uppercase, numbers, and symbols
      </small>

      {role === "ADMIN" && (
        <Input type="text" placeholder="Admin Registration Code" required />
      )}

      {error && <p className="error">{error}</p>}

      <Button type="submit">Create Account</Button>
    </form>
  );
};

export default RegisterForm;
