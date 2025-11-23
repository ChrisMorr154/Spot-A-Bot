# Spot-A-Bot - A mobile social deduction game

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

## Settings
<p align="center">
  <img src="Screenshots/IMG_3886.png" width="300" />
</p>

## More Info
<p align="center">
  <img src="Screenshots/IMG_3887.png" width="300" />
</p>

## User Policy
<p align="center">
  <img src="Screenshots/IMG_3889.png" width="300" />
</p>

## Game Rules
<p align="center">
  <img src="Screenshots/IMG_3890.png" width="300" />
</p>

## Game Session
<p align="center">
  <img src="Screenshots/IMG_3891.png" width="300" />
</p>

# Dashboard
<p align="center">
  <img src="Screenshots/dashboard.jpg" width="300" />
</p>


