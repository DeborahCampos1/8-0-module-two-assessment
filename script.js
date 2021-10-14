fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>{
    return res.json();
}).then((movies)=>{
    let movieDescriptions = movies.description
    // console.log(movies);
    // console.log(movies[0].release_date)
    // console.log(movies[0].description)
    let selectMovie = document.querySelector("#movie-select");

    for(let movie of movies){
        let option = document.createElement("option");
        // let year = movie.release_date
        // let description = movie.description
        option.textContent = movie.title;
        option.value = movie.title;
        selectMovie.append(option);
        
    }
    selectMovie.addEventListener("input", (e)=>{
        e.preventDefault();
        movieDescription.textContent = "";
        let released = movies.filter((movie)=>{
            return movie.title === e.target.value
        })
        console.log(released)
    let year = document.createElement("p")
    let description = document.createElement("p")
    let h3 = document.createElement("h3")
    h3.textContent = e.target.value;
    year.textContent = released[0].release_date;
    description.textContent = released[0].description;


    movieDescription.append(h3);
    movieDescription.append(year)
    movieDescription.append(description)
    
    })
    let input = document.querySelector("#review-input")
    let errorMsg = document.querySelector("#error-msg");
    let form = document.querySelector("#movie-review");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        if (!input.value){
            errorMsg.textContent = "Please enter a review"

        } else {
            
            let strong = document.createElement("strong")
            let list = document.createElement("li");
            list.textContent = e.target["review-input"].value;
            reviews.append(strong)
            strong.append(list)
            input.value = ""
            errorMsg.textContent = ""
            
        }
    })

    


}).catch((err)=>{ 
    console.log(err)
});
    

let movieDescription = document.querySelector("#display-info");
let submit = document.querySelector("#submit");
let reviews = document.querySelector("#reviews ul");


