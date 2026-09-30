// Default font size
let currentFontSize = '24px';

// Update the font size across the editor
const applyFontSize = () => {
    const editors = document.querySelectorAll('.CodeMirror-scroll, .CodeMirror, .CodeMirror-code, .CodeMirror-line, .CodeMirror-gutter-element');
    editors.forEach(el => {
        el.style.setProperty('font-size', currentFontSize, 'important');
    });
};

// Load saved size from storage
chrome.storage.sync.get(['fontSize'], (result) => {
    if (result.fontSize) {
        currentFontSize = result.fontSize + 'px';
        applyFontSize();
    }
});

// Listen for messages from the popup to update in real-time
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'updateFontSize') {
        currentFontSize = request.size + 'px';
        applyFontSize();
    }
});

// Use MutationObserver instead of setInterval to stop the "flicker"
// This watches the page for any style changes and fixes them instantly
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            applyFontSize();
        }
    });
});

// Start observing the body for any changes to child elements
observer.observe(document.body, {
    attributes: true,
    subtree: true,
    attributeFilter: ['style']
});

// Initial application
applyFontSize();
