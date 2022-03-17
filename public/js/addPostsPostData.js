const addPostscontainer=document.querySelector('.addPostscontainer')
const title =document.querySelector('.title')
const content = document.querySelector('.content')
const userId = document.querySelector('.userId')

addPostscontainer.addEventListener('submit',(e)=>{
    e.preventDefault()

const data = {
    userId:userId.value,
    title:title.value,
    content:content.value
}
console.log(data);

fetch('/addPosts',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
})
.then((res)=>res.json())
.then((err)=>console.log(err))

})
