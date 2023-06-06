import Cookies from "cookies";
import crypto from "crypto";

module.exports = (req, res) => {
  const cookies = new Cookies(req, res);

  let cookieValue = "";

  // Generate 10 MD5 hashes and concatenate them
  for (let i = 0; i < 10; i++) {
    const randomValue = crypto.randomBytes(32).toString("hex");
    const hash = crypto.createHash("md5").update(randomValue).digest("hex");
    cookieValue += hash;
  }

  cookies.set("My-Cookie", cookieValue, { httpOnly: true });

  res.json({ cookies: cookieValue });
};
