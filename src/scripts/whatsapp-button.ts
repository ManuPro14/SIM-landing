
// src/scripts/whatsapp.ts

document.addEventListener('DOMContentLoaded', () => {
  const whatsappButton = document.getElementById('whatsapp-button') as HTMLButtonElement | null;
  if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
      const whatsappLink = whatsappButton.getAttribute('data-whatsapp-link');
      if (whatsappLink) {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      }
    });
  }
});

