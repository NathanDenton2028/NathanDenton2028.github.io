/*
 * Simple JavaScript to toggle the visibility of additional project details.
 * When the user clicks the "Learn More" button, the associated
 * details section expands or collapses. The button text updates to
 * reflect the current state.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Find all project cards that have a toggle button
  const cards = document.querySelectorAll('.project-card.expandable');
  cards.forEach(card => {
    const button = card.querySelector('.toggle-btn');
    const details = card.querySelector('.project-details');
    button.addEventListener('click', () => {
      const isOpen = details.classList.contains('show');
      // Toggle the 'show' class to expand/collapse the details
      details.classList.toggle('show');
      // Update button label accordingly
      button.textContent = isOpen ? 'Learn More' : 'Collapse';
    });
  });
});