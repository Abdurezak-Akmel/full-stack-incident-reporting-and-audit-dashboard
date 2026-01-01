import { useState } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const getStrength = (password: string) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return score;
};

const PasswordInput = ({ value, onChange, placeholder }: Props) => {
  const [show, setShow] = useState(false);
  const strength = getStrength(value);

  const strengthLabel = ["Weak", "Fair", "Good", "Strong"][strength - 1] || "";

  return (
    <div className="password-wrapper">
      <div className="password-input">
        <input
          className="input"
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />

        <button
          type="button"
          className="eye"
          onClick={() => setShow((s) => !s)}
        >
          {show ? "🙈" : "👁"}
        </button>
      </div>

      {value && (
        <div className="strength">
          <div className={`bar level-${strength}`} />
          <span>{strengthLabel}</span>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
