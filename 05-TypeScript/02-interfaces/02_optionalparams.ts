interface booking {
    moviename?: string;
    price?: number;
}

function bookticket(booking: bookingObj) : {moviename: string, price: string} {
    let newBooking = {moviename: "Thor", price: 10};
    if (bookingObj.moviename) {
        newBooking.moviename = bookingObj.moviename;
    }
    if (bookingObj.price) {
        newBooking.price = newBooking.price + 2; // Service tax
    }
    return newBooking;
}

let newBooking = bookticket({moviename: "Avengers"});