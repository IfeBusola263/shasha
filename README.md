# Shasha 🛒

Shasha is a mobile app built with **React Native**, **Expo**, and **TypeScript** to help event planners and homemakers organize their market runs.  
It uses **file-based routing** and **React Navigation** for a smooth, structured navigation flow.

---

## ✨ Features
- Create and manage market run lists
- Save and reuse previous lists
- Share lists with others (future feature)
- Organized navigation with **file-based routing**

---

## 📂 Project Structure

```
shasha/
├── app/                  # File-based routing directory
│   ├── index.tsx         # Home screen
│   ├── market/           # Screens related to market runs
│   │   ├── index.tsx     # Market list screen
│   │   ├── [id].tsx      # Single market run detail
│   └── settings.tsx      # App settings
├── assets/               # Images, fonts, icons
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Tech Stack
- **React Native** – Cross-platform mobile development
- **Expo** – Fast, managed workflow
- **TypeScript** – Type safety & scalability
- **React Navigation** – Navigation system with file-based routing

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/shasha.git
cd shasha
```

### 2. Install dependencies
Using Yarn:
```bash
yarn install
```

---

## ▶️ Running the App

### Start development server
```bash
yarn expo start
```

### Run on Android
```bash
yarn expo run:android
```

### Run on iOS
```bash
yarn expo run:ios
```

---

## 🧭 Navigation Setup

Shasha uses **Expo Router** for file-based routing with React Navigation under the hood.

**Install required packages**:
```bash
yarn add expo-router react-native-safe-area-context react-native-screens react-native-gesture-handler react-native-reanimated react-native-get-random-values
```

**Enable file-based routing** in `app.json` or `app.config.js`:
```json
{
  "expo": {
    "plugins": ["expo-router"]
  }
}
```

**Entry point** (`index.js`):
```ts
import "expo-router/entry";
```

---

## 📜 License
MIT License. See `LICENSE` file for details.
