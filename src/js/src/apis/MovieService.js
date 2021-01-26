
import axios from 'axios';
class MovieService {
    retrieveAllMovies(){
        return axios.get(`http://localhost:8080/movies`);
     }
     retrieveMovieById(movieId){
         return axios.get(`http://localhost:8080/movies/${movieId}`);
     }
     retrieveScheduleByMovieId(movieId){
        return axios.get(`http://localhost:8080/movies/${movieId}/schedule`);
     }
}

export default new MovieService();