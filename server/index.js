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
    const response = await fetch('https://api.gemini.com/v1.5/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        // Parámetros de tu solicitud a Gemini (modelo, prompt, etc.)
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error al llamar a la API de Gemini:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
