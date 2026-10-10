import nodemailer from "nodemailer";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,

      subject: `New Portfolio Message from ${name}`,

      html: `
        <div style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        padding: 30px;
        background-color: #130421;
        color: #eedffb;
        border-radius: 12px;
        ">

      <h2 style="
        margin-bottom: 10px;
        color: #b86bff;
      ">
        New Portfolio Message
      </h2>

      <p style="
        color: #eedffb;
        font-size: 15px;
        line-height: 1.6;
      ">
        You received a new message through your
        portfolio contact form.
      </p>

      <div style="
        margin-top: 25px;
        padding: 20px;
        background-color: #241032;
        border-radius: 8px;
      ">

        <p style="margin: 0 0 15px;">
          <strong style="color: #b86bff;">Name</strong><br>
          ${name}
        </p>

        <p style="margin: 0 0 15px;">
          <strong style="color: #b86bff;">Email</strong><br>
          ${email}
        </p>

        <p style="margin: 0;">
          <strong style="color: #b86bff;">Message</strong><br>
          ${message}
        </p>

      </div>

      <p style="
        margin-top: 25px;
        font-size: 12px;
        color: #b9a9c7;
        text-align: center;
      ">
        Sent from Rajeshwari Ravi Portfolio
      </p>

    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Your message was received successfully.",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);

    res.status(500).json({
      success: false,
      message: "An error occurred while submitting the form.",
    });
  }
};
