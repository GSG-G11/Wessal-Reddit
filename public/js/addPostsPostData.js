const addPostscontainer=document.querySelector('.addPostscontainer')
const title =document.querySelector('.title')
const content = document.querySelector('.content')

addPostscontainer.addEventListener('submit',(e)=>{
    e.preventDefault()
    
const data = {
    title:title.value,
    content:title.value
}
fetch('/addPost',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
})
.then((res)=>res.json())
.then((err)=>console.log(err))

})
