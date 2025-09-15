import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransporter({
  service: "zoho",
  host: "smtp.zoho.com",
  port: 465,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Alternative untuk provider lain:
/*
const transporter = nodemailer.createTransporter({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
*/

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message, agreeToEmails } =
      body;

    // Validasi data
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email untuk admin/perusahaan
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Email tujuan
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">Contact Information:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${phone}</td>
              </tr>
              ${
                company
                  ? `
              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Company:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${company}</td>
              </tr>
              `
                  : ""
              }
              ${
                subject
                  ? `
              <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Subject:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${subject}</td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">Message:</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="margin: 20px 0; padding: 15px; background-color: #fef3c7; border-radius: 4px;">
            <p style="margin: 0; color: #92400e;">
              <strong>Email Consent:</strong> 
              ${
                agreeToEmails
                  ? "User agreed to receive emails and/or phone calls"
                  : "User did not consent to marketing communications"
              }
            </p>
          </div>

          <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 4px; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">This message was sent from your website contact form on ${new Date().toLocaleString(
              "id-ID",
              { timeZone: "Asia/Jakarta" }
            )}.</p>
          </div>
        </div>
      `,
    };

    // Auto-reply email untuk user
    const userReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us - We received your message",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1f2937; margin: 0;">Thank You for Contacting Us!</h1>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #374151; margin: 0 0 15px 0;">Dear ${name},</p>
            <p style="color: #374151; margin: 0 0 15px 0;">
              Thank you for reaching out to us. We have received your message and our team will review it carefully.
            </p>
            <p style="color: #374151; margin: 0 0 15px 0;">
              We typically respond to inquiries within 24-48 hours during business days. 
              If your matter is urgent, please feel free to call us at <strong>+62 8123 4567 1234</strong>.
            </p>
            <p style="color: #374151; margin: 0;">
              We appreciate your interest in our IT solutions and look forward to the opportunity to help build the future together.
            </p>
          </div>

          <div style="background-color: #e5f3ff; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin: 0 0 10px 0; font-size: 16px;">Your Message Summary:</h3>
            <p style="color: #374151; margin: 0; font-size: 14px;">
              <strong>Subject:</strong> ${subject || "No subject provided"}<br>
              <strong>Sent on:</strong> ${new Date().toLocaleString("id-ID", {
                timeZone: "Asia/Jakarta",
              })}
            </p>
          </div>

          <div style="text-align: center; margin: 30px 0; padding: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              Best regards,<br>
              <strong>IT Solutions Team</strong><br>
              <a href="mailto:info@company.com" style="color: #3b82f6;">info@company.com</a>
            </p>
          </div>
        </div>
      `,
    };

    // Kirim email ke admin
    await transporter.sendMail(adminMailOptions);

    // Kirim auto-reply ke user
    await transporter.sendMail(userReplyOptions);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
