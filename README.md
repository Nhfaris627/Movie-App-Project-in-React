# Movie App 🎬

A modern React application for browsing and managing your favorite movies, powered by The Movie Database (TMDb) API.

## Features

- **Browse Popular Movies**: Discover trending and popular movies
- **Search Functionality**: Find specific movies using the search bar
- **Favorites Management**: Add and remove movies from your personal favorites list
- **Persistent Storage**: Your favorites are saved locally and persist between sessions
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, dark-themed interface with smooth animations

## Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Styling**: Custom CSS with modern design patterns
- **API**: The Movie Database (TMDb) API
- **Storage**: Local Storage for favorites persistence

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/movie-app.git
cd movie-app
```

2. Navigate to the frontend directory:
```bash
cd FrontEnd
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root of the FrontEnd directory and add your TMDb API key:
```env
VITE_API_KEY= your_tmdb_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and visit `http://localhost:5173`

## API Setup

This application uses The Movie Database (TMDb) API. To get started:

1. Visit [TMDb](https://www.themoviedb.org/)
2. Create a free account
3. Go to your account settings and request an API key
4. Replace the API key in `src/services/api.js` or use environment variables

## Project Structure

```
FrontEnd/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx      # Individual movie card component
│   │   └── NavBar.jsx         # Navigation bar
│   ├── contexts/
│   │   └── MovieContext.jsx   # Context for favorites management
│   ├── css/
│   │   ├── App.css           # Main app styles
│   │   ├── Favorites.css     # Favorites page styles
│   │   ├── Home.css          # Home page styles
│   │   ├── MovieCard.css     # Movie card styles
│   │   ├── Navbar.css        # Navigation styles
│   │   └── index.css         # Global styles
│   ├── pages/
│   │   ├── Favorites.jsx     # Favorites page
│   │   └── Home.jsx          # Home/search page
│   ├── services/
│   │   └── api.js            # API service functions
│   ├── App.jsx               # Main app component
│   └── main.jsx              # App entry point
├── index.html
├── package.json
└── vite.config.js
```

## Key Components

### MovieCard
Displays individual movie information including:
- Movie poster
- Title and release year
- Favorite toggle button
- Hover effects and animations

### MovieContext
Manages global state for:
- Favorites list
- Add/remove favorites functionality
- Persistent storage via localStorage

### API Service
Handles all API calls to TMDb:
- Fetching popular movies
- Searching for specific movies
- Error handling and loading states

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Search Movies
- Real-time search functionality
- Debounced API calls for better performance
- Loading states and error handling

### Favorites Management
- Add movies to favorites with a heart icon
- Remove movies from favorites
- Persistent storage using localStorage
- Visual feedback for favorited items

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API
- [React](https://reactjs.org/) for the frontend framework
- [Vite](https://vitejs.dev/) for the build tool


