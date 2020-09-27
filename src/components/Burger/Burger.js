import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient type={igKey} key={igKey+i}></BurgerIngredient>
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    }, []);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>"Please add ingredients to your burger" </p>
    }
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="burger-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="burger-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger;