// Typing animation settings
const typingSpeed = 50; // Time (in milliseconds) between each character

// Find all typing-animation elements on the page
const typingAnimations = document.querySelectorAll('.typing-animation');

// Apply the typing animation to each element
typingAnimations.forEach((element) => {
  // Hide the original content
  element.style.display = 'none';

  // Create a new span element to hold the typed content
  const typedContent = document.createElement('span');
  typedContent.classList.add('typed-content');
  element.parentNode.insertBefore(typedContent, element);

  // Type the content character by character
  let index = 0;
  const originalContent = element.textContent;

  function typeCharacter() {
    typedContent.textContent += originalContent[index];
    index++;

    if (index < originalContent.length) {
      setTimeout(typeCharacter, typingSpeed);
    } else {
      // Show any additional content after typing is complete
      element.style.display = 'block';
    }
  }

  // Start the typing animation
  typeCharacter();
});

