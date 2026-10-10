
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const { data, error } = await resend.emails.send({
      from: "Rajeshwari Ravi Portfolio <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER],
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
          <h2 style="color: #b86bff;">
            New Portfolio Message
          </h2>

          <p style="font-size: 15px; line-height: 1.6;">
            You received a new message through your portfolio contact form.
          </p>

          <div style="
            margin-top: 25px;
            padding: 20px;
            background-color: #241032;
            border-radius: 8px;
          ">
            <p>
              <strong style="color: #b86bff;">Name</strong><br>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong style="color: #b86bff;">Email</strong><br>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong style="color: #b86bff;">Message</strong><br>
              ${escapeHtml(message).replace(/\n/g, "<br>")}
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
    });

    if (error) {
      console.error("Resend email error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to send your message right now.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your message was sent successfully.",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);

    return res.status(500).json({
      success: false,
      message: "An error occurred while submitting the form.",
    });
  }
};

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}