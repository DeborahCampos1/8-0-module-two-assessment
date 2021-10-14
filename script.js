fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>{
    return res.json();
}).then ((data)=>{
    let films = data.films
    console.log(films)
}).catch((err)=>{
    consol.log(err)
});

let selectMovie = document.querySelector("#move-select");
let errorMsg = document.querySelector("#error-msg");
let defaultValue = document.querySelector("#default");
let movieDescription = document.querySelector("#display-info p");
let submit = document.querySelector("#submit");
let reviews = document.querySelector("#reviews ul");

// selectMovie.addEventListener("input", (e)=>{
//     e.preventDefault();

//     let selectedMovie = e.target["#movie-select"].value 
//     console.log(selectedMovie)

//     if (selectedMovie !== defaultValue.value){
//         errorMsg.textContent = "Please select a Movie"
//         console.log(errorMsg)
//     } else {
       
//     }

// })
