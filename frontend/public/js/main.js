const update = document.querySelectorAll('.img__btn-update')
const remove = document.querySelectorAll('.btn-info')

update.forEach((element)=>{
  element.addEventListener('click', updateArticle)
})

remove.forEach((element)=>{
  element.addEventListener('click', deleteArticle)
})

function updateArticle(){
  console.log("yes update")
}

function deleteArticle(){
  //control panel if you want to delete
  let result = confirm("are you sure?")
  if(result === false){
    event.preventDefault();
  }
}


