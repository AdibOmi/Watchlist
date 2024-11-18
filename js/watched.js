//loading previous data
document.addEventListener('DOMContentLoaded', function(){
    const movieList=document.getElementById('movieList');
    const storedMovies = JSON.parse(localStorage.getItem('movieList')) || [];
  

    storedMovies.forEach(movie=>{
        const listItem=document.createElement('li');
        listItem.textContent=movie;
        movieList.appendChild(listItem);
    });





document.querySelector('#add').addEventListener('click', function(){
    const movieName = document.getElementById('movieInput').value;
    
    if(movieName.trim()!=='')
    {
        const listItem = document.createElement('li');
        listItem.textContent=movieName;
        movieList.appendChild(listItem);

        storedMovies.push(movieName);
        localStorage.setItem('movieList', JSON.stringify(storedMovies));

        // document.getElementById('movieList').appendChild(listItem);

        //clearing input field
        document.getElementById('movieInput').value='';

    }
    else
        alert("Enter a movie or tv show name");
});

    //add a remove button later
});
