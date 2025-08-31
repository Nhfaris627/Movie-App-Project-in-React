import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext() 

export const MovieProvider = ({children}) => { // children is inside of the component that is being redered
    const [favorites, setFavorites] = useState([])
    
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if(storedFavs) setFavorites(JSON.parse(storedFavs)) //storing all movies in a list and stored as a JSON string


    }, [])
    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites)) //this only runs when favorites changes, 
    }, [favorites]) // will set item in local storage and store it as a json string and turn it back into an array


    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId)) //generates a new array of all the movie we DONT want to remove
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }
    
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value = {value}>
        {children}
    </MovieContext.Provider>
}