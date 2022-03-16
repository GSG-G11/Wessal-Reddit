const signInContainer=document.querySelector('.signInContainer')
const username=document.querySelector('.username')
const password=document.querySelector('.password')


signInContainer.addEventListener('submit',(e)=>{
  e.preventDefault()
const data= {
    username:username.value,
    password:password.value
}
console.log(data)

    fetch('/signIn',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
})
