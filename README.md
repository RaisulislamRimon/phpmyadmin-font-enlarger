# phpMyAdmin Font Enlarger 🚀

A lightweight Google Chrome extension designed specifically for developers and database administrators using **phpMyAdmin**. This extension solves the common issue of small, hard-to-read text in the SQL query editor by allowing users to dynamically adjust the font size in real-time.

---
🌐 **Language / ভাষা:** 
- [English](#english)
- [বাংলা](#bengali)
---

<a name="english"></a>
## English

### ✨ Features
- **Real-time Adjustment**: Change font size instantly using a convenient slider in the extension popup.
- **Persistence**: Your preferred font size is saved using `chrome.storage`, meaning it stays the same even after page refreshes or browser restarts.
- **Forced Override**: Uses a specialized JavaScript engine to ensure that phpMyAdmin's default styles don't overwrite your settings.
- **Low Overhead**: Specifically targeted to run only on `localhost` and `127.0.0.1` to ensure zero impact on your browsing experience across other websites.

### 🛠️ Installation
1. **Download/Clone this repository** to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. In the top right corner, enable the **"Developer mode"** toggle.
4. Click the **"Load unpacked"** button in the top left.
5. Select the `phpmyadmin-font-enlarger` folder.
6. **Pin the extension**: Click the puzzle piece icon 🧩 in your Chrome toolbar and pin "phpMyAdmin Font Enlarger" for quick access.

### 🚀 Usage
1. Open your phpMyAdmin SQL tab.
2. Click the extension icon in your toolbar.
3. Move the slider to your desired font size (12px to 100px).

---

<a name="bengali"></a>
## বাংলা

**phpMyAdmin Font Enlarger** হলো একটি হালকা ওজনের গুগল ক্রোম এক্সটেনশন, যা বিশেষভাবে ডেভেলপার এবং ডাটাবেস অ্যাডমিনিস্ট্রেটরদের জন্য তৈরি করা হয়েছে। phpMyAdmin-এর SQL কুয়েরি এডিটরের লেখা অনেক সময় খুব ছোট থাকে যা পড়তে অসুবিধা হয়, এই এক্সটেনশনটি ব্যবহার করে আপনি রিয়েল-টাইমে ফন্ট সাইজ বাড়িয়ে নিতে পারবেন।

### ✨ বৈশিষ্ট্যসমূহ
- **রিয়েল-টাইম অ্যাডজাস্টমেন্ট**: এক্সটেনশন পপ-আপের স্লাইডার ব্যবহার করে সাথে সাথে ফন্ট সাইজ পরিবর্তন করা যায়।
- **সেটিংস সংরক্ষণ**: আপনার পছন্দ করা ফন্ট সাইজটি `chrome.storage`-এ সেভ হয়ে থাকে, ফলে পেজ রিফ্রেশ বা ব্রাউজার রিস্টার্ট করলেও সেটি পরিবর্তন হয় না।
- **কার্যকর ওভাররাইড**: এটি একটি বিশেষ জাভাস্ক্রিপ্ট ইঞ্জিন ব্যবহার করে যাতে phpMyAdmin-এর নিজস্ব স্টাইল আপনার সেট করা সাইজকে পরিবর্তন করতে না পারে।
- **কম রিসোর্স ব্যবহার**: এটি শুধুমাত্র `localhost` এবং `127.0.0.1`-এ কাজ করে, তাই অন্য কোনো ওয়েবসাইটে ব্রাউজিংয়ের সময় এটি আপনার পিসির গতি কমাবে না।

### 🛠️ ইন্সটলেশন পদ্ধতি
১. এই রিপোজিটরি থেকে ফাইলগুলো আপনার কম্পিউটারে **ডাউনলোড বা ক্লোন** করুন।
২. গুগল ক্রোম ব্রাউজার ওপেন করে `chrome://extensions/` লিঙ্কে যান।
৩. উপরের ডানদিকের কোণায় **"Developer mode"** অপশনটি চালু করুন।
৪. উপরের বামদিকের **"Load unpacked"** বাটনে ক্লিক করুন।
৫. এবার `phpmyadmin-font-enlarger` ফোল্ডারটি সিলেক্ট করুন।
৬. **এক্সটেনশনটি পিন করুন**: ক্রোম টুলবারে পাজল আইকন 🧩-এ ক্লিক করে "phpMyAdmin Font Enlarger" পিন করুন যাতে দ্রুত এক্সেস করা যায়।

### 🚀 ব্যবহার পদ্ধতি
১. আপনার phpMyAdmin-এর SQL ট্যাবটি ওপেন করুন।
২. টুলবারে থাকা এক্সটেনশন আইকনে ক্লিক করুন।
৩. স্লাইডারটি সরিয়ে আপনার পছন্দমতো ফন্ট সাইজ (১২px থেকে ১০০px) সেট করুন।

---

## 📂 Project Structure / প্রজেক্ট স্ট্রাকচার
- `manifest.json`: Extension configuration / এক্সটেনশন কনফিগারেশন।
- `popup.html` / `popup.js`: User interface for font control / ফন্ট কন্ট্রোলের ইউজার ইন্টারফেস।
- `content.js`: Logic for font injection / ফন্ট ইনজেকশনের লজিক।
- `style.css`: Base styles / বেস স্টাইল।

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
