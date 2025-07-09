# Dictionary-Web-Application

📘 Dictionary Web App
A simple, responsive dictionary web application that allows users to search for English word definitions in real-time using a public REST API.

🚀 Features
Real-time word search
Clean and responsive UI with Bootstrap
Fetches word definitions using the API Ninjas Dictionary API
Error handling for invalid or empty inputs

🛠️ Tech Stack
HTML5
CSS3 (Bootstrap 5)
JavaScript (Vanilla JS)
REST API (API Ninjas via RapidAPI)

🔧 How It Works
User enters an English word.
JavaScript fetches the meaning using the API Ninjas Dictionary API.
The result is displayed dynamically below the search box.

🖥️ Setup Instructions
Clone the repository:
git clone

Open the folder in VS Code or any code editor.
Replace YOUR_API_KEY_HERE in the JavaScript file with your actual API key from RapidAPI.
Open index.html in a browser to run the app locally.

🔐 API Key Setup
Go to API Ninjas Dictionary API
Subscribe and get your API key.
Replace the placeholder in the code:

js

headers: {
  'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
  ...
}

💡 Future Improvements
Add pronunciation/audio playback
Add synonyms and antonyms
Enable dark mode
Save search history

👨‍💻 Author
Kolipaka Akhil Surya
GitHub: @AkhilSuryaK

📄 License
This project is licensed under the MIT License.
