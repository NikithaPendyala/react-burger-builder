import React, {Fragment, useState} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const BurgerBuilder = () => {
    let [Ingredients, setIngredients] = useState({ meat:0,cheese:0,salad:0,bacon:0});
    return (
        <Fragment>
            <Burger ingredients={Ingredients}></Burger>
            <BuildControls></BuildControls>
        </Fragment>
    )
};

export default BurgerBuilder;