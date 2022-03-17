const username = document.querySelector('.username')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirmPassword') 
const signUp = document.querySelector('.signUpContainer')

signUp.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data = {username:username.value,password:password.value,confirmPassword:confirmPassword.value}
    fetch('/signUp',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((obj=>{
        if(obj.redirect){
            location.href = obj.redirect
        }
    }))
    .catch((err)=>console.log(err))

})



