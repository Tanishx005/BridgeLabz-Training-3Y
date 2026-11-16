// Q7 - Detect Mouse Path and Log Coordinates

const trackingBox = document.getElementById("trackingBox");
const coordinatesDisplay = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", (event) => {
    coordinatesDisplay.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", (event) => {
    const boxBounds = trackingBox.getBoundingClientRect();

    // Convert viewport coordinates to coordinates inside the tracking box.
    const positionX = event.clientX - boxBounds.left;
    const positionY = event.clientY - boxBounds.top;

    const redDot = document.createElement("span");
    redDot.className = "red-dot";
    redDot.style.left = `${positionX}px`;
    redDot.style.top = `${positionY}px`;

    trackingBox.appendChild(redDot);
});
