const getGeminiMessage = async () => {
  try {
    const response = await fetch('https://gemini-shv1-0.onrender.com/api/gemini'); 
    const data = await response.json();

    // Accede al mensaje desde la respuesta JSON
    const mensaje = data.mensaje;  

    // Inserta el mensaje en el HTML
    const elementoMensaje = document.getElementById('mensaje');
    elementoMensaje.textContent = mensaje;

  } catch (error) {
    console.error('Error al obtener mensaje de Gemini:', error);
  }
};

getGeminiMessage();
