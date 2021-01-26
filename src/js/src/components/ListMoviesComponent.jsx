import {Component} from 'react';
import MovieService from '../apis/MovieService.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/CineApp.css'

class ListMoviesComponent extends Component{

    constructor(){
        super();
        this.state ={
            movies : []
        }
    }
    componentDidMount(){
        MovieService.retrieveAllMovies()
        .then(response => this.setState({movies: response.data}))
        .catch(error => console.log(error))
    }

    showSchedule = (movieId) => {
        this.props.history.push(`/schedule/${movieId}`);
    }

    addNewMovie = () =>{
        this.props.history.push(`/movie`);
    }
    render(){
        
        return(
            <div className='container'>
                <div style={{marginBottom:5}}className='row'>
                <button onClick={this.addNewMovie} className='btn btn-success'>add a movie</button>
                </div>
                <div className='row'>
                    
                { 
                    this.state.movies.map(movie =>{
                        console.log()
                        return(
                            <div key={movie.movieId} className='col-xs-12 col-sm-6 col-md-3'>

                                <img style={{height:300}} src={"data:image/png;base64," + movie.image} className="img-fluid img-rounded"  alt=""/>
                                <h4 className='text-center'>{movie.title}</h4>
                                
                                <h6 className='text-center'>
                                    <span style={{marginRight:3}} className='badge badge-secondary'>{movie.clasification} </span>
                                    <span style={{marginRight:3}} className='badge badge-secondary'>{movie.duration} min. </span>
                                    <span style={{marginRight:3}} className='badge badge-secondary'>{movie.genre} </span>
                                </h6>
                                <p className='text-center'>
                                    <button className='btn btn-sm btn-primary' onClick={()=> this.showSchedule(movie.movieId)}> Check schedule </button>
                                </p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }

}

export default ListMoviesComponent;