import React from 'react';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';
import styles from './Burger.module.css';
const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((e, i) => { return <BurgerIngridient key={igKey + i} type={igKey} /> })
        }).reduce((prev, curr) => {
            return prev.concat(curr)
        }
            , []);
    // console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
         transformedIngredients = <p>Please select ingredients!</p>;
    }


    return (
        <div className={styles.container}>
            <BurgerIngridient type='bread-top' />
            {transformedIngredients}
            <BurgerIngridient type='bread-bottom' />
        </div>
    )



};


export default burger