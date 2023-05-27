let user= JSON.parse(localStorage.getItem("currentUser"))||null
let  techResult,englishResult
let English_result=document.getElementById("English_result")
let Math_result=document.getElementById("Math_result")
let personal_info=document.getElementById("personal_info")
if(user){
    if(user.techFlag){
        techResult =user.techScore
        Math_result.innerHTML=`= `+techResult+` out of 10`
    }
    if(user.englishFlag){
        englishResult=user.englishScore
        English_result.innerHTML=`= `+englishResult+ ` out of 10`
    }
    personal_info.innerHTML=`<br> ${user.email} <br> ${user.userInfo} <br> ${user.phone} <br> ${user.userName}`

}
