import React, {Component} from 'react';
import {fetchProducts} from "../../Store/Actions/productsAction";
import {connect} from 'react-redux';
import './Main.css'

class Main extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div className="container">
                <div className="ProductBlock">
                    {this.props.products && Object.keys(this.props.products).map(info => (
                        <div className="Block" key={info}>
                            <p>{this.props.products[info].productName}</p>
                            <img src={this.props.products[info].productPhoto} alt=""/>
                            <p>Price: {this.props.products[info].productPrice} сом</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
   products: state.products.products,
});

const mapDispatchToProps = dispatch => ({
   fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps,mapDispatchToProps) (Main);