$(function(){
    //requete ajax pour afficher la liste d'ingredient
    let appRecepeForm=$("#addRecepeForm");
    let recepTitle=$("#recepTitle");
    let recepDescription=$("#recepDescription");
    let checkBoxIngredients=$(".checkBoxIngredients");
    let newRecepe={
        "title":"",
        "description":"",
        "ingredients":[]
    }
    //submit form pour les produits
    appRecepeForm.submit((e)=>{
        e.preventDefault();
        if(recepTitle.val()){
           newRecepe.title=recepTitle.val();
        }
         if(recepDescription.val()){
           newRecepe.description=recepDescription.val();
        
        }
        for(ingredient of checkBoxIngredients){
            if(ingredient.checked){
                //console.log($(ingredient).val());
                if($(ingredient).parent().next().val()){
                    let newIngredient={"title":$(ingredient).val(),"content":$(ingredient).parent().val()}
                    //console.log(newIngredient);
                    newRecepe.ingredients.push(newIngredient);
                }
            }
           
        }
       // console.log(newRecepe);
       $.ajax({
           url:'http://localhost:8080/api/recep',
           type:'POST',
           data:newRecepe,
           dataType:"JSON",
           success: (data)=>console.log(data),
           error : (err)=>console.log(err)

       })
        
    })
    
})