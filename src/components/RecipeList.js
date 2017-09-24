import React, { Component } from 'react';
import RecipeItem from './RecipeItem';
import './RecipeList.scss';





class RecipeList extends Component {

  render() {
    return (
      <div>
      <ul className="recipe-list-ul">
         {this.props.recipe.map((itm,index)=><RecipeItem deleteRecipe={this.props.deleteRecipe}
         updateTypeOfFunk={this.props.updateTypeOfFunk} key={index} index={index} item={itm} />)}
       </ul>
      </div>
    );
  }

}

export default RecipeList;
