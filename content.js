// Default settings
let currentFontSize = '24px';
let currentTheme = 'default';

const applyFontSize = () => {
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

    const cursors = document.querySelectorAll('.CodeMirror-cursor');
    cursors.forEach(cursor => {
        cursor.style.setProperty('height', currentFontSize, 'important');
    });
};

const applyTheme = () => {
    const editor = document.querySelector('.CodeMirror');
    if (!editor) return;

    const textElements = document.querySelectorAll('.CodeMirror-code, .CodeMirror-line, .CodeMirror-gutter-element');
    const gutters = document.querySelectorAll('.CodeMirror-gutter');

    if (currentTheme === 'dark') {
        // Professional Dark Mode
        editor.style.setProperty('background-color', '#2c2c2c', 'important');
        textElements.forEach(el => el.style.setProperty('color', '#e0e0e0', 'important'));
        gutters.forEach(g => {
            g.style.setProperty('background-color', '#1e1e1e', 'important');
            g.style.setProperty('color', '#888888', 'important');
        });
    } else if (currentTheme === 'contrast') {
        // High Contrast Neon Mode
        editor.style.setProperty('background-color', '#000000', 'important');
        textElements.forEach(el => el.style.setProperty('color', '#00FF00', 'important'));
        gutters.forEach(g => {
            g.style.setProperty('background-color', '#000000', 'important');
            g.style.setProperty('color', '#AAAAAA', 'important');
        });
    } else {
        // Reset to Default
        editor.style.removeProperty('background-color');
        textElements.forEach(el => el.style.removeProperty('color'));
        gutters.forEach(g => {
            g.style.removeProperty('background-color');
            g.style.removeProperty('color');
        });
    }
};

const refreshEditor = () => {
    window.dispatchEvent(new Event('resize'));
};

chrome.storage.sync.get(['fontSize', 'themeMode'], (result) => {
    if (result.fontSize) {
        currentFontSize = result.fontSize + 'px';
    }
    if (result.themeMode) {
        currentTheme = result.themeMode;
    }
    applyFontSize();
    applyTheme();
    refreshEditor();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'updateFontSize') {
        currentFontSize = request.size + 'px';
        applyFontSize();
        refreshEditor();
    } else if (request.action === 'updateTheme') {
        currentTheme = request.mode;
        applyTheme();
    }
});

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
        applyTheme();
    }
});

observer.observe(document.body, {
    attributes: true,
    subtree: true,
    attributeFilter: ['style']
});

applyFontSize();
applyTheme();
refreshEditor();

setInterval(() => {
    const cursors = document.querySelectorAll('.CodeMirror-cursor');
    cursors.forEach(cursor => {
        if (cursor.style.height !== currentFontSize) {
            cursor.style.setProperty('height', currentFontSize, 'important');
        }
    });
}, 200);
