document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSize');
  const display = document.getElementById('sizeVal');
  const themeSelect = document.getElementById('themeMode');

  const btnSmall = document.getElementById('presetSmall');
  const btnMedium = document.getElementById('presetMedium');
  const btnLarge = document.getElementById('presetLarge');

  // Load saved settings
  chrome.storage.sync.get(['fontSize', 'themeMode'], (result) => {
    if (result.fontSize) {
      slider.value = result.fontSize;
      display.textContent = result.fontSize + 'px';
    }
    if (result.themeMode) {
      themeSelect.value = result.themeMode;
    }
  });

  const updateSize = (size) => {
    slider.value = size;
    display.textContent = size + 'px';
    chrome.storage.sync.set({ fontSize: size }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'updateFontSize', size: size });
        }
      });
    });
  };

  slider.addEventListener('input', () => updateSize(slider.value));
  btnSmall.addEventListener('click', () => updateSize('14'));
  btnMedium.addEventListener('click', () => updateSize('24'));
  btnLarge.addEventListener('click', () => updateSize('40'));

  // Theme Change
  themeSelect.addEventListener('change', () => {
    const mode = themeSelect.value;
    chrome.storage.sync.set({ themeMode: mode }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'updateTheme', mode: mode });
        }
      });
    });
  });
});
