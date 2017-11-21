interface booking {
    moviename: string;
}

function bookticket(booking: bookingObj) {
    console.log(bookingObj.moviename);
}

let bookingObj = {price: 20, moviename: "Thor"};
bookticket(bookingObj);