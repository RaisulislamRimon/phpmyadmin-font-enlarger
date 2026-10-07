# Implementation Plan: Power User Suite for phpMyAdmin Font Enlarger

This plan outlines the implementation of the "Power User Suite" including Smart Jump, Keyboard Shortcuts, UI Enhancements, and Auto-Focus features.

## 1. Smart Jump
### Logic
- **Detection**: Use a `MutationObserver` in `content.js` to detect the appearance of elements with the class `.alert-success`.
- **Action**: 
  - When `.alert-success` is detected, start a 2-second timer.
  - After the timer, check if `smartJumpEnabled` is true in `chrome.storage.sync`.
  - If enabled, redirect to `index.php?route=/sql` (or the relative path `/sql`).
- **Configuration**:
  - Add a checkbox "Smart Jump" to `popup.html`.
  - Save/load the state in `popup.js` using `chrome.storage.sync`.

## 2. Keyboard Shortcuts
### Implementation in `content.js`
- Add a global `keydown` event listener.
- **`Ctrl + Shift + G`**:
  - `event.preventDefault()`
  - Redirect to `index.php?route=/sql`.
- **`Ctrl + Plus(+)`** / **`Ctrl + Equals(=)`**:
  - `event.preventDefault()`
  - Increase `currentFontSize` by 2px.
  - Update `chrome.storage.sync` and call `applyFontSize()` and `refreshEditor()`.
- **`Ctrl + Minus(-)`**:
  - `event.preventDefault()`
  - Decrease `currentFontSize` by 2px (min 12px).
  - Update `chrome.storage.sync` and call `applyFontSize()` and `refreshEditor()`.

## 3. UI Enhancements
### Theme Presets
- **`popup.html`**: Add "Dracula", "Solarized", and "Ocean" options to the `#themeMode` select element.
- **`content.js`**: Update `applyTheme()` to handle the new modes:
  - **Dracula**: BG `#282a36`, Text `#f8f8f2`, Gutters `#44475a`.
  - **Solarized**: BG `#fdf6e3`, Text `#657b83`, Gutters `#eee8d5`.
  - **Ocean**: BG `#002b36`, Text `#839496`, Gutters `#073642`.

### Table Highlighting & Compact Mode
- **`popup.html`**: Add a "Compact Mode" toggle checkbox.
- **`style.css`**:
  - **Highlighting**: Add `.table-results tr:hover { background-color: rgba(0,0,0,0.05) !important; }` (or the specific phpMyAdmin table class).
  - **Compact Mode**: Define a class `.compact-mode` that reduces padding:
    ```css
    .compact-mode .table-results td { padding: 2px 4px !important; }
    ```
- **`content.js`**: 
  - Listen for `compactMode` setting changes.
  - Toggle the `.compact-mode` class on the `body` element.

## 4. Auto-Focus
### Logic in `content.js`
- Monitor URL changes or the "Smart Jump" trigger.
- When the SQL tab is entered:
  - Locate the editor: `.CodeMirror` or `textarea[name="sql"]`.
  - Use a short delay (e.g., 100ms) to ensure the DOM is ready.
  - Call `.focus()` on the element.

## Verification Plan
1. **Smart Jump**: 
   - Enable "Smart Jump" in popup.
   - Execute a query that returns a success message.
   - Verify redirect to SQL page after 2s.
   - Disable toggle and verify no redirect occurs.
2. **Keyboard Shortcuts**:
   - Press `Ctrl+Shift+G` -> Verify redirect.
   - Press `Ctrl++` -> Verify font size increases and persists.
   - Press `Ctrl+-` -> Verify font size decreases.
3. **UI Enhancements**:
   - Select "Dracula" -> Verify colors change in editor.
   - Hover over table rows -> Verify highlight.
   - Toggle "Compact Mode" -> Verify padding reduces in result tables.
4. **Auto-Focus**:
   - Use Smart Jump or `Ctrl+Shift+G`.
   - Verify the cursor is automatically placed in the SQL editor.

### Critical Files for Implementation
- `popup.html`
- `popup.js`
- `content.js`
- `style.css`
EOF`
