$(document).ready(function(){

    let addIngredientForm=$("#addIngredientForm");
    let newIngredient=$("#newIngredient");

    addIngredientForm.submit(function(e){
        e.preventDefault();
        if(newIngredient.val()){
           //requete ajax
           $.ajax({
               url:'http://localhost:8080/api/ingredients/',
               type:'POST',
               dataType:'JSON',
               data:{title:newIngredient.val()},
               success:(data)=>window.location='http://localhost:8080/ingredients/',
               error: (err)=>console.log(err)
           })
        }
    })



})