// write js code here corresponding to index.html
// You should add submit event on the form









document.querySelector("#masaiForm").addEventListener("submit", matchFun);
var myMatch= JSON.parse(localStorage.getItem("schedule")) || [];
function matchFun(){
    event.preventDefault()

    var matchObj ={
        number : masaiForm.matchNum.value,
        teama : masaiForm.teamA.value,
        teamb : masaiForm.teamB.value,
        date : masaiForm.date.value,
        place : masaiForm.venue.value,
    }

    myMatch.push(matchObj)
    // console.log(myMatch)

    localStorage.setItem("schedule", JSON.stringify(myMatch))
}