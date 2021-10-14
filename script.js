fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>{
    return res.json();
}).then((movies)=>{
    let selectMovie = document.querySelector("#movie-select");
    let movieDescription = document.querySelector("#display-info");
    let reviews = document.querySelector("#reviews ul");

    for(let movie of movies){
        let option = document.createElement("option");

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
            let h3 = document.querySelector("h3").textContent
            let list = document.createElement("li");
            listReview = e.target["review-input"].value;
            list.innerHTML = `<strong> ${h3} :</strong> ${listReview}`
            reviews.append(list)
            input.value = ""
            errorMsg.textContent = ""
            
        }
    })


}).catch((err)=>{ 
    console.log(err)
});
    



