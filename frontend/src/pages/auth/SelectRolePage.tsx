import { useNavigate } from "react-router-dom";

const SelectRolePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Create an Account</h2>

      <button onClick={() => navigate("/register?role=EMPLOYEE")}>
        Employee Account
      </button>

      <button onClick={() => navigate("/register?role=ADMIN")}>
        Admin Account
      </button>
    </div>
  );
};

export default SelectRolePage;
