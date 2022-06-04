//   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDyCVcv5OHL8e8LMZycAkMaIgqthvpfQCo",
    authDomain: "quiz-app-768d3.firebaseapp.com",
    projectId: "quiz-app-768d3",
    storageBucket: "quiz-app-768d3.appspot.com",
    messagingSenderId: "250180444192",
    appId: "1:250180444192:web:6258fcedd6d4a5b0d71c45"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);

  var change={
    scoreboard:0,
    id:"Student-Result"
    }

var questionArray = [ 
    {
        ques:"What is 2*15:",
        answer:0,
        options :[
            "30",
            "37",
            "25",
            "20"
        ]
    },
    {
        ques:" Who is current PM of Pakistan",
        answer:0,
        options :[
            "Imran Khan",
            "Shehbaz sharif",
            "Sheikh Rasheed",
            "None"
        ]
    },
    {
        ques:"What is sum of 12 and 14?:",
        answer:1,
        options :[
            "27",
            "26",
            "25",
            "None"
        ]
    },
    {
        ques:"What is 2-2?:",
        answer:0,
        options :[
            "0",
            "1",
            "-0",
            "None"
        ]
    },
    {
        ques: "What is English?:",
        answer: 0,
        options: [
            "language",
            "Computer language",
            "Nation",
            "None"
        ]
    },

    {
        ques: "What is 12*12?:",
        answer: 2,
        options: [
            "225",
            "142",
            "144",
            "None"
        ]
    }
];

// var app = firebase.initializeApp(firebaseConfig);
var count = 0;
    var score =0;



var options = document.getElementsByName('op')
function calc(){
    for(var i = 0; i<options.length; i++){
        if(options[i].checked){
            var ans = options[i].value

            if(i == questionArray[count].answer){
                score++
                console.log(score);
            }
            options[i].checked = false
        }
    }
}


let btn = document.querySelector('button')
btn.addEventListener("click",active)
function active(){
    var change= document.getElementById('submission')
if(count ==questionArray.length){
    change.innerHTML= "submit"
    btn.classList.toggle('is_active')
}
}

function showques(e){
    // for Question
    var question = document.getElementById('sawal');
    question.innerHTML = questionArray[e].ques

    // for options
    var optns = document.querySelectorAll('.para');
    for(var i = 0; i<optns.length; i++){
        optns[i].innerHTML = questionArray[e].options[i]
    }

    console.log(optns.length);
}

function nextQues(){
    var optns = document.getElementsByName('op')
    var btn = document.getElementById('nextBtn')
    var cond = false
    for(var i = 0; i<optns.length;i++){
        if(optns[i].checked == true){
            calc()
             cond = true;
            
        }
    }
        if(cond){
            if(count<questionArray.length-1){
                count++
                showques(count)
            }
            else{
                alert('you have secured '+ score +" marks")
                app.database().ref('/result').child(change.id).update({ score: score })
               
                change.scoreboard=score;
    alert(change.scoreboard)
    alert(change.id)
    window.open("./main.html")
            }
        }
    }


    function getUserData() {
        app.database().ref('/users').on("child_added", function (data) {
          console.log(data)
          console.log(data.key)
          console.log(data.val())
        })
      }
      
      
    //   function deleteData() {
    //     app.database().ref('/').remove()
    //   }
      
      
      app.database().ref('/result').on("child_added",function(data){
        console.log(data.parentNode)
        change.id=data.key;
        console.log(data.key)
        console.log()
      
      })


    function verify(){
        var firstname=document.getElementById('name').value
        var lastname = document.getElementById('e-mail').value
        var age=document.getElementById('mynum').value
        // var fs=document.getElementById('fname')
      
        var obj={
          firstname:firstname,
          lastname:lastname,
          score:0,
          age:age
            
          }
          alert("Your Test is start Now.")
             app.database().ref('/').child(key).push(obj)
        
             window.open("./main.html")
             .then(function(success){
          console.log(success,'success')
             })
             .catch(function(err){
          console.log(err,'err')
             })
        }