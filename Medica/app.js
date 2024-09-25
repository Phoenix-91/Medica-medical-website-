// Toggle Feature Description
function toggleFeature(element) {
    const featureItem = element.parentElement;
    const isActive = featureItem.classList.contains('active');

    // Close all open items
    document.querySelectorAll('.feature-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.toggle-icon').textContent = '+';
    });

    // Open the clicked item if it was closed
    if (!isActive) {
        featureItem.classList.add('active');
        featureItem.querySelector('.toggle-icon').textContent = '-';
    }
}

// Toggle "For you" and "For your patient"
const forYouBtn = document.getElementById('for-you-btn');
const forPatientBtn = document.getElementById('for-patient-btn');

forYouBtn.addEventListener('click', () => {
    forYouBtn.classList.add('active');
    forPatientBtn.classList.remove('active');
    // Change content based on "For you" selection if needed
});

forPatientBtn.addEventListener('click', () => {
    forPatientBtn.classList.add('active');
    forYouBtn.classList.remove('active');
    // Change content based on "For your patient" selection if needed
});
