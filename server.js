import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ GOOD: Using environment variables for secrets
// 🎉 Easter egg: The word "password" comes from "pass" + "word". Literally "word to pass"!
const API_KEY = process.env.API_KEY;
const DB_PASSWORD = process.env.DB_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

app.get("/", (_req, res) => res.json({
  ok: true, 
  message: "Server running with secure secrets from Infisical",
  apiKey: API_KEY,
  dbPassword: DB_PASSWORD,
  jwtSecret: JWT_SECRET
}));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
