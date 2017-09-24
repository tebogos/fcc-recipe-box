import React, { Component } from 'react'
import AddEditRecipe from './AddEditRecipe';
import RecipeList from './RecipeList';
import  './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    if (typeof(Storage) !== "undefined") {
      const jsonObj=localStorage.getItem("recipeObject");
      console.log(jsonObj);
      if(jsonObj!==undefined&&jsonObj!==null)
      {
        const resObj=JSON.parse(jsonObj) ;
      console.log("In condition");
      this.state ={recipe:resObj,funk:{type:"add",index:undefined,title:"Add Recipe"} };
    }
    else{
      this.state ={recipe:[],funk:{type:"add",index:undefined,title:"Add Recipe"} };
    }
} else {
  this.state ={recipe:[],funk:{type:"add",index:undefined,title:"Add Recipe"} };
}

  }

  updateTypeOfFunk(type,index,title){
    this.setState({
      recipe: this.state.recipe,funk:{type,index,title}
    });
  }
handleAddEdit(){
  this.updateTypeOfFunk('add',undefined,"Add Recipe");
  document.getElementById('pop-up').style.display="block";
}
storeRecipe(recipe){
  const updateState=[...this.state.recipe,recipe];
  console.log(updateState);
  localStorage.setItem('recipeObject', JSON.stringify(updateState));
  this.setState({
    recipe: updateState,funk:{type:"add",index:undefined,title:"Add Recipe"}
  });
}


deleteRecipe(index){
  debugger
  const left=this.state.recipe.slice(0,index);
  const right=this.state.recipe.slice(index+1);
  const updateState=[...left,...right];
  console.log(updateState);
  localStorage.setItem('recipeObject', JSON.stringify(updateState));
  this.setState({
    recipe: updateState,funk:{type:"add",index:undefined,title:"Add Recipe"}
  });
}
editRecipe(recipe,index){
  debugger
  const left=[...this.state.recipe.slice(0,index),recipe];
  const right=this.state.recipe.slice(index+1);
  const updateState=[...left,...right];
  console.log(updateState);
  localStorage.setItem('recipeObject', JSON.stringify(updateState));
  this.setState({
    recipe: updateState,funk:{type:"add",index:undefined,title:"Add Recipe"}
  });
}
  render() {
    return (
      <div className="container">

      <div id="pop-up">
        <AddEditRecipe index={this.state.funk.index} editRecipe={this.editRecipe.bind(this)} storeRecipe={this.storeRecipe.bind(this)} resObj={this.state} title={this.state.funk.title} funkType={this.state.funk.type} />
      </div>
      <span className="recipe-heading">Free Code Camp Recipe Project </span>
      <RecipeList deleteRecipe={this.deleteRecipe.bind(this)} updateTypeOfFunk={this.updateTypeOfFunk.bind(this)}  recipe={this.state.recipe} />
      <button onClick={this.handleAddEdit.bind(this)} className="add-edit-recipe-button" >Add Recipe</button>
      </div>
    );
  }

}

export default App;
