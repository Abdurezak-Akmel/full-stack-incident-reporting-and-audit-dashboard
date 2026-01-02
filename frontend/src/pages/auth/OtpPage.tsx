import { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { verifyOtp } from "../../services/auth.service";

type Props = { email: string };

const OtpPage = ({ email }: Props) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await verifyOtp({ email, otp });
      console.log(res); // store token or navigate to dashboard
    } catch (err: any) {
      setError(err.message || "OTP failed");
    }
  };

  return (
    <form onSubmit={submit} className="form">
      <h3>Enter OTP sent to your email</h3>
      <Input placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
      {error && <p className="error">{error}</p>}
      <Button type="submit">Verify</Button>
    </form>
  );
};

export default OtpPage;
