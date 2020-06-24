import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts, postProducts} from "../../Store/Actions/productsAction";
import {putProducts} from "../../Store/Actions/productsAction";
import './AddNewProducts.css';

class Add extends Component {

    state = {
        productName: '',
        productPhoto:'',
        productPrice:'',
        much: '',
    };

    componentDidMount() {
        this.props.fetchProducts();
    }

    inputValHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    };

    addHandler = () => {
        const products = [];

        const product = {
            productName: this.state.productName,
            productPhoto: this.state.productPhoto,
            productPrice: this.state.productPrice,
            much: this.state.much
        };

        Object.keys(this.props.name).forEach(info => {
           const allInfo = [info,this.props.name[info]];
           products.push(allInfo);
        });

       Object.keys(products).forEach(name => {

           const productInfo = {
             productName: products[name][1].productName,
             much: parseInt(products[name][1].much) + parseInt(this.state.much),
             productPhoto: products[name][1].productPhoto,
             productPrice: products[name][1].productPrice,
           };

           if(products[name][1].productName === this.state.productName){
               this.props.putProducts(productInfo,products, name)
           }
          if(products[name][1].productName !== this.state.productName) {
              this.props.postProducts(product)
           }
           this.props.history.push('/')
       });
    };

    cancelHandler = () => {
     this.props.history.push('/');
    };

    render() {
        return (
            <div className="containerAdd">
                <div className="inputs">
                    <h3>Product Name</h3>
                    <input type="text" name="productName" onChange={this.inputValHandler} placeholder="product name.."/>
                    <h3>Product Photo</h3>
                    <input type="text" name="productPhoto" onChange={this.inputValHandler} placeholder="product Photo.."/>
                    <h3>Product Price</h3>
                    <input type="text" name="productPrice" onChange={this.inputValHandler} placeholder="product Price.."/>
                    <h3>Product Much</h3>
                    <input type="text" name="much" onChange={this.inputValHandler} placeholder="product Much.."/>
                </div>
                <div className="btns">
                    <button onClick={this.addHandler}>add</button>
                    <button onClick={this.cancelHandler}>cancel</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    name: state.products.products,
});

const mapDispatchToProps = dispatch => ({
    postProducts: (product) => dispatch(postProducts(product)),
    putProducts: (productInfo,products,name) => dispatch(putProducts(productInfo,products,name)),
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps,mapDispatchToProps)(Add);