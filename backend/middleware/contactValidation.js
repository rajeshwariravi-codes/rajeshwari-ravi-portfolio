const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;

  // NAME VALIDATION

  // Check whether name is present
  if (!name || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: "Name is required.",
    });
  }

  // Check whether name is a string
  if (typeof name !== "string") {
    return res.status(400).json({
      success: false,
      message: "Name must be a valid text.",
    });
  }

  // Remove unnecessary spaces
  const cleanName = name.trim();

  // Check name length
  if (cleanName.length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name must be at least 2 characters long.",
    });
  }

  if (cleanName.length > 50) {
    return res.status(400).json({
      success: false,
      message: "Name must not exceed 50 characters.",
    });
  }


  // EMAIL VALIDATION

  // Check whether email is present
  if (!email || !email.trim()) {
    return res.status(400).json({
      success: false,
      message: "Email is required.",
    });
  }

  // Check whether email is a string
  if (typeof email !== "string") {
    return res.status(400).json({
      success: false,
      message: "Email must be a valid text.",
    });
  }

  // Remove unnecessary spaces
  const cleanEmail = email.trim();

  // Check email length
  if (cleanEmail.length > 254) {
    return res.status(400).json({
      success: false,
      message: "Email must not exceed 254 characters.",
    });
  }

  // Check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(cleanEmail)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }


  // MESSAGE VALIDATION

  // Check whether message is present
  if (!message || !message.trim()) {
    return res.status(400).json({
      success: false,
      message: "Message is required.",
    });
  }

  // Check whether message is a string
  if (typeof message !== "string") {
    return res.status(400).json({
      success: false,
      message: "Message must be valid text.",
    });
  }

  // Remove unnecessary spaces
  const cleanMessage = message.trim();

  // Check minimum message length
  if (cleanMessage.length < 10) {
    return res.status(400).json({
      success: false,
      message: "Message must be at least 10 characters long.",
    });
  }

  // Check maximum message length
  if (cleanMessage.length > 2000) {
    return res.status(400).json({
      success: false,
      message: "Message must not exceed 2000 characters.",
    });
  }

  // EVERYTHING IS VALID

  // Store cleaned values back into req.body
  req.body.name = cleanName;
  req.body.email = cleanEmail;
  req.body.message = cleanMessage;

  next();
};

export default validateContactForm;
