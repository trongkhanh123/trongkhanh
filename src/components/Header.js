import React, {Component} from 'react';


class Header extends Component{
    render(){
      return(
        	<div>
        		<nav className="navbar navbar-inverse">
        		<div className="container-fluid">
        			<a className="navbar-brand"> Home</a>
        			<ul className="nav navbar-nav">
        				<li className="active">
        					<a> Trang Chủ</a>
        				</li>
        				<li>
        					<a> Danh Mục Sản Phẩm</a>
        				</li>
        			</ul>
        		</div>
        	</nav>

        	</div>
       )
    }
  }
export default Header;