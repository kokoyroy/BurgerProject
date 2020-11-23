import React, { Component } from 'react';
import Mox from '../../hoc/mox';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Ui/Modal/Modal';
import Ordersummary from '../../components/Burger/Ordersummary/Ordersummary';


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
        totalPrice: 4,
        purchasable: true,
        purchasing: false
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
        // console.log('trexei afou!' + type);

        this.setState({ ingridients: updatedIngridients, totalPrice: newPrice });
        this.updatePurchase(updatedIngridients);
        // console.log(this.state.ingridients.bacon + 'to bacon einia kai to total price einai' + this.state.totalPrice);
    }
    removeIngredientHandler = type => {

        const oldCount = this.state.ingridients[type];
        if (oldCount === 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngridients = {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;
        const pricededuction = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - pricededuction;
        // console.log('trexei afou!' + type);

        this.setState({ ingridients: updatedIngridients, totalPrice: newPrice });
        this.updatePurchase(updatedIngridients);
        // console.log(this.state.ingridients.bacon + 'to bacon einia kai to total price einai' + this.state.totalPrice);
    }
    updatePurchase = (ingri) => {
        const sum = Object.keys(ingri)
            .map((el) => {
                return ingri[el];
            })
            .reduce((sum, curr) => {
                return sum + curr;
            }, 0);
        // console.log('einai to sum megalytero toy midenos   ' + `gamoto ${sum > 0}`);
        this.setState({ purchasable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    continueOrder = () => {
        console.log('order continues !');
    }
    orderCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    render() {
        const disabledInfo = {
            ...this.state.ingridients
        };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0;
        }


        return (
            <Mox>
                <Modal
                    cancelOrder={this.orderCancelHandler}
                    modalShow={this.state.purchasing}>
                    <Ordersummary
                        total={this.state.totalPrice.toFixed(2)}
                        order={this.state.ingridients}
                        cancelOrder={this.orderCancelHandler}
                        continue={this.continueOrder} />
                </Modal>
                <Burger ingredients={this.state.ingridients} />
                <BuildControls
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice.toFixed(2)}
                    disabled={disabledInfo}
                    add={this.addIngedientHandler}
                    remove={this.removeIngredientHandler} />
            </Mox>
        )
    }
}

export default BurgerBuilder;