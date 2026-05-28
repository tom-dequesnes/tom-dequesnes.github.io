document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');

    // 1. Gestion des clics sur les réalisations/projets académiques
    document.querySelectorAll('.project-item').forEach(project => {
        project.addEventListener('click', function(e) {
            // Empêcher l'ouverture si on clique sur le lien GitHub
            if (e.target.tagName === 'A') return;
            
            const title = this.querySelector('h3').textContent;
            const fullContent = this.querySelector('.full-description').innerHTML;
            
            openModal(title, fullContent);
        });
    });

    // 2. Gestion de l'ouverture des détails de l'alternance (Consigne 2)
    const openAltBtn = document.getElementById('openAlternanceModal');
    if (openAltBtn) {
        openAltBtn.addEventListener('click', function() {
            const title = "Focus Alternance — E-Mothep";
            const fullContent = document.getElementById('alternanceDetailsContent').innerHTML;
            openModal(title, fullContent);
        });
    }

    // Fonction centralisée d'ouverture de la modale
    function openModal(title, content) {
        modalTitle.textContent = title;
        modalContent.innerHTML = content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Bloque le scroll arrière
    }
  
    // Fermeture via la croix
    closeBtn.addEventListener('click', function() {
        closeModal();
    });
  
    // Fermeture via clic en dehors de la boîte
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Libère le scroll
    }
});
