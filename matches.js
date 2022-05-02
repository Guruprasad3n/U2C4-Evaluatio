// write js code here corresponding to matches.html

var gettingMatch = JSON.parse(localStorage.getItem("schedule"))

        displayData(gettingMatch);
    function filter(){
        var filtr = document.getElementById("filterVenue").value;
        var filterList = vanue.filter(function(elem){
            return elem.place == filtr;
        });
        displayData(filtr)
    }

        function displayData(data){
            data.forEach(function(elem){

                var tr = document.createElement("tr");

                var td1 = document.createElement("td");
                        td1.innerText=elem.number;

                var td2 = document.createElement("td");
                        td2.innerText=elem.teama;

                var td3 = document.createElement("td");
                        td3.innerText=elem.teamb;

                var td4 = document.createElement("td");
                        td4.innerText=elem.date;

                var td5 = document.createElement("td");
                        td5.innerText=elem.place;

                var td6 = document.createElement("td");
                td6.setAttribute("class","styletd6")
                td6.innerText="Favourite";
                td6.addEventListener("click", function(){
                    favourite(elem)
                })

                tr.append(td1, td2, td3, td4, td5, td6)
                document.querySelector("tbody").append(tr)

            });


                    var favdata= JSON.parse(localStorage.getItem("favourites")) || [];
            function favourite(elem){

                favdata.push(elem)

            localStorage.setItem("favourites", JSON.stringify (favdata))
            }
        };

        