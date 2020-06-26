var questions=[{ "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "What does CPU stand for?", "correct_answer": "Central Processing Unit", "incorrect_answers": ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "The programming language &#039;Swift&#039; was created to replace what other programming language?", "correct_answer": "Objective-C", "incorrect_answers": ["C#", "Ruby", "C++"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?", "correct_answer": "Final", "incorrect_answers": ["Static", "Private", "Public"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.", "correct_answer": "Binary", "incorrect_answers": ["JavaScript", "C++", "Python"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "What is the most preferred image format used for logos in the Wikimedia database?", "correct_answer": ".svg", "incorrect_answers": [".png", ".jpeg", ".gif"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "In web design, what does CSS stand for?", "correct_answer": "Cascading Style Sheet", "incorrect_answers": ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "On Twitter, what is the character limit for a Tweet?", "correct_answer": "140", "incorrect_answers": ["120", "160", "100"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?", "correct_answer": "Green", "incorrect_answers": ["Red", "Blue", "Yellow"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "The numbering system with a radix of 16 is more commonly referred to as ", "correct_answer": "Hexidecimal", "incorrect_answers": ["Binary", "Duodecimal", "Octal"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "How long is an IPv6 address?", "correct_answer": "128 bits", "incorrect_answers": ["32 bits", "64 bits", "128 bytes"] }]
var selectedValue=[]
generateQuiz()

function generateQuiz() {

    var questionElement=document.getElementById("questions")
    
    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i])
        var questionList=document.createElement('LI')
        var title=document.createElement('H3')
        title.setAttribute('id','sawal')
        title.innerHTML=questions[i].question
        questionList.appendChild(title)
        questionElement.appendChild(questionList)
        var be=document.createElement("br")

        // All options
        var options=questions[i].incorrect_answers
        options.push(questions[i].correct_answer)

        // creating Radio buttons
        for(j=0;j<4;j++){

            var radio=document.createElement('INPUT')
            radio.setAttribute('type','radio')
            radio.setAttribute('name',i)
            radio.setAttribute('value',options[j])
            radio.setAttribute('onChange','getValue(event)')
            radio.setAttribute('class','jawab')
            radio.value=options[j]
            questionList.appendChild(radio)

            var valueItem=document.createElement('SPAN')
            valueItem.innerHTML=options[j]
            questionList.appendChild(valueItem)

            var breaker=document.createElement('BR')
            questionList.appendChild(breaker)

        }
    

    }

  
    
}

function getValue(e) {

    var rad=document.getElementsByClassName('jawab').checked
    selectedValue.push(e.target.value)
    
    
    
}

var count=0


function submit() {

    for (let c = 0; c < questions.length; c++) {
        var sahiJawab=questions[c].correct_answer
        console.log(sahiJawab)    
        
        if(selectedValue[c]==sahiJawab){

            count=count+1
        }
    
        
    }

// console.log(selectedValue)
console.log(count)
var percentage=count/10*100
console.log(percentage+"%")
Swal.fire("Your Result is "+percentage+"%")

}


function logout() {
    var logoutButton=document.getElementById('logout')
    window.location.href="./login.html"
    
}


