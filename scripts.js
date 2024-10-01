// Animation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section'); // Cible toutes les sections
    const triggerPoint = window.innerHeight / 1.3; // Point de déclenchement
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top; // Distance entre la section et le haut de la page
        
        // Si la section entre dans le champ de vision, applique la classe visible
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible'); // Pour cacher à nouveau quand on remonte
        }
    });
});

// Interaction pour afficher/masquer les services avec un défilement fluide
document.querySelectorAll('.toggle-service').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.previousElementSibling;  // Contenu du service associé
        
        // Toggle pour montrer ou cacher le contenu
        content.classList.toggle('hidden');
        content.classList.toggle('show');
        
        // Inverser la flèche
        if (content.classList.contains('show')) {
            this.textContent = '↑';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-image'); // Cible l'image avec la nouvelle classe
    
    logo.addEventListener('click', function() {
        // Ajoute l'animation de rotation
        logo.classList.add('rotate-animation');
        
        // Supprime l'animation après la fin pour revenir à l'état initial
        logo.addEventListener('animationend', function() {
            logo.classList.remove('rotate-animation');
        }, { once: true });
    });
}); 

// Sélection des éléments
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');
const images = document.querySelectorAll('.image-box img'); // Toutes les images à zoomer

// Fonction pour ouvrir le modal
images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'flex'; // Affiche le modal
        modalImg.src = this.src; // Met l'image sélectionnée dans le modal
    });
});

// Fonction pour fermer le modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Cache le modal
});

// Fermer le modal en cliquant n'importe où en dehors de l'image
modal.addEventListener('click', function(e) {
    if (e.target !== modalImg) { // Vérifie que ce n'est pas l'image qui est cliquée
        modal.style.display = 'none';
    }
});



