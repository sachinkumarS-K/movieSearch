const api_key = "bf6ba909" ;
let query = ""
const url =  `http://www.omdbapi.com/?apikey=${api_key}&s=${query}`

const inputBox = document.
querySelector("#inpBox") ;

const movieCont = document.querySelector(".movieCont")

async function fetchMovie (){
    if(!inputBox.value){
        return alert("Enter a movie name");
    }
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${api_key}&s=${query}`);
        const data = await response.json();
       
        renderMovies(data.Search)
    } catch (error) {
        alert("Movie  not found..")
    }
}

function renderMovies(data){
    movieCont.innerHTML = ``
    console.log(data)
    data.map((movie) => {
        const div = document.createElement("div");
        div.className = "movieCard"
        const img = document.createElement("img");
        img.className = "movieImg"
        const title = document.createElement("p");
        title.className = "movieTitle"
        const btn = document.createElement("button");
        btn.className = "movieBtn"
        const div1 = document.createElement('div');
        div1.className = "imageCont"

        img.src = movie.Poster ;
        title.textContent = movie.Title ;
        img.alt = "image can't be loaded"
        btn.innerText = "Watch Movie" ;
        div1.appendChild(img);
        div.appendChild(div1)
        div.appendChild(title);
        div.appendChild(btn);
        movieCont.appendChild(div)
    })
}
const imgBtn = document.querySelector(".logo");

inputBox.addEventListener("change" , ()=>{
    query = inputBox.value ;
    fetchMovie();
})

imgBtn.addEventListener("click" , ()=>{
    query = inputBox.value ;
    fetchMovie();
})