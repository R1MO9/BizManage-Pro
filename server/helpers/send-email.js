import nodemailer from 'nodemailer';

const sendOTP = async (email, otp) => {
    try {
        if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
            return { status: 'error', message: 'Email not configured' };
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Your OTP Verification Code',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2 style="color: #4CAF50;">Hello,</h2>
                    <p>We have received a request to verify your identity. Please use the One-Time Password (OTP) below to complete the verification:</p>
                    <h3 style="background-color: #f0f0f0; padding: 10px; border-radius: 5px; font-size: 20px; text-align: center; color: #333;">
                        <strong>${otp}</strong>
                    </h3>
                    <p>This OTP will expire in <strong>5 minutes</strong>.</p>
                    <p>If you did not request this OTP, please disregard this email or contact our support team immediately.</p>
                    <br>
                    <p style="color: #777;">Best regards,<br>BizManage Pro</p>
                </div>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        return otp;

    } catch (error) {
        console.error('Error sending OTP:', error);
        return { status: 'error', message: 'Failed to send OTP' };
    }
}

export default sendOTP;