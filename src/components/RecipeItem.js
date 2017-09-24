
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';

class RecipeItem extends Component {

  render() {
    return (
      <li className="recipe-item"><RecipeDetails deleteRecipe={this.props.deleteRecipe} updateTypeOfFunk={this.props.updateTypeOfFunk} index={this.props.index} recipeName={this.props.item.recipeName} ingredients={this.props.item.ingredients}/> </li>
    );
  }

}

export default RecipeItem;
