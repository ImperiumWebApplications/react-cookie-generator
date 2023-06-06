import Cookies from "cookies";
import crypto from "crypto";

module.exports = (req, res) => {
  const cookies = new Cookies(req, res);

  // Generate a random 16-byte string
  const cookieValue = crypto.randomBytes(16).toString("hex");

  cookies.set("My-Cookie", cookieValue, { httpOnly: true });

  res.json({ cookies: cookieValue });
};
