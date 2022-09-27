let score = 0

function generateQuestion(){
    if (score == 5){
        document.body.style.background = "hotpink"
        document.querySelector('.answers').innerHTML = ""
        document.querySelector('.questions').innerHTML = " Great job :)"
    }else{
        let x = Math.floor(Math.random() * 100)
        let y = Math.floor(Math.random() * 100)
        let qMessage = "What is " + x +  " + " + y
        document.querySelector('.questions').innerHTML = qMessage
        let correctanswer = Math.floor(Math.random() * 4)
        for (let i = 0; i < 4; i++){    
            if (i == correctanswer){
                let answerDiv = document.createElement('div')
                answerDiv.classList.add('answer')
                answerDiv.innerHTML = y + x
                document.querySelector('.answers').appendChild(answerDiv)
                answerDiv.addEventListener('click', () => {
                    document.body.style.background = "darkgreen"
                    setTimeout(() => {
                        document.body.style.background = "purple"  
                        document.querySelector('.answers').innerHTML = ""
                        generateQuestion()                    
                    }, 1000)   
                    score++
                    document.querySelector('.score').innerHTML = "Score: " + score             
                })                
            } else{
                let answerDiv = document.createElement('div')
                answerDiv.classList.add('answer')
                let inx = Math.floor(Math.random() * 100)
                let iny = Math.floor(Math.random() * 100)
                let inanswer = inx + iny
                while(inx + iny === x + y){
                    inx = Math.floor(Math.random() * 100)
                    iny = Math.floor(Math.random() * 100)    
                }
                inanswer = inx + iny
                answerDiv.innerHTML = inanswer;
                document.querySelector('.answers').appendChild(answerDiv)
                answerDiv.addEventListener('click', () => {
                    setTimeout(() => {
                        document.body.style.background = "purple"  
                        document.querySelector('.answers').innerHTML = ""
                        generateQuestion()                    
                    }, 1000)
                    document.querySelector('.answers').innerHTML = "Correct answer: " + (x + y)
                    document.querySelector('.questions').innerHTML = ":("
                })
            }
        }
    }
}

generateQuestion()

// for(let i = 0; i < 5; i++){
//     let a = Math.round(Math.random()*20)
//     let b = Math.round(Math.random()*20)
//     let answer = prompt("what is " + a + " + " + b)
//     let canswer = a + b
//     console.log(answer)
//     if(answer == canswer){
//         score++
//         document.querySelector(".answer").innerHTML = goodMessage
//     }else if(answer != canswer){
//         document.querySelector(".answer").innerHTML = badMessage
//     }
//     document.querySelector(".score").innerHTML = score
// }