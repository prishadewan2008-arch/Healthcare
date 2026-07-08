require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {

    console.log("========== REQUEST RECEIVED ==========");
    console.log(req.body);

    const { question } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
    });

    console.log("========== GEMINI RESPONSE ==========");
    console.log(response.text);

    res.json({
      reply: response.text,
    });

  } catch (error) {

    console.error("========== ERROR ==========");
    console.error(error);

    res.status(500).json({
      reply: "Something went wrong.",
    });

  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`AI Backend running on http://localhost:${PORT}`);
});