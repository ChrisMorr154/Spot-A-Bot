# Spot-A-Bot 

## Description

The app uses React Native with Expo, real-time communication through Socket.IO, and a Node.js/Express backend that speaks directly with the ChatGPT API. Each match creates a short conversation where players interact naturally, and one “player” is secretly the AI pretending to be human. 

Under the hood, the app stitches together modern mobile development practices, API orchestration, and real-time state synchronization. This keeps the game smooth and chaotic in the best way possible.

The backend is built with Node.js and Express, using Socket.IO for real-time communication and MongoDB for persistent data storage. The mobile app uses Axios for API calls to the server (including ChatGPT requests) and uses `fetch()` for backend routes that interact with the MongoDB cluster. Expo handles development, device testing, and deployment.

---

## Features

- **Real-Time Multiplayer**  
  Powered by Socket.IO to keep messages, room updates, and game state changes instantly synced across all devices.

- **AI Impostor Powered by ChatGPT**  
  Axios sends prompts to an Express route that communicates with the ChatGPT API, generating realistic responses for the AI player.

- **React Native + Expo Frontend**  
  Cross-platform UI with fast refresh, smooth navigation, and native performance on both iOS and Android.

- **Interactive Dashboard**  
  Shows player lists, session data, and active game details. Uses Axios to pull structured session metadata and `fetch()` to run actions tied to MongoDB operations.

- **MongoDB Cluster Storage**  
  Stores game states, session history, rules, and player activity. Accessed through backend routes triggered by fetch requests from the mobile client.

- **Cross-Platform Compatibility**  
  A single codebase runs on both iOS and Android devices.

## Preview

## Home Page
<p align="center">
  <img src="Screenshots/IMG_3885.png" width="300" />
</p>

The Home page acts as the main entry point to the app, A central hub allowing users to navigate through the application. the navigation is handled by `expo-router`. Buttons are implemented with `Pressable` components as anchor points into deeper parts of the app, keeping the experience fast and approachable.


## Settings
<p align="center">
  <img src="Screenshots/IMG_3886.png" width="300" />
</p>

The Settings page allows players to adjust preferences that affect the app’s behavior and the user experience. React Native’s state hooks power the toggles and options shown here.


## User Policy
<p align="center">
  <img src="Screenshots/IMG_3889.png" width="300" />
</p>

The User Policy screen displays long-form information within a scrollable card. All text content is dynamically inserted from a local object and rendered using a `ScrollView`, while the confirmation button advances the user through the onboarding flow via `expo-router`.


## Game Rules
<p align="center">
  <img src="Screenshots/IMG_3890.png" width="300" />
</p>

This page provides players with the rules of the game. It shares the same styling as the User Policy page. Content is drawn from a structured object that stores all rule text. Navigation moves the player forward through onboarding until they reach the actual gameplay environment.


## More Info
<p align="center">
  <img src="Screenshots/IMG_3887.png" width="300" />
</p>

This gives more information on the game such as, what it is and why we have built it.


## Game Session
<p align="center">
  <img src="Screenshots/IMG_3891.png" width="300" />
</p>

The Game Session is the main experience, this is where real players and the AI interact in real time. Messages and game events are handled through Socket.IO, ensuring instant updates across all devices. When the AI responds, the app sends an Axios request to an Express route, which forwards the prompt to the ChatGPT API. The AI’s response is then sent back to all players via Socket.IO to simulate a fully active participant. Additional game state, such as session history or round data, is stored in our mongodb cluster for analytics.


## Dashboard
<p align="center">
  <img src="Screenshots/dashboard.jpg" width="300" />
</p>

The Dashboard provides players with a detailed overview of past sessions, results, and analytics. It retrieves data from the database using crud operations. `fetch()` communicates with backend routes that read and update stored documents in MongoDB. This keeps the dashboard responsive while also supporting more complex data operations behind the scenes. Each component is built to scale as additional metrics or visualization features are added in future versions.



