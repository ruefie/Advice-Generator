const adviceId = document.getElementById('advice-id');
const adviceContent = document.getElementById('advice-content');
const generateButton = document.getElementById('generate-button');

async function getAdvice() {
  try {
    // Disables the button while loading
    generateButton.style.pointerEvents = 'none';
    generateButton.style.opacity = '0.5';

    const response = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache' // Prevents caching of the response
    });
    const data = await response.json();
    
    // Update the DOM with new advice text and number
    adviceId.textContent = data.slip.id;
    adviceContent.textContent = data.slip.advice;
  } catch (error) {
    console.error('Error fetching advice:', error);
    adviceContent.textContent = 'Failed to load advice. Please try again.';
  } finally {
    // Re-enable the button after loading
    generateButton.style.pointerEvents = 'auto';
    generateButton.style.opacity = '1';
  }
}

// Event Listener for the button
generateButton.addEventListener('click', getAdvice);

// Generate initial advice when the page loads
getAdvice();