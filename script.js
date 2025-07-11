let numPeople = 0;
let expenses = [];
let people = [];

function generatePersonFields() {
    numPeople = document.getElementById("num-people").value;

    if (numPeople < 1) {
        alert("Please enter a valid number of people.");
        return;
    }

    document.getElementById("num-people-section").style.display = "none";
    document.getElementById("person-expenses-section").style.display = "block";

    let personInputs = document.getElementById("person-inputs");
    personInputs.innerHTML = '';

    for (let i = 0; i < numPeople; i++) {
        let personDiv = document.createElement("div");
        let nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = `Person ${i + 1} Name`;

        let expenseInput = document.createElement("input");
        expenseInput.type = "number";
        expenseInput.placeholder = `Expense for ${i + 1}`;

        personDiv.appendChild(nameInput);
        personDiv.appendChild(expenseInput);
        personInputs.appendChild(personDiv);
    }
    document.getElementById("generate-btn").style.display = "block";
}

function showTooltip(element, message) {
    let tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = message;
    document.body.appendChild(tooltip);
    
    element.onmousemove = function (e) {
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
    };

    element.onmouseleave = function () {
        tooltip.remove();
    };
}

function submitFeedback() {
    let rating = document.getElementById("rating").value;
    let feedback = document.getElementById("feedback").value;

    let mailto = `mailto:fidafathimashine067@gmail.com?subject=User Feedback&body=Rating: ${rating}%0D%0AFeedback: ${feedback}`;
    window.location.href = mailto;

    document.getElementById("feedback-popup").style.display = "none";
}