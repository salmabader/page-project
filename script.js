import questions from "./db.js"
const myForm = document.querySelector("#myForm")
const catogory = document.querySelector("#catogory")
const categoryNo = document.querySelector("#category-number")
const qNum = document.querySelector("#q-num")
const qTotal = document.querySelector("#q-total")
const body = document.body
const cost = document.querySelector("#total_cost")
const points = document.querySelector("#total_points")
let flattenQuestions = questions.flat()
const numOfCategory = questions.length
let catNum = 1
let numOfQuestions = flattenQuestions.length
let id = 1
let questionNumber = 0
let currentQ = 1
let myCost = 0
let myPoints = 0

categoryNo.innerHTML = catNum
qNum.innerHTML = currentQ
qTotal.innerHTML = numOfQuestions

// to change color
body.classList.add(`bg-[${flattenQuestions[questionNumber]['color']}]`)
// get categories
for (let i = 0; i < questions.length; i++) {
    // get questions
    for (let j = 0; j < questions[i].length; j++) {
        const section = document.createElement('section')
        section.setAttribute("id", `section-${id}`)
        section.setAttribute("class", "relative flex flex-col lg:max-w-4xl lg:min-w-4xl max-w-2xl lg:mx-0 mx-10")
        if (id != 1) {
            section.classList.add("hidden")
        }
        if (questions[i][j]['isMultiSelect']) {
            const mark = document.createElement("div")
            mark.setAttribute("class", "absolute -top-2 left-5 bg-[#ad3421] text-white text-sm font-semibold tracking-wider px-3 rounded-full border-2 border-red-900")
            mark.innerHTML = "Multiselection"
            section.appendChild(mark)
        }
        const card = document.createElement("div")
        card.setAttribute("class", "flex flex-col bg-white rounded-xl shadow-md")
        section.appendChild(card)

        const question = document.createElement("div")
        question.setAttribute("class", "px-10 py-5 text-center bg-gray-200 rounded-t-xl")

        question.innerHTML = `${questions[i][j]['question']}`
        card.appendChild(question)


        // get answers
        for (let k = 0; k < questions[i][j]['answers'].length; k++) {
            const div = document.createElement("div")
            if (k + 1 != questions[i][j]['answers'].length) {
                div.setAttribute("class", "border-b border-gray-400")
            }
            card.appendChild(div)
            if (questions[i][j]['isMultiSelect']) {
                const checkbox = document.createElement("input")
                checkbox.setAttribute("type", "checkbox")
                checkbox.setAttribute("name", `section${id}`)
                checkbox.setAttribute("id", `c#${i}-q#${j}-a#${k}`)
                checkbox.setAttribute("class", "hidden peer")
                div.appendChild(checkbox)
            } else {
                const radio = document.createElement("input")
                radio.setAttribute("type", "radio")
                radio.setAttribute("name", `section${id}`)
                radio.setAttribute("id", `c#${i}-q#${j}-a#${k}`)
                radio.setAttribute("class", "hidden peer")
                div.appendChild(radio)
            }

            const outLable = document.createElement("label")
            if (k + 1 != questions[i][j]['answers'].length) {
                outLable.setAttribute("class", "flex justify-between items-center gap-5 p-2 cursor-pointer peer-checked:bg-gray-200 hover:bg-gray-100")
            }
            else {
                outLable.setAttribute("class", "flex justify-between items-center gap-5 p-2 cursor-pointer peer-checked:bg-gray-200 hover:bg-gray-100 hover:rounded-b-xl peer-checked:rounded-b-xl")
            }
            outLable.setAttribute("for", `c#${i}-q#${j}-a#${k}`)
            div.appendChild(outLable)

            const img = document.createElement("div")
            img.setAttribute("class", "click-zoom")
            outLable.appendChild(img)

            const label = document.createElement("label")
            img.appendChild(label)

            const hiddenInput = document.createElement("input")
            hiddenInput.setAttribute("type", "checkbox")
            label.appendChild(hiddenInput)

            const realImg = document.createElement("img")
            realImg.setAttribute("src", `imgs/${questions[i][j]['answers'][k]['img']}`)
            realImg.setAttribute("class", "w-32 h-full rounded-md")
            label.appendChild(realImg)

            const answerText = document.createElement("p")
            answerText.setAttribute("class", "w-3/4")

            answerText.innerHTML = `${questions[i][j]['answers'][k]['text'].charAt(0).toUpperCase()
                + questions[i][j]['answers'][k]['text'].slice(1)}`
            outLable.appendChild(answerText)

            const cost = document.createElement("p")
            cost.setAttribute("class", "w-28 mx-2 text-center text-sm font-medium bg-gray-200 md:px-0 px-2 py-2 rounded-full")
            cost.innerHTML = `${questions[i][j]['answers'][k]['cost']} SR`
            outLable.appendChild(cost)

            const point = document.createElement("p")
            point.setAttribute("class", "hidden")
            point.innerHTML = `${questions[i][j]['answers'][k]['point']}`
            outLable.appendChild(point)
        }
        const buttons = document.createElement("div")
        if (id != numOfQuestions) {
            buttons.setAttribute("class", "flex justify-between mt-6 flex-row-reverse items-center mb-4")
        } else {
            buttons.setAttribute("class", "flex justify-between mt-6 items-center mb-4")
        }
        section.appendChild(buttons)

        if (id != numOfQuestions) {
            const nextBtn = document.createElement("button")
            nextBtn.setAttribute("type", "button")
            nextBtn.setAttribute("id", `next-section-${id}`)
            nextBtn.setAttribute("class", "bg-white py-2 px-2.5 rounded-full flex items-start hover:bg-slate-200 transition-all duration-150")
            nextBtn.innerHTML = `<i id="next-section-${id}" class="fa-solid fa-arrow-right"></i>`
            buttons.appendChild(nextBtn)
        }
        if (id - 1 != 0) {
            const backBtn = document.createElement("button")
            backBtn.setAttribute("type", "button")
            backBtn.setAttribute("id", `back-section-${id}`)
            backBtn.setAttribute("class", "bg-white py-2 px-2.5 rounded-full flex items-start hover:bg-slate-200 transition-all duration-150")
            backBtn.innerHTML = `<i id="back-section-${id}" class="fa-solid fa-arrow-left"></i>`
            buttons.appendChild(backBtn)

        }
        if (id == numOfQuestions) {
            const resultBtn = document.createElement("button")
            resultBtn.setAttribute("type", "submit")
            resultBtn.setAttribute("class", "bg-white px-6 py-1 rounded-full flex items-center gap-1 hover:bg-slate-200 transition-all duration-150")
            resultBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
           Get the result
          `
            buttons.appendChild(resultBtn)
        }

        myForm.appendChild(section)
        id++
    }

}

function showNext(id) {
    const allSections = document.querySelectorAll("section")
    allSections.forEach(section => {
        if (section.id != id) {
            section.classList.add("hidden")
        } else {
            section.classList.remove("hidden")
            questionNumber++
            currentQ++
            if (flattenQuestions[questionNumber]['category'] != flattenQuestions[questionNumber - 1]['category']) {
                catNum++
            }
            updateQuestionNum()
            updateCate()
            changeBg()
            updatePointAndCost()
        }
    });
}

function showBack(id) {
    const allSections = document.querySelectorAll("section")
    allSections.forEach(section => {
        if (section.id == id) {
            section.classList.remove("hidden")
            questionNumber--
            currentQ--
            if (flattenQuestions[questionNumber]['category'] != flattenQuestions[questionNumber + 1]['category']) {
                catNum--
            }
            updateQuestionNum()
            updateCate()
            changeBg()
        } else {
            section.classList.add("hidden")
        }
    });
}
// Listeners
document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', function (s) {
        if (s.target.id.split("-")[0] == 'next') {
            let clickedID = s.target.id.split("-")[2]
            clickedID++
            clickedID = "section-" + clickedID
            showNext(clickedID)
        }
        else if (s.target.id.split("-")[0] == 'back') {
            let clickedID = s.target.id.split("-")[2]
            clickedID--
            clickedID = "section-" + clickedID
            showBack(clickedID)
        }
    })
})

document.querySelectorAll("input[type=radio]").forEach(checked => {
    checked.addEventListener('change', function (s) {
        let id = s.target.id.split("-")
        let c = id[0].split("#")[1]
        let q = id[1].split("#")[1]
        let a = id[2].split("#")[1]
        let selected_cost = questions[c][q]['answers'][a]['cost']
        let selected_point = questions[c][q]['answers'][a]['point']
        myCost += selected_cost
        myPoints += selected_point
    })
})
document.querySelectorAll("input[type=checkbox]").forEach(checked => {
    checked.addEventListener('change', function (s) {
        let id = s.target.id.split("-")
        let c = id[0].split("#")[1]
        let q = id[1].split("#")[1]
        let a = id[2].split("#")[1]
        let selected_cost = questions[c][q]['answers'][a]['cost']
        let selected_point = questions[c][q]['answers'][a]['point']
        myCost += selected_cost
        myPoints += selected_point
    })
})

// functions

function updateQuestionNum() {
    qNum.innerHTML = currentQ
}

function changeBg() {
    body.classList.forEach(item => {
        if (item.startsWith('bg')) {
            body.classList.remove(item);
        }
    })
    body.classList.add(`bg-[${flattenQuestions[questionNumber]['color']}]`)
}

function updateCate() {
    catogory.innerHTML = `${flattenQuestions[questionNumber]['category']}`
    categoryNo.innerHTML = catNum

}

function updatePointAndCost() {
    cost.innerHTML = myCost
    points.innerHTML = myPoints
}