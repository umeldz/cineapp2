import { Component } from "react";
import MovieService from '../apis/MovieService.js';

class ScheduleComponent extends Component{
    constructor(){
        super();
        this.state ={
            movie: {},
            schedules:[],
            movieDetails:{}
        }
    }

    componentDidMount(){
       
      var movieId = this.props.match.params.id;
       
       MovieService.retrieveMovieById(movieId)
      .then(response => {
          console.log(response.data.movieDetails.actors)
          this.setState({movie:response.data})
      })
      .catch(error => console.log(error));

      MovieService.retrieveScheduleByMovieId(movieId)
      .then(response =>{
          this.setState({schedules:response.data})
      })
      .catch(error => console.log(error))
        
    }

    
    render(){
        var image= 'spiderman.jpg';
       if(this.state.movie.movieDetails){
           this.state.movieDetails =this.state.movie.movieDetails;
           image =this.state.movie.image;
       }
      
        return(
           
         <div className='container theme-showcase'>
                <div className='page-header'>
                    <h2>{this.state.movie.title}</h2>
                </div>
                <div className='row row-division'>
                        <div className='col-sm-3'>
                            <p className='text-center'>
                                <img src={"data:image/png;base64," + this.state.movie.image} 
                                style={{width:155, height:220}}
                                alt=""/> 
                            </p>
                        </div>
                        <div className='col-sm-9'>
                            <div className='card'>
                                    <div className='card-header'>
                                    <h4>Movie details</h4>
                                    </div>
                            
                                <div className='card-body'>
                                    <p>
                                        Title: {this.state.movie.title}<br/>
                                        Actors:{this.state.movieDetails.actors}<br/>
                                        Director:{this.state.movieDetails.film_director}<br/>
                                        Clasification:{this.state.movie.clasification}<br/>
                                        Duration:{this.state.movie.duration}<br/>
                                        Genre:{this.state.movie.genre}<br/>
                                        Release Date:{this.state.movie.releaseDate} <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='card'>
                    <div className='card-header'>
                        <span className='badge badge-success'>Schedule</span>
                    </div>
                    <div className='card-body'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Hour</th>
                                    <th>Place</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                 this.state.schedules.map(schedule =>{
                                    return (
                                        <tr key={schedule.scheduleId}>                 
                                            <td>{schedule.hour}</td>
                                            <td>{schedule.place}</td>  
                                            <td>{schedule.price}</td>  
                                        </tr>
                                    )
                                 })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row row-division">
					<div className="col-sm-7">
						<div className="card">
							<div className="card-header">
								<h4 className="panel-title">Trailer</h4>
							</div>
							<div className="card-body">
								<iframe width="100%" height="315" src={this.state.movieDetails.trailer} ></iframe>
							</div>
						</div>           
					</div> 
					<div className="col-sm-5">
						<div className="card">
							<div className="card-header">
								<h4 className="panel-title">SINOPSIS</h4>
							</div>
							<div className="card-body">
								<p>{this.state.movieDetails.sinopsis}</p>
							</div>
						</div>                          
					</div>
				</div>

              
            </div>
            
           
        )
    }
}

export default ScheduleComponent;

/*
  
*/