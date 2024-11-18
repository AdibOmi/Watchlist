function addMovie(title, poster, rating, ownRating){
    const movieList = document.getElementById("movieList");


    //adding a new item in the ul
    const item=document.createElement('li');
    item.classList.add('movie-item');

    //adding movie title
    const movieTitle=document.createElement('h3');
    movieTitle.textContent=title;

    //adding poster
    //api needed if dynamically wanted to add this link
    const moviePoster=document.createElement('img');
    moviePoster.src=posterUrl;
    moviePoster.alt='${title} poster';
    moviePoster.style.width='100px';

    //adding rating
    const imdb = document.createElement('p');
    imdb.textContent='IMDb Rating: ${rating}';

    //adding personal rating
    const personalRating = document.createElement('p');
    personalRating.textContent = 'Personal Rating: ${ownRating}';

    listItem.appendChild(moviePoster);
    listItem.appendChild(movieTitle);
    listItem.appendChild(imdb);
    listItem.appendChild(personalRating);

   
    movieList.appendChild(list);


}