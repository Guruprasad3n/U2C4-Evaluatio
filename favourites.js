// write js code here corresponding to favourites.html


var favourData= JSON.parse(localStorage.getItem("favourites"));
// console.log(favourData)


displayFav(favourData);

        function displayFav(dataa){
            dataa.forEach(function(elem, index){

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
                    td6.innerText=" Delete Favourite";
                    td6.setAttribute("class","td6Sty")
                    td6.addEventListener("click", function(){
                        deleteFun(elem,index)
                    })
                tr.append(td1, td2, td3, td4, td5, td6)
                document.querySelector("tbody").append(tr)

            });
        }

        function deleteFun(elem,index){
            favourData.splice(index,1)
            localStorage.setItem("favout",JSON.stringify(favourData));
            // window.location.relode()
            var deletedData = JSON.parse(localStorage.getItem("favout"))
        }