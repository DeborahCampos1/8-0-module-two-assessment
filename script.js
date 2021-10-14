let selectMovie = document.querySelector("#move-select")
let errorMsg = document.querySelector("#error-msg");
let defaultValue = document.querySelector("#default")

fetch()



selectMovie.addEventListener("input", (e)=>{
    e.preventDefault();

    let selectedMovie = e.target["#movie-select"].value 
    console.log(selectedMovie)

    if (selectedMovie !== defaultValue.value){
        errorMsg.textContent = "Please select a Movie"
        console.log(errorMsg)
    } else {
       
    }

})
