import { Fragment } from "react";

import classes from './Header.module.css'
import MealsImage from '../../assets/meals.jpg'
import HeadeCartButton from './HeaderCartButton'

const Header = props =>{
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeadeCartButton onClick = {props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImage} alt='sheeesh'/>
      </div>
    </Fragment>
  )
}

export default Header