import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts, postProducts} from "../../Store/Actions/productsAction";
import {putProducts} from "../../Store/Actions/productsAction";
import './AddNewProducts.css';

class Add extends Component {

    state = {
        productName: '',
        productPhoto: '',
        productPrice: '',
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

        Object.keys(this.props.name).forEach(info => {
            const InfoObject = {
                id: info,
                much: this.props.name[info].much,
                productImage: this.props.name[info].productImage,
                productName: this.props.name[info].productName,
                productPrice: this.props.name[info].productPrice
            };
            products.push(InfoObject);
        });

        const productIndex = products.findIndex(product => product.productName === this.state.productName);

        if (products[productIndex] && products[productIndex].productName === this.state.productName) {
            const productInfo = {
                productName: products[productIndex].productName,
                much: parseInt(products[productIndex].much) + parseInt(this.state.much),
                productPhoto: products[productIndex].productPhoto,
                productPrice: products[productIndex].productPrice,
            };
            this.props.putProducts(products[productIndex].id, productInfo)
        } else {
            const product = {
                productName: this.state.productName,
                productPhoto: this.state.productPhoto,
                productPrice: this.state.productPrice,
                much: this.state.much
            };
            this.props.postProducts(product)
        }
        this.props.history.push('/')
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
                    <input type="text" name="productPhoto" onChange={this.inputValHandler}
                           placeholder="product Photo.."/>
                    <h3>Product Price</h3>
                    <input type="text" name="productPrice" onChange={this.inputValHandler}
                           placeholder="product Price.."/>
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
    putProducts: (productInfo, products, name) => dispatch(putProducts(productInfo, products, name)),
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);