import React, { Component } from 'react';
import Mox from '../../hoc/mox';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGRIDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component {
    state = {
        ingridients: {
            bacon: 1,
            cheese: 2,
            meat: 1,
            salad: 2
        },
        totalPrice: 4
    }

    addIngedientHandler = type => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        console.log('trexei afou!' + type);
        
        this.setState({ ingridients: updatedIngridients, totalPrice: newPrice });
        console.log(this.state.ingridients.bacon + 'to bacon einia kai to total price einai' + this.state.totalPrice);
    }
    removeIngredientHandler = type => {


    }



    render() {
        return (
            <Mox>
                <Burger ingredients={this.state.ingridients} />
                <BuildControls add={this.addIngedientHandler} />
            </Mox>
        )
    }
}

export default BurgerBuilder;