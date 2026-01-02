import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import PasswordInput from "../common/PasswordInput";
import { useAuth } from "../../hooks/useAuth";

type Props = {
  role: "EMPLOYEE" | "ADMIN";
};

const RegisterForm = ({ role }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [error, setError] = useState("");

  const { register, loading } = useAuth();

  const submit = async (e: React.FormEvent) => {
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

    if (role === "ADMIN" && adminCode !== process.env.REACT_APP_ADMIN_CODE) {
      setError("Invalid Admin Registration Code");
      return;
    }

    try {
      await register({ email, password, role });
      // You may handle navigation after successful registration here
    } catch (err: any) {
      setError(err.message);
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
        <Input
          type="text"
          placeholder="Admin Registration Code"
          value={adminCode}
          onChange={(e) => setAdminCode(e.target.value)}
          required
        />
      )}

      {error && <p className="error">{error}</p>}

      <Button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Account"}
      </Button>
    </form>
  );
};

export default RegisterForm;
