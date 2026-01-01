import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const RoleSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="form">
      <Button onClick={() => navigate("/register?role=EMPLOYEE")}>
        Employee Account
      </Button>

      <Button onClick={() => navigate("/register?role=ADMIN")}>
        Admin Account
      </Button>
    </div>
  );
};

export default RoleSelector;
