function signup(){

    var emailID=document.getElementById("email").value
    console.log(emailID)



    password=document.getElementById("pass").value
    console.log(password)

    if(password.length<3){

        document.getElementById("passError").innerHTML="Password too short"
        
    }

    else if (password.search(/[0-9]/)==-1) {

        document.getElementById("passError").innerHTML="Password must contain numbers"
        
    }

    else if(password.search(/[a-z]/)==-1){
        document.getElementById("passError").innerHTML="Password must contain lower case letter"
    }

    else if(password.search(/[A-Z]/)==-1){
        
        document.getElementById("passError").innerHTML="Password must contain upper case letter"
        document.getElementById("passError").style.color="Red"
    }

    else if(password.search(/[!\@\$\%\^\&\*\(\)\_\+]/)==-1){

        document.getElementById("passError").innerHTML="Password must contain special character"
    }

    else{

        document.getElementById("passError").innerHTML="Password is Good"
    }

    confirmPassword=document.getElementById("confirmPass").value
    console.log(confirmPassword)
    if (password!=confirmPassword) {

        document.getElementById("para").innerHTML="Password doesn't match"

    }

    gender1=document.getElementById("genderName1").checked
    gender2=document.getElementById("genderName2").checked

    
    var gender
    if (gender1==true){
        gender="Male"
    }
    else if(gender2==true){
        gender="Female"
    }

var userName={

    email:emailID,
    paswd:password,
    confrm:confirmPassword,
    sex:gender

}

var data=JSON.stringify(userName)

if (emailID.length>=3 && emailID.includes('@') && password===confirmPassword){

    localStorage.setItem("userName",data)

    window.location.href="./login.html"
}

else{

    document.getElementById("para").innerHTML="Invalid Password or username"


}

var emailID=document.getElementById("email").value=""
var password=document.getElementById("pass").value=""

}

function login(){

    var userName1=document.getElementById("userName").value
    var passwd=document.getElementById("pass").value
    
    var savedData=localStorage.getItem('userName')
    console.log(savedData)
    savedData1=JSON.parse(savedData)
    console.log(savedData1)
    if(savedData1.email===userName1 && savedData1.paswd===passwd){

        window.location.href="./quiz.html"
    
    }

    else{

        
        var error=document.getElementById("error")       
        error.style.display="Block" 
        var userName1=document.getElementById("userName").value=""
        var passwd=document.getElementById("pass").value=""
        confirmPassword=document.getElementById("confirmPass").value=""
        
        
    }

    

}