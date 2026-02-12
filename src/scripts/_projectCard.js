export const initializeProjectCard = () => {
  const projectCards = document.querySelectorAll('.project-card-list__item-container');

  // Disable link click
  projectCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
};
