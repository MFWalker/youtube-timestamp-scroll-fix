// content.js

// Determine if an element is a timestamp link
function isTimeStampLink(element) {
    return element.tagName === 'A' && element.href.includes('t=');
}

// Event listener for clicks
document.addEventListener('click', e => {
    const element = e.target;

    // If the clicked element is a timestamp link
    if (isTimeStampLink(element)) {
        if (e.shiftKey) {
            e.preventDefault(); // Prevent default scroll behaviour

            // Extract the href
            const url = new URL(element.href);
            const timeParam = url.searchParams.get("t") || url.hash.match(/t=(\d+)/)?.[1];

            if (timeParam) {
                const seconds = parseInt(timeParam, 10);
                const video = document.querySelector('video');
                if (video) {
                    video.currentTime = seconds;
                    video.play();
                }
            }
        }
    }
}, true); // useCapture=true to catch before YouTube handles it