import React, {Component} from 'react';

class Iphone6 extends Component{
    onAddToCard(text){
    	alert(text);
    	console.log(text);
    }

    render(){


    	var product ={
    		id   : 10101997,
    		Name : 'iphone6',
    		Price: 15000000
    	};
      return(
       		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
       			<div className="thumbnail">
       				<img alt="Iphone6" src="https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg" />
       				<div className="caption">
       					<h3>Iphone 6 Plus</h3>
       					<a className="btn btn-primary">Thông Tin Mặt Hàng</a>
       					<p>
       						<h3>
       							ID    : {product.id}       <br/>
       							Name  : {product.Name}     <br/>
       							Price : {product.Price} VNĐ<br/>
       						</h3>		
       					</p>
       					<p >
       						<a className="btn btn-primary" onClick = { () => { this.onAddToCard('Mua Thành Công' + ' ' + product.Name) } } >Mua Hàng</a> <br/>
       					</p>
       				</div>
       			</div>
       		</div>

        )
    }
  }
export default Iphone6;