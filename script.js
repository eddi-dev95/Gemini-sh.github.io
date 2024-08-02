const API_GEMINI = '';
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_GEMINI}`;
const data = {
      "contents": [{
        "parts":[{
          "text": "Write a story about a magic backpack."
        }]
      }]
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      // Extrae el texto de la respuesta
      const storyText = data.candidates[0].content.parts[0].text;
      // Encuentra el elemento del párrafo por su ID
      const mensajeParagraph = document.getElementById('mensaje');
      // Inserta el texto de la historia en el párrafo
      mensajeParagraph.textContent = storyText;
    })
    .catch(error => {
      console.error('Error:', error);
    });
