import axios from "axios";

const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept:'application/json',
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDY4NjcyZDU1NTE3NTU1MDNlNzE3YTFiNzNlZGM4OCIsIm5iZiI6MTczMDE5Mzc0Ni42NzQxODYsInN1YiI6IjY3MjBhNGMzMzRjMGZhYmQ2ODFkNGZmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NrYg-8BF_fbFljjpen3K04cx0PaNDwNhRWIfubVJCTk'
      }
});

export default instance;