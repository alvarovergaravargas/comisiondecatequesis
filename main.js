document.addEventListener('DOMContentLoaded', function() {

    // --- 1. GESTIÓN DEL FORMULARIO DE INSCRIPCIÓN ---
    const inscriptionForm = document.getElementById('inscriptionForm');

    inscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío real del formulario para el prototipo

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const dataConsent = document.getElementById('dataConsent').checked;

        // Validación simple
        if (fullName.trim() === '' || email.trim() === '') {
            alert('Por favor, completa tu nombre y correo electrónico.');
            return;
        }

        if (!dataConsent) {
            alert('Debes aceptar el tratamiento de datos para poder inscribirte.');
            return;
        }

        // Simulación de envío exitoso
        alert(`¡Gracias por inscribirte, ${fullName}! Hemos enviado la información a ${email}. Nos pondremos en contacto pronto.`);
        
        // Limpiar el formulario después del "envío"
        inscriptionForm.reset();
    });

    // --- 2. SIMULACIÓN DE CANAL DE ORIENTACIÓN (CHAT) ---
    // Se podría agregar un botón de chat flotante en el HTML
    // <div id="chat-icon">?</div>
    const chatIcon = document.getElementById('chat-icon'); // Suponiendo que existe este elemento
    if(chatIcon) {
        chatIcon.addEventListener('click', function() {
            alert('Simulación de Chat: \n¡Hola! ¿Necesitas orientación? Un catequista te atenderá pronto.');
        });
    }

    // --- 3. SIMULACIÓN DE ACTUALIZACIONES DINÁMICAS (Noticias) ---
    // En el HTML, se podría tener <div id="dynamic-news"></div>
    const newsContainer = document.getElementById('dynamic-news');
    if(newsContainer) {
        const news = [
            { title: 'Inicio de la Escuela de Catequistas 2024', link: '#' },
            { title: 'Encuentro Arquidiocesano de Jóvenes', link: '#' },
            { title: 'Mensaje del Arzobispo para el tiempo de Adviento', link: '#' }
        ];

        let newsHTML = '<h3>Últimas Noticias</h3><ul>';
        news.forEach(item => {
            newsHTML += `<li><a href="${item.link}">${item.title}</a></li>`;
        });
        newsHTML += '</ul>';
        
        newsContainer.innerHTML = newsHTML;
    }
    
    // Futura implementación: Motor de Búsqueda de Recursos
    // Esto requeriría una base de datos (incluso un JSON local) y lógica de filtrado.

});
