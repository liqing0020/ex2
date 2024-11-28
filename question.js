const questions = [  
    {  
        question: "马首铜像于哪一年回归？",  
        options: ["2010年", "2019年", "2022年", "2017年"],  
        answer: 1 // 2019年是正确答案  
    }   
];  

let currentQuestionIndex = 0;  

function loadQuestion() {  
    const questionContainer = document.getElementById("question");  
    const optionsContainer = document.getElementById("options");  
    
    const currentQuestion = questions[currentQuestionIndex];  
    
    questionContainer.innerText = currentQuestion.question;  
    optionsContainer.innerHTML = "";  
    
    currentQuestion.options.forEach((option, index) => {  
        const optionElement = document.createElement("div");  
        optionElement.classList.add("option");  
        optionElement.innerHTML = `<input type="radio" name="option" value="${index}"> ${option}`;  
        optionsContainer.appendChild(optionElement);  
    });  
}  

function submitAnswer() {  
    const selectedOption = document.querySelector('input[name="option"]:checked');  
    const resultContainer = document.getElementById("result");  
    
    if (selectedOption) {  
        const selectedAnswerIndex = parseInt(selectedOption.value);  
        const correctAnswerIndex = questions[currentQuestionIndex].answer;  
        
        if (selectedAnswerIndex === correctAnswerIndex) {  
            resultContainer.innerText = "回答正确！";  
        } else {  
            resultContainer.innerText = "回答错误！";  
        }  
    } else {  
        resultContainer.innerText = "请先选择一个答案。";  
    }  
}  

// 初始化加载第一个问题  
loadQuestion();