import React, { Component } from 'react';
import RecipeIngredientsList from './RecipeIngredientsList';
import './RecipeDetails.scss';

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state ={radioId:'radio'+this.props.index} ;
  }

  render() {
    return (
      <div className="recipe-detailst-container" >
      <a href="#"
      onClick={()=>document.getElementById(this.state.radioId).checked=!document.getElementById(this.state.radioId).checked}>{this.props.recipeName}</a>
      <input className="recipe-radio" id={"radio"+this.props.index} name="show" type="radio"/>
       <div className="ingredients-list"><RecipeIngredientsList  deleteRecipe={this.props.deleteRecipe} updateTypeOfFunk={this.props.updateTypeOfFunk} index={this.props.index} ingredients={this.props.ingredients}  />
       </div>
      </div>
    );
  }

}

export default RecipeDetails;
