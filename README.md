<div align=center>
  <img src="https://media-hosting.imagekit.io//97787fca7ac24cda/5XA.png?Expires=1834548660&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=u5AothZchaTsjbTJfePDefGjRPX1feaKTBZ96ePdkLb2Lbc3TG27IViOwFT0tQtx29xIZNUZJSe88Y~KjSdWkPHRq3fABY4arZRarHNJaELUh3jhQYo2QXu3I3zv8gG5PfeF5Qp-GGbX8PqgWKqcUr8SGjIdkPymWaIhlo0M-bOtyHGyeuHlYNO6CUx8hzmXDFvdiNzLyUbpdrsfkodexFbrb6RLzmkcMxJqXtUJljuB8uVQ1VPcb8htSw~~cwg3N7D3EPpAjd9KiYlPdXdLthKWqsp0XL5QUnRO2D7xr1jPdFMQPOEXO8JbuhXA1DPzpLwDKDU8UqeDavmkcWc0WQ__" width="137" alt="Logo" />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://media-hosting.imagekit.io//696d072a6b054e3d/swappy-20250219-102605.png?Expires=1834549008&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eAI71jIbkQGpe4KoiraHwokpDPK~QpJrnwauWgrWrbSU6gk4-MqFtsEDf9HltzsitvZQN8D6RDVkuZmt06M~gMSUV0bT68MSc0cgTqxyvlrb-NvwgJtcCRWBMNZQXS7TOmCqocy9aNb0~1Dj0UvFH6PZMPZxPUstbD-x~15smPNbvXKhZVYsObcLfthECsV4LW3F5K6f~tvrglJZM64wHQ0OCkrW6tDh3X2uEUDsfgyAAP29mFNH8JtUlsbOEtSrzCxGjABv3bTPPqcSnwy72WyM-vIESHNXBEBsdtEMCdpT1O7Q8P2a4OrZSLtTahYyDOz6txNCfEscyfziX4L5Mw__" width="215" alt="Logo" />
</div>


## Overview

Cold Recog's frontend is built using **React.js** to provide a simple and clean user interface for identifying deceased individuals and missing persons. The application interacts with a Flask backend powered by TensorFlow . 

## Components

- **Landing Page**: User-friendly interface for quick searches.
    
- **Search Functionality**: Upload images for identification.
    
- **Result Page**: Displays matched identities.
    
- **Responsive UI**: Optimized for different screen sizes.
    

## Tech Stack

- **Frontend**: React.js
    
- **Styling**: CSS
    
- **API Communication**: Fetch/Axios
    

## Installation & Setup

1. Clone the repository:
    
    ```
    git clone https://github.com/Aak54321/cr-frontend.git
    cd cr-frontend
    ```
    
2. Install dependencies:
    
    ```
    npm install
    ```
    
3. Start the development server:
    
    ```
    npm start 
    ```
    
4. Open `http://localhost:3000` in your browser.
    

## Project Structure

```
📂 cr-frontend/             # Cold Recog Frontend Codebase
├── 📂 public/              # Public assets
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── 📜 manifest.json
│   ├── robots.txt
├── 📂 src/                 # Main source code
│   ├── 📂 assets/          # Images and fonts
│   │   ├── detective.png
│   │   ├── glitch_inside.otf
│   │   ├── logo.png
│   ├── 📂 pages/           # React components for pages
│   │   ├── AnimationComponent.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LandingPage.jsx
│   │   ├── ResultPage.jsx
│   │   ├── SearchPage.jsx
│   ├── 📂 styles/          # CSS for pages
│   │   ├── AnimationComponent.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── LandingPage.css
│   │   ├── ResultPage.css
│   │   ├── SearchPage.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
├── 📜 .gitignore           # Ignored files configuration
├── 📜 package.json         # Dependencies and scripts
├── 📜 package-lock.json    # Dependency Lock file  

```

## Contributing

Feel free to contribute by submitting issues or pull requests!

## License

This project is licensed under the MIT License.


