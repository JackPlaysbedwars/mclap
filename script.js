// script.js

// Function to display feature descriptions based on user clicks
function showFeature(feature) {
    const featureDescription = document.getElementById('feature-description');
    
    switch (feature) {
        case 'obstacle':
            featureDescription.innerHTML = '<strong>Obstacle Detection:</strong> Equipped with an ultrasonic sensor allowing users to detect obstacles ahead.';
            break;
        case 'audio':
            featureDescription.innerHTML = '<strong>Audio Navigation:</strong> Audio alerts for GPS navigation, providing assistance without visual cues.';
            break;
        case 'construction':
            featureDescription.innerHTML = '<strong>Quality Construction:</strong> Built with a magnesium alloy or aluminum frame for durability and lightness.';
            break;
        case 'addons':
            featureDescription.innerHTML = '<strong>Multiple Add-ons:</strong> Includes a flashlight, storage compartment, and an umbrella for added convenience.';
            break;
        default:
            featureDescription.innerHTML = '<p>Click on a feature to learn more!</p>';
    }

    // Reset all feature descriptions before scaling up the active one
    featureDescription.classList.remove('active');
    void featureDescription.offsetWidth; // Trigger reflow to restart the animation
    featureDescription.classList.add('active');
}
