"use server";

import nodemailer from "nodemailer";

// Define the response type
export type FormState = {
  success: boolean;
  message: string;
};

// Create a transporter using Resend SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 587,
  secure: false, // false for STARTTLS (port 587)
  auth: {
    user: "resend", // Always 'resend'
    pass: process.env.RESEND_API_KEY,
  },
});

export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Extract form data
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill in all required fields",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      };
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM, // Must match the verified sender address
      to: process.env.EMAIL_FROM,
      replyTo: email,
      subject: `📩 New Construction Inquiry from ${name}`,
      text: `
        Name: ${name}
        Phone: ${phone || "Not provided"}
        Email: ${email}

        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2c3e50;">🏗️ New Construction Inquiry</h2>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📞 Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>📝 Message:</strong></p>
          <p style="white-space: pre-line; background: #f9f9f9; padding: 10px; border-radius: 5px;">${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
