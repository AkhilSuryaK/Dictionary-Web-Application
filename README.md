# 📘 Dictionary Web Application

A simple and responsive dictionary web app that allows users to search for **English word definitions** in real-time using the **API Ninjas Dictionary API**.

> 🔗 Live Demo: https://dictionary-web-by-rapidapi.netlify.app  
> 👨‍💻 Developed by [Kolipaka Akhil Surya](https://www.linkedin.com/in/akhilsurya/)

---

## 🚀 Features

- 🔍 **Real-time word search**
- 💡 **Clean and responsive UI** using Bootstrap
- 🔗 **Live dictionary API integration**
- ⚠️ **Handles invalid or empty input gracefully**

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Bootstrap 5), JavaScript (Vanilla)
- **API:** [API Ninjas Dictionary API](https://rapidapi.com/apininjas/api/dictionary-by-api-ninjas)

---

## 📁 Project Structure

Dictionary-Web-Application/

├── index.html # Main HTML file

├── style.css # Custom styles (optional, if separated)

├── script.js # JavaScript file for API logic

├── README.md # Project documentation

└── .gitignore # (Optional)


---

## 🔧 How It Works

1. User enters an English word in the input box.
2. JavaScript sends a request to the Dictionary API.
3. The API returns the definition.
4. The result is dynamically displayed below the search box.

---

## 🖥️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/AkhilSuryaK/Dictionary-Web-Application.git
cd Dictionary-Web-Application

2️⃣ Get API Key
Go to API Ninjas Dictionary API
Subscribe and get your API key

3️⃣ Configure the API Key
Open script.js
Replace 'YOUR_API_KEY_HERE' with your actual key:

headers: {
  'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
  'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
}

4️⃣ Run the App
Open index.html in your browser
Start searching for words!💡 Future Improvements
🔊 Add pronunciation or audio playback
🔁 Include synonyms and antonyms
🌙 Enable dark mode toggle
🧠 Save user search history locally

📬 Contact
GitHub: @AkhilSuryaK
LinkedIn: Akhil Surya Kolipaka

📄 License
This project is licensed under the MIT License.

---

Let me know if you'd like help uploading these to GitHub or adding project badges!
