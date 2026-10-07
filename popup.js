document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSize');
  const display = document.getElementById('sizeVal');
  const themeSelect = document.getElementById('themeMode');
  const autoJumpCheck = document.getElementById('autoJump');
  const compactModeCheck = document.getElementById('compactMode');
  const toggleHelp = document.getElementById('toggleHelp');
  const helpContent = document.getElementById('helpContent');

  const btnSmall = document.getElementById('presetSmall');
  const btnMedium = document.getElementById('presetMedium');
  const btnLarge = document.getElementById('presetLarge');

  // Load saved settings
  chrome.storage.sync.get(['fontSize', 'themeMode', 'autoJump', 'compactMode'], (result) => {
    if (result.fontSize) {
      slider.value = result.fontSize;
      display.textContent = result.fontSize + 'px';
    }
    if (result.themeMode) {
      themeSelect.value = result.themeMode;
    }
    if (result.autoJump !== undefined) {
      autoJumpCheck.checked = result.autoJump;
    }
    if (result.compactMode !== undefined) {
      compactModeCheck.checked = result.compactMode;
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

  // Auto-Jump Toggle
  autoJumpCheck.addEventListener('change', () => {
    const enabled = autoJumpCheck.checked;
    chrome.storage.sync.set({ autoJump: enabled }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'updateAutoJump', enabled: enabled });
        }
      });
    });
  });

  // Compact Mode Toggle
  compactModeCheck.addEventListener('change', () => {
    const enabled = compactModeCheck.checked;
    chrome.storage.sync.set({ compactMode: enabled }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'updateCompactMode', enabled: enabled });
        }
      });
    });
  });

  // Help Toggle Logic
  toggleHelp.addEventListener('click', () => {
    const isVisible = helpContent.style.display === 'block';
    helpContent.style.display = isVisible ? 'none' : 'block';
    toggleHelp.textContent = isVisible ? 'What are these options?' : 'Close Guide';
  });
});
