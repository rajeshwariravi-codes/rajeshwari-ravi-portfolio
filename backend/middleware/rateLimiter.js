import rateLimit from "express-rate-limit";

const contactRateLimiter = rateLimit({
  // 15 minutes
  windowMs: 15 * 60 * 1000,

  // Maximum 5 requests from one IP
  limit: 5,

  // Send standard RateLimit headers
  standardHeaders: "draft-8",

  // Disable old X-RateLimit-* headers
  legacyHeaders: false,

  // Response when the limit is exceeded
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

export default contactRateLimiter;
