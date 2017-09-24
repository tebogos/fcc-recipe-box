import React, { Component } from 'react';
import AddEditRecipe from './AddEditRecipe';
import './RecipeIngredientsList.scss';



const IngredientsItem=({item})=>(
  <li>{item} </li>
)

class RecipeIngredientsList extends Component {
comaToArray(text){
  const arr=text.split(',');
}
handleDelete(){
  this.props.deleteRecipe(this.props.index)
}
handleAddEdit(){
  debugger
  this.props.updateTypeOfFunk("edit",this.props.index,"Edit recipe");
  document.getElementById('pop-up').style.display="block";
}
  render() {
    return (
      <div className="recipe-ingredients-container">
      <ul className="recipe-ingredients">
      <h2>Ingredience</h2>
      <hr/>
        {this.props.ingredients.split(',').map((itm,index)=>
        <IngredientsItem key={index} item={itm} />)}
        <button className="recipe-buttons recipe-delete" onClick={this.handleDelete.bind(this)}>Delete</button> <button className="recipe-buttons recipe-edit"  onClick={this.handleAddEdit.bind(this)}>Edit</button>
        </ul>
      </div>
    );
  }

}

export default RecipeIngredientsList;
