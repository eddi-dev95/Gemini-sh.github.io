const apiKey = '';
// Función para hacer la solicitud POST
async function GetRequest(texto) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const headers = {
    'Content-Type': 'application/json',
  };

  const body = {
      'contents': [{
        'parts':[{
          'text': 'Escribe un mensaje de despedida a una introduccion de un atajo de apple. Ejemplo: ¡Espero que lo disfutes!. No uses markdown, quiero el texto limpio, legible, amigable y llamativo'}]}]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    });

    const data = await response.json();
    const  
 mensaje = data.candidates[0].content.parts[0].text;
    const elementoMensaje = document.getElementById('mensaje');
    elementoMensaje.textContent = mensaje;
  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
  }
}

// Llama a la función para mostrar el mensaje
GetRequest();
