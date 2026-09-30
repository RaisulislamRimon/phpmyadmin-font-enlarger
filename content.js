// Default font size
let currentFontSize = '24px';

const applyFontSize = () => {
    // We target every single element that contributes to the layout calculation
    const selectors = [
        '.CodeMirror-scroll',
        '.CodeMirror',
        '.CodeMirror-code',
        '.CodeMirror-line',
        '.CodeMirror-gutter-element',
        '.CodeMirror-sizer',
        '.CodeMirror-measure',
        '.CodeMirror-cursor'
    ];

    const allElements = document.querySelectorAll(selectors.join(','));
    allElements.forEach(el => {
        el.style.setProperty('font-size', currentFontSize, 'important');
    });

    // Force the cursor height to match perfectly
    const cursors = document.querySelectorAll('.CodeMirror-cursor');
    cursors.forEach(cursor => {
        cursor.style.setProperty('height', currentFontSize, 'important');
    });
};

// The "Magic Fix": CodeMirror needs to be told to refresh its internal layout
const refreshEditor = () => {
    // Trigger a window resize event - this is the most reliable way to force
    // CodeMirror to recalculate cursor positions based on current DOM styles.
    window.dispatchEvent(new Event('resize'));
};

chrome.storage.sync.get(['fontSize'], (result) => {
    if (result.fontSize) {
        currentFontSize = result.fontSize + 'px';
        applyFontSize();
        refreshEditor();
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'updateFontSize') {
        currentFontSize = request.size + 'px';
        applyFontSize();
        refreshEditor();
    }
});

// Use a MutationObserver to detect when phpMyAdmin tries to reset the font
const observer = new MutationObserver((mutations) => {
    let needsUpdate = false;
    for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            needsUpdate = true;
            break;
        }
    }
    if (needsUpdate) {
        applyFontSize();
        // We don't call refreshEditor here to avoid an infinite loop of resize events
    }
});

observer.observe(document.body, {
    attributes: true,
    subtree: true,
    attributeFilter: ['style']
});

// Initial run
applyFontSize();
refreshEditor();

// Final safety net: ensure cursor height is always correct
setInterval(() => {
    const cursors = document.querySelectorAll('.CodeMirror-cursor');
    cursors.forEach(cursor => {
        if (cursor.style.height !== currentFontSize) {
            cursor.style.setProperty('height', currentFontSize, 'important');
        }
    });
}, 200);
