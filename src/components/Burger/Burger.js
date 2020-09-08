import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = () => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="burger-top"></BurgerIngredient>
            <BurgerIngredient type="cheese"></BurgerIngredient>
            <BurgerIngredient type="meat"></BurgerIngredient>
            <BurgerIngredient type="burger-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger;