import { Component } from "react";
import axios from 'axios';
class MovieComponent  extends Component{

    constructor(){
        super();
        this.state ={           
                title:'',
                duration: 0,
                genre:'',
                clasification:'',
                releaseDate: new Date(),
                image: ''
        }
    }
    onChange = (event)=>{
        const field = event.target.name;
    
        this.setState({
            [field]: event.target.value
        })
    }

    onChangeImage = (e) =>{
         let file =e.target.files[0];
         if(file){
             const reader = new FileReader();
             reader.onload = this._handleReaderLoaded.bind(this);
             reader.readAsBinaryString(file);
         }
    } 
  

     saveMovie = (e) =>{
         e.preventDefault();
         alert('saved')

         const movie ={
            'title':this.state.title,
            'duration': this.state.duration,
            'genre': this.state.genre,
            'clasification': this.state.clasification,
            'image': this.state.image,
            'releaseDate': this.state.releaseDate
         }

         axios.post(`http://localhost:8080/movies`,movie)
         .then(response => console.log('response',response))
         .catch(error => console.log('error', error))


      /*   console.log('title',this.state.title)
         console.log('duration',this.state.duration)
         console.log('genre',this.state.genre)
         console.log('clasification',this.state.clasification)
         console.log('date',this.state.releaseDate)
         console.log('image',this.state.image)*/
     }

    render(){
        return(
            <div className='container d-flex flex-column min-vh-100'>
                
                <form onSubmit={(e)=>this.saveMovie(e)}>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='form-group'>
                                <label htmlFor='title'>Title</label>
                                <input type="text" className='form-control' name='title' id='title' required='required' onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <div className='form-group'>
                                <label htmlFor='title'>Duration</label>
                                <input type="number" className='form-control' name='duration' id='duration' required='required'onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <div className='form-group'>
                                <label htmlFor='title'>Clasification</label>
                                    <select id='clasification' className='form-control' name='clasification'onChange={this.onChange}>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='form-group'>
                                <label htmlFor="director">Genre</label>
                                <input type="text" className='form-control' name='genre' id='genre' required='required'  onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <div className='form-group'>
                                <label htmlFor="director">Release Date</label>
                                <input type="date" className='form-control' name='releaseDate' id='releaseDate'required='required' onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <div className='form-group'>
                                <label htmlFor="director">Picture</label>
                                <input type='file'
                                        name='image'
                                        id='file'
                                        accept='.jpeg, .png, ,.jpg' required='required' onChange={this.onChangeImage}/>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-danger' >Save</button>
                </form>
            </div>
          
        )
    }
    _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        this.setState({
            image: btoa(binaryString)
        })
    }

}

export default MovieComponent;
/*
   <div className='row'>
                    <form className='form'onSubmit={(e) =>this.onFileSubmit(e)} onChange={(e) => this.onChange(e)}>
                        <input type='file'
                            name='image'
                            id='file'
                            accept='.jpeg, .png, ,jpg'
                        />
                        <input type='submit'/>
                    </form>
                </div>
                <div className='row'>
                    <img id='profile-picture'/>
                </div>

*/


/*

  onChange = (e) =>{
        //console.log('file to upload ' , e.target.files[0]);
        let file =e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);

            reader.readAsBinaryString(file);
        }
    }

    _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        this.setState({
            base64TextString: btoa(binaryString)
        })
    }

    onFileSubmit = (e) => {
        e.preventDefault();
        const preview = document.getElementById('profile-picture');

        //console.log('binary string ', this.state.base64TextString);
        let payload = {movieId:9, image: this.state.base64TextString};
        this.saveImage(payload)
        .then(response =>{
            console.log(response)
            let image = response.data.image;
            console.log('oh yeah baby!')
            preview.src = "data:image/png;base64," + image;
        }).catch(error =>{console.log(error)})
    }


    saveImage(movie){
       // console.log('what im sending ' , image)
        return axios.put(`http://localhost:8080/movies`,movie);
     }

*/