# phpMyAdmin Font Enlarger 🚀

A lightweight Google Chrome extension designed specifically for developers and database administrators using **phpMyAdmin**. This extension solves the common issue of small, hard-to-read text in the SQL query editor by allowing users to dynamically adjust the font size in real-time.

## ✨ Features

- **Real-time Adjustment**: Change font size instantly using a convenient slider in the extension popup.
- **Persistence**: Your preferred font size is saved using `chrome.storage`, meaning it stays the same even after page refreshes or browser restarts.
- **Forced Override**: Uses `!important` CSS injection and a periodic observer to ensure that phpMyAdmin's default styles don't overwrite your settings.
- **Low Overhead**: Specifically targeted to run only on `localhost` and `127.0.0.1` to ensure zero impact on your browsing experience across other websites.

## 🛠️ Installation

Since this is a developer tool, you can install it via Chrome's "Developer Mode":

1. **Download/Clone this repository** to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. In the top right corner, enable the **"Developer mode"** toggle.
4. Click the **"Load unpacked"** button in the top left.
5. Select the `phpmyadmin-font-enlarger` folder.
6. **Pin the extension**: Click the puzzle piece icon 🧩 in your Chrome toolbar and pin "phpMyAdmin Font Enlarger" for quick access.

## 🚀 Usage

1. Open your phpMyAdmin SQL tab (e.g., `http://localhost/phpmyadmin/index.php?route=/server/sql`).
2. Click the extension icon in your toolbar.
3. Move the slider to your desired font size (12px to 100px).
4. The SQL editor will update instantly!

## 📂 Project Structure

- `manifest.json`: Extension configuration and permissions.
- `popup.html` / `popup.js`: The user interface for controlling the font size.
- `content.js`: The logic that injects and maintains the font size on the webpage.
- `style.css`: Base styles for targeting CodeMirror editor elements.

## 🤝 Contributing

Feel free to fork this project, open issues, or submit pull requests to improve the functionality!

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
