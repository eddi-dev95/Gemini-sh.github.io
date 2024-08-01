// Función para hacer la solicitud POST
async function hacerSolicitud(texto) {
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBbvg1_n1CcmL-so3d3cFulwTYTBM_Ogg4';

  const headers = {
    'Content-Type': 'application/json',
  };

  const body = {
      'contents': [{
        'parts':[{
          'text': 'hazme un mensaje de bienvenida a un atajo de apple con funcion de chatbot con la ayuda de Gemini de Google.'}]}]
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
hacerSolicitud();
