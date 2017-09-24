import React, { Component } from 'react';
import './AddEditRecipe.scss';

class AddEditRecipe extends Component {
  divHide(){
  document.getElementById('pop-up').style.display = "none";
  }

 checkEmptySubmit(eve) {
   eve.preventDefault();
   var formData = new FormData(document.getElementById('form'));
const recipeName= formData.get('recipe-name');
const ingredients=formData.get('ingredients'); 
if ( recipeName== "" ||ingredients  == "" ) {
alert("Fill All Form Fields !");
} else {
// document.getElementById('form').submit();
if(this.props.funkType==="edit")
  {

    this.props.editRecipe({recipeName,ingredients},this.props.index);
}
 else
  this.props.storeRecipe({recipeName,ingredients})
}
this.divHide();
}
  render() {
    return (
      <div  id="add-edit-comp">
      <form action="/" id="form" method="post" name="form">
       <div onClick={this.divHide} id="cross"></div>
          <h2>{this.props.title}</h2>
          <hr/>
          <br/>
          <input id="recipe-name" name="recipe-name" type="text"  placeholder="Recipe name" />
          <br/>
          <br/>
          <textarea id="ingedients" name="ingredients" type="text" placeholder="Ingedients" />
          <br/>
          <button  onClick={this.checkEmptySubmit.bind(this)} id="submit">{this.props.title}</button >

      </form>
      </div>
    );
  }

}

export default AddEditRecipe;
