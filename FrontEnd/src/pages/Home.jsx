import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {
    const [searchQuery, setsearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Oppenheimer", release_date: 2023},
        {id: 2, title: "Rush hour 3", release_date: 2015},
        {id: 3, title: "John Wick", release_date: 2019},
        {id: 4, title: "Chungus and Mungus", release_date: 2018},
        {id: 5, title: "The Shawshank Redemption", release_date: 2000},
    ]


    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setsearchQuery("------")
    };

    return <div className="home"> 
        <form onSubmit={handleSearch} className="search-form"> 
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            />
            <button type="submit" className = "search-button"> Search </button>
        </form>

        <div className="movies-grid"> 
            {movies.map(movie =>  ( 
                <MovieCard movie={movie} key={movie.id} />
            )
        )}
        </div>
    </div>
}