import React, { Component } from 'react';
import Mox from '../../hoc/mox';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Ui/Modal/Modal';
import Ordersummary from '../../components/Burger/Ordersummary/Ordersummary';
import axios from '../../axios-orders';
import Spinner from '../../components/Ui/spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler';

const INGRIDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component {
    state = {
        ingridients: null,
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: null
    }

    componentDidMount() {
        axios.get('https://burger-aa253.firebaseio.com/ingridients.json')
            .then(res => {
                console.log(res.data);
                console.log('AKRIVOS PRIN TO DELAY');
                setTimeout(() => {
                    this.setState({ ingridients: res.data });
                    console.log('ta data koumposane kai to state egine!' + this.state.ingridients);
                }, 2000)

            })
            .catch(err => {
                console.log(err)
                this.setState({ error: true })
            })
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
        let newPrice = (oldPrice + priceAddition);
        // console.log('trexei afou!' + type);
        newPrice = parseFloat(newPrice.toFixed(2));

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
        let newPrice = (oldPrice - pricededuction);
        newPrice = parseFloat(newPrice.toFixed(2));
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
        // console.log('order continues !');
        this.setState({ loading: true });
        const order = {
            ingridients: this.state.ingridients,
            price: this.state.totalPrice,
            customer: {
                name: 'tsili kokontzili',
                address: {
                    street: 'olympiados 1-2-3',
                    tk: '54465',
                    country: 'planet chill'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest possible!'
        }
        axios.post('/orders.json', order)
            .then(res => {
                console.log(JSON.parse(res.config.data));
                this.setState({ loading: false, purchasing: false });
                console.log('i paragkelia stalthike epitixos!');
            })
            .catch(err => {
                console.log(err);
                this.setState({ loading: false, purchasing: false });
            });
    }
    orderCancelHandler = () => {
        this.setState({ purchasing: false, loading: false });
    };

    render() {
        const disabledInfo = {
            ...this.state.ingridients
        };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0;
        }




        //initialising order and burger
        let orderSum = <Spinner />;
        let burger = this.state.error ? <p>there was an error </p> : <Spinner />;
        //checking if ingridiens !null
        if (this.state.loading) {
            orderSum = <Spinner />
        }
        if (this.state.ingridients) {
            burger = (
                <Mox>
                    <Burger ingredients={this.state.ingridients} />
                    <BuildControls
                        ordered={this.purchaseHandler}
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice}
                        disabled={disabledInfo}
                        add={this.addIngedientHandler}
                        remove={this.removeIngredientHandler} />
                </Mox>)
            orderSum = (<Ordersummary
                total={this.state.totalPrice}
                order={this.state.ingridients}
                cancelOrder={this.orderCancelHandler}
                continue={this.continueOrder} />);
        }

        return (
            <Mox>
                <Modal
                    cancelOrder={this.orderCancelHandler}
                    modalShow={this.state.purchasing}
                >
                    {orderSum}
                </Modal>
                {burger}
            </Mox>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);