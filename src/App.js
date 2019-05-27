import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Iphone6 from './components/Iphone6';
import Iphone7 from './components/Iphone7';

class App extends Component{
    render(){

      return(
        <div>
			<Header />
			<div className="row">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<Iphone6 />
				</div>
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<Iphone7 />
				</div>
			</div>
        </div>

        )
    }
  }
export default App;