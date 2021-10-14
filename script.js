fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>{
    return res.json();
}).then((movies)=>{
    let movieDescriptions = movies.description
    console.log(movies);
    console.log(movies[0].release_date)
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
        movieDescription.textContent = "";

    let year = document.createElement("p")
    let description = document.createElement("p")
    let h3 = document.createElement("h3")
    h3.textContent = e.target.value;
    // year.textContent = movies.release_date;
    // description.textContent = movies.description;


    movieDescription.append(h3);
    movieDescription.append(year)
    movieDescription.append(description)


        //console.log(selectMovie.value);
        //console.log(e.target.value)
        //console.log()
    
    })
    let form = document.querySelector("#movie-review");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let input = document.querySelector("#review-input")
        let strong = document.createElement("strong")
        let list = document.createElement("li");
        list.textContent = e.target["review-input"].value;
        reviews.append(strong)
        strong.append(list)
        input.value = ""
    })

    


}).catch((err)=>{ 
    console.log(err)
});
    

let errorMsg = document.querySelector("#error-msg");
let movieDescription = document.querySelector("#display-info");
let submit = document.querySelector("#submit");
let reviews = document.querySelector("#reviews ul");

// 
//     if (selectedMovie !== defaultValue.value){
//         errorMsg.textContent = "Please select a Movie"
//         console.log(errorMsg)
//     } else {
       
//     }

// })
