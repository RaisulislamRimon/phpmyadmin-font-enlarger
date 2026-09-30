document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSize');
  const display = document.getElementById('sizeVal');

  // Load saved size
  chrome.storage.sync.get(['fontSize'], (result) => {
    if (result.fontSize) {
      slider.value = result.fontSize;
      display.textContent = result.fontSize + 'px';
    }
  });

  // Save size on change
  slider.addEventListener('input', () => {
    const size = slider.value;
    display.textContent = size + 'px';

    chrome.storage.sync.set({ fontSize: size }, () => {
      // Notify the content script to update immediately
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'updateFontSize', size: size });
        }
      });
    });
  });
});
