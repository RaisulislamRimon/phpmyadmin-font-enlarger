# phpMyAdmin Font Enlarger 🚀

---
🌐 **Language / ভাষা:** English | [বাংলা (Bengali)](README.bn.md)
---

A professional productivity toolkit for developers and database administrators using **phpMyAdmin**. While it started as a tool to fix small, hard-to-read text, it has evolved into a "Power User Suite" that streamlines your database workflow.

## ✨ Features

### 🔍 Visual Enhancements
- **Real-time Font Scaling**: Adjust the SQL editor font size instantly (12px to 100px) via the popup slider.
- **Custom Editor Themes**: Choose from several professional themes:
  - **Default**: Standard phpMyAdmin look.
  - **Professional Dark**: Easy on the eyes for night coding.
  - **High Contrast (Neon)**: High visibility.
  - **Dracula**: Classic developer palette.
  - **Solarized**: Soft, reduced-contrast professional theme.
  - **Ocean**: Deep blue aesthetic.
- **Compact Mode**: Reduce table padding to increase information density and see more data rows on one screen.
- **Row Highlighting**: Automatic subtle highlighting of the row your mouse is hovering over in result tables.

### ⚡ Power User Productivity
- **Smart Jump (Auto-Jump)**: Automatically returns you to the SQL query tab 2 seconds after a successful query execution.
- **Manual Jump Shortcut**: Press `Ctrl + Shift + G` to jump instantly to the SQL tab from any phpMyAdmin page.
- **Font Scaling Shortcuts**: 
  - `Ctrl + Plus (+)`: Increase font size.
  - `Ctrl + Minus (-)`: Decrease font size.
- **Auto-Focus**: Automatically places the cursor in the SQL editor upon loading the SQL page.

## 🛠️ Installation
1. **Download/Clone this repository** to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. In the top right corner, enable the **"Developer mode"** toggle.
4. Click the **"Load unpacked"** button in the top left.
5. Select the `phpmyadmin-font-enlarger` folder.
6. **Pin the extension**: Click the puzzle piece icon 🧩 in your Chrome toolbar and pin "phpMyAdmin Font Enlarger" for quick access.

## 🚀 Usage
1. Open your phpMyAdmin instance.
2. Click the extension icon in your toolbar to configure themes, font size, and power user settings.
3. Use the keyboard shortcuts for maximum efficiency.

## 📂 Project Structure
- `manifest.json`: Extension configuration and permissions.
- `popup.html` / `popup.js`: Control panel for all settings and help guide.
- `content.js`: Core logic for font injection, theme application, and automation.
- `style.css`: Visual overrides for the editor and result tables.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
