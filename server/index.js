const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Puedes usar un puerto definido por Render o 3000 en desarrollo
const port = process.env.PORT || 3000; 

app.get('/api/gemini', async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY; // Obtén la API key desde variables de entorno

  if (!apiKey) {
    return res.status(500).json({ error: 'API key no configurada.' }); 
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "contents": [{
          "parts":[{
            "text": "Escribe un mensaje de despedida a la introduccion de un atajo de apple; que trabaja con Gemini AI como chatbot. No uses markdown, quiero el texto limpio, amigable y llamativo"}]}]
      }),
    });

    const data = await response.json();
    const mensaje = data.candidates[0].content.parts[0].text;
    res.json({ mensaje });
  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
