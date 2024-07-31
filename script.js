import { GoogleGenerativeAI } from "@google/generative-ai";

      // Fetch your API_KEY
      const API_KEY = "AIzaSyBbvg1_n1CcmL-so3d3cFulwTYTBM_Ogg4"

;

      // Access your API key (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(API_KEY);

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run() {
  const prompt = "Write a story about an AI and magic"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  document.getElementById("mensaje").text = mensaje;
  //console.log(text);
}

run();
