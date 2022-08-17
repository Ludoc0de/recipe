const update = document.querySelectorAll('.img__btn-update')
const remove = document.querySelectorAll('.img__btn-delete')

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
  //get food title
  const getTitle = this.parentNode.childNodes[1].innerText

  //delete on data base
  fetch('/delete',{
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: getTitle
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(data => {
      window.location.reload()
    })

}

// function updateLikes(){
//   //get bakery name
//   const getName = this.parentNode.childNodes[1].innerText
//   const name = getName.match(/[\w\s]/g).join('')
//   console.log(getName)
//   //get bakery city
//   const getCity = this.parentNode.childNodes[3].innerText
//   const city = getCity.match(/[\w-\s]/g).join('')
//   //get bakery like number
//   const getLike = this.parentNode.childNodes[5].innerText
//   const like = Number(getLike.match(/\d/g).join(''))

//   //update on data base
//   fetch('/updateOneLike',{
//     method: 'put',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       bakeryName: name,
//       bakeryCity: city,
//       bakeryLikes: like
//     })
//   })
//     .then(res => {
//       if (res.ok) return res.json()
//     })
//     .then(response => {
//       window.location.reload(true)
//     })
// }

