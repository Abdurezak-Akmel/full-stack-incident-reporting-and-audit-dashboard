type Props = {
  role: "EMPLOYEE" | "ADMIN";
};

const RegisterForm = ({ role }: Props) => {
  return (
    <form>
      <input type="text" placeholder="Full name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />

      {role === "ADMIN" && (
        <input type="text" placeholder="Admin Code" required />
      )}

      <button type="submit">Create Account</button>
    </form>
  );
};

export default RegisterForm;
