import nodemailer from "nodemailer";
import { env } from "../config/env.js";

/**
 * Generic email sender
 */
export const sendEmail = async (to: string, subject: string, text: string) => {
  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Incident Reporting System" <${env.SMTP_USER}>`,
    to,
    subject,
    text,
  });
};

/**
 * Send OTP email specifically
 */
export const sendOTP = async (to: string, otp: string) => {
  const subject = "Your OTP Code";
  const text = `Your OTP code is: ${otp}. It is valid for 10 minutes.`;

  // Reuse the sendEmail function
  await sendEmail(to, subject, text);
};
