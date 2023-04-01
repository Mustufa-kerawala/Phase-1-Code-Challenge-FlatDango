// Your code here
// Redering a list of films when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
   const ul = document.querySelector('#films');
    getData().then(data => {
        data.forEach(film => {
        const li = document.createElement('li');
        li.className = 'film-item';
        li.innerHTML = film.title;
        ul.appendChild(li);
        });

        // Adding a click event listener on each li element
        const movies = document.querySelectorAll('.film-item');
        console.log(movies);
        movies.forEach(movie => {
            movie.addEventListener('click', () => {
                const movieImage = document.querySelector('#poster');
                const movieTitle = document.querySelector('#title');
                const movieDescription = document.querySelector('#film-info');
                const showTime = document.querySelector('#showtime');
                const ticketNumber = document.querySelector('#ticket-num');
                const runtime = document.querySelector('#runtime');
                // Getting data from the API then looping through the data to find the movie that was clicked
                getData().then(data => {
                    data.forEach(film => {
                        if (film.title === movie.innerHTML) {
                            movieImage.src = film.poster;
                            movieTitle.innerHTML = film.title;
                            runtime.innerHTML = film.runtime;
                            movieDescription.innerHTML = film.description;
                            showTime.innerHTML = film.showtime;
                            ticketNumber.innerHTML = film.capacity - film.tickets_sold 

                        }
                    })
                })
                // Adding a click event listener to the decrement button
                const decrementButton = document.querySelector('#buy-ticket');
                decrementButton.addEventListener('click', decrement)
            });
        })


    });
    // Removing Movie Titles :: Before element
    const deleteBefore = document.querySelector('.film.item');
    deleteBefore.innerHTML = '';
    deleteBefore.innerHTML = 'Movie List to be clicked';

    
});



// Writing a function to get data from the API
function getData() {
  return fetch(' http://localhost:3000/films')
    .then(response => response.json())
    .then(data => data);
}


console.log(getData());

// Writing a function which onclick will decrement the number of tickets available
function decrement() {
    const ticketNumberStirng = document.querySelector('#ticket-num');
    let ticketNumber = parseInt(ticketNumberStirng.innerHTML, 10);
    if (ticketNumber > 0) {
        ticketNumber--;
        ticketNumberStirng.innerHTML = ticketNumber.toString();
    }
}

