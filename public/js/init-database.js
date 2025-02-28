import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const movies = [
    {
        title: "Blade Runner 2049",
        description: "Young blade runner K's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years. Ana de Armas plays Joi, a holographic AI companion.",
        genre: "Science Fiction, Drama, Mystery",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
    },
    {
        title: "Ghosted",
        description: "Cole falls head over heels for enigmatic Sadie, but then makes the shocking discovery that she's a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
        genre: "Action, Adventure, Comedy",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BZDc4MzVkNzYtZTRiZC00ODYwLWJjZmMtMDIyNjQ1M2M1OGM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"
    }
];

async function initializeDatabase() {
    try {
        const moviesCollection = collection(db, "movies");
        
        // Check for existing movies to avoid duplicates
        for (const movie of movies) {
            const q = query(moviesCollection, where("title", "==", movie.title));
            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                await addDoc(moviesCollection, movie);
                console.log(`Added movie: ${movie.title}`);
            } else {
                console.log(`Movie "${movie.title}" already exists, skipping...`);
            }
        }
        
        console.log("Database initialization complete!");
    } catch (error) {
        console.error("Error initializing database:", error);
    }
}

// Call the function to initialize the database
initializeDatabase(); 