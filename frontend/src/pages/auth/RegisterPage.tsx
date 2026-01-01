import { useSearchParams } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  const [params] = useSearchParams();
  const role = params.get("role");

  if (!role) {
    return <p>Invalid registration type</p>;
  }

  return (
    <div className="container">
      <h2>
        {role === "ADMIN" ? "Admin Registration" : "Employee Registration"}
      </h2>
      <RegisterForm role={role as "EMPLOYEE" | "ADMIN"} />
    </div>
  );
};

export default RegisterPage;
