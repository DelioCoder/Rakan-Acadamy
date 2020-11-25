import React, {Component} from 'react';
import $ from 'jquery';

export default class HomeScreen extends Component{

    async getData(){
       /*  fetch('http://example.com/movies.json')
            .then(response => response.json())
            .then(json => console.log(json)) */

        const UrlString = '../data.json';
        $.ajax({
            url: UrlString,
            success: (searchResults) =>{
                  console.log("Fetched data successfully")
                  console.log(searchResults)
            },
            error: (xhr, status, err) =>{
                console.error("failed to fetch data")
            }
        })
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        return(
            
            <div className="row">
                <div className="img-present">
                    <img className="img-presentation" src="/img/pbe.jpg" alt=""/>
                    <div id="textdiv">
                        <div class="col-md-12" style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '15px'}}>
                            <h1 class="text-white ml-4">Welcome to Rakan's Academy</h1>
                            <p class="text-white ml-4">Press this button for navigate around the website for more information!</p>
                            <a class="btn btn-outline-light col-md-10 ml-4 btnDisplay" href="#section1">↓</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12" id="section1"></div>	
                <div class="col-md-12"  style={{height: "50px"}}></div>

                <div class="col-md-12 mt-5" >
                    <h1 class="text-center text-black">About Me</h1>
                </div>
                
                <div class="col-md-12 mt-5 mb-5" >
                    <div className="row">
                        <div className="col-md-6">
                            <div class="col-md-12 ml-2"><h2 class="font-weight-bold text-black text-left">Rakan's Academy</h2></div>
                            <div class="col-md-12 mt-4 ml-2 mb-5 text-black" style={{lineHeight: '28px'}}>
                                <p class="text-justify ">
                                        
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex justify-content-center">
                            <img style={{width: '75%'}} src="https://corbuse.edu.mx/blog/wp-content/uploads/2018/01/Corbuse_EstoyEstudiandoChefQueMasAprendere.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col-md-12"  style={{height: "80px"}}></div>
			    <div class="col-md-12" id="section2"></div>

                <div class="col-md-12 mt-5 bg-dark"  style={{boxShadow: '5px 5px 5px 5px rgba(0,0,0,0.3)'}}>
                    <div class="col-md-12 mt-5 text-center">
                        <h2 class="text-white">Nuestros Servicios</h2>
                        <p class="text-white">Contamos con los siguientes cursos de programación: </p>
                    </div>
                </div>
            </div>
        )
    }

}