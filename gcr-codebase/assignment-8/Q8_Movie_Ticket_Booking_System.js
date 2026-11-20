// Q8. Movie Ticket Booking System (Inheritance + Prototype Chain)

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    console.log("------ MOVIE TICKET ------");
    console.log(`Movie: ${this.movieName}`);
    console.log(`Seat: ${this.seatNo}`);
    console.log(`Ticket price: Rs. ${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const onlineTickets = [
    new OnlineTicket("Interstellar", "A12", 250, 30),
    new OnlineTicket("Inception", "B08", 220, 25)
];

onlineTickets.forEach(ticket => {
    ticket.printTicket(); // Inherited through the prototype chain.
    console.log(`Convenience fee: Rs. ${ticket.convenienceFee}`);
    console.log(`Total amount: Rs. ${ticket.getTotalAmount()}`);
    console.log("--------------------------");
});

console.log(
    "Prototype chain works:",
    MovieTicket.prototype.isPrototypeOf(OnlineTicket.prototype)
);
