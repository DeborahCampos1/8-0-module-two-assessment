fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>{
    return res.json();
}).then((movies)=>{
    console.log(movies[0].title);
    console.log(movies[0].description)
    let selectMovie = document.querySelector("#movie-select");

    for(let movie of movies){
        let option = document.createElement("option");
        option.textContent = movie.title;
        option.value = movie.title;
        selectMovie.append(option);
    }
    selectMovie.addEventListener("input", (e)=>{
        e.preventDefault();
    let newP = document.createElement("p")
    let h3 = document.createElement("p")
        console.log(selectMovie.value);
        console.log(e.target.value)
        console.log()
    
    })
    


}).catch((err)=>{ 
    console.log(err)
});

    //     
    
    //     let selectedMovie = e.target["#movie-select"].value 
    //     console.log(selectedMovie)
    


let errorMsg = document.querySelector("#error-msg");
let defaultValue = document.querySelector("#default");
let movieDescription = document.querySelector("#display-info p");
let submit = document.querySelector("#submit");
let reviews = document.querySelector("#reviews ul");

// 
//     if (selectedMovie !== defaultValue.value){
//         errorMsg.textContent = "Please select a Movie"
//         console.log(errorMsg)
//     } else {
       
//     }

// })
