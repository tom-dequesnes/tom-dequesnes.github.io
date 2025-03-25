document.addEventListener('DOMContentLoaded', function() {
    // Gestion des clics sur les projets
    document.querySelectorAll('.project-item').forEach(project => {
      project.addEventListener('click', function(e) {
        // On ne fait rien si on clique sur un lien
        if (e.target.tagName === 'A') return;
        
        const title = this.querySelector('h3').textContent;
        const fullContent = this.querySelector('.full-description').innerHTML;
        
        // Affiche la modal
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalContent').innerHTML = fullContent;
        document.getElementById('projectModal').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Empêche le scroll de la page
      });
    });
  
    // Fermer la modal
    document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('projectModal').style.display = 'none';
      document.body.style.overflow = 'auto'; // Rétablit le scroll
    });
  
    // Fermer en cliquant en dehors
    window.addEventListener('click', function(e) {
      if (e.target === document.getElementById('projectModal')) {
        document.getElementById('projectModal').style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });
