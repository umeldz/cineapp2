import {Component} from 'react';
import ListMoviesComponent from './ListMoviesComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ScheduleComponent from './ScheduleComponent';
import MovieComponent from './MovieComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class MovieApp extends Component{

    render(){
        return(
            <div className='movieApp'>
                <Router>
                 <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path='/' exact component={ListMoviesComponent} />
                        <Route path='/schedule/:id' component={ScheduleComponent} />
                        <Route path='/movie' component={MovieComponent} />
                    </Switch>
                    <FooterComponent/>
                  </>
                </Router>
                
            </div>
        );
    }
}

export default MovieApp;