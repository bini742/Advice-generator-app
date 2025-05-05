const adviceText = document.getElementById('advice-text');
const adviceId = document.getElementById('advice-id');
const getAdviceBtn = document.getElementById('get-advice-btn');

// Function to fetch random advice
async function getRandomAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        // Update the HTML elements
        adviceId.textContent = `ADVICE #: ${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;

        // Prevent caching by adding timestamp to URL
        // (Some APIs might cache responses, this ensures fresh data)
        return data;
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceText.textContent = "Failed to get advice. Please try again.";
    }
}

// Get advice when button is clicked
getAdviceBtn.addEventListener('click', getRandomAdvice);

// Get initial advice when page loads
document.addEventListener('DOMContentLoaded', getRandomAdvice);