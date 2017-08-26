import React, { Component } from 'react'; 
import logo from './greyTimes.jpg'; 
import './App.css'; 
import Search from './Search.js';
import Results from './Results.js';
import Saved from './Saved.js';





class Main extends Component { 

render() { 

return (

<div className="Main">
  
	   <div className="row"> 

		    <div className="col-md-6">   
	       <Search /> 
	       </div>

        <div className="col-md-6">
        <Results />
        </div>

       </div>

       <div className="row"> 
       <Saved />

       </div>

</div>

); 

} 

} 

export { Main as default };