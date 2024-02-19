let newArray = [];
const bookingSeat = document.getElementById('booking-seat');
console.log(bookingSeat.children);
const allSeat = document.getElementsByClassName("busSitName"); 

for (const seat of allSeat) {
  seat.addEventListener("click", function (e) {
    const seatNameLocation = e.target;
    const seatName = e.target.innerText;
    const seatNumberDetails = {
      location: seatNameLocation,
      price: 550,
      name: seatName,
      className: "Economoy",
    };
    if (newArray.length <4) {
  createElement(seatNumberDetails)
  newArray.push(seatNumberDetails)
  seatNameLocation.classList.add('bg-green-500')
  
}
console.log(newArray);
  });
}

function createElement(obj){
  const div = document.createElement('div')
const p1 =document.createElement("p")
p1.innerText =obj.name;
const p2 =document.createElement("p")
p2.innerText =obj.className;

const p3 =document.createElement("p")
p3.innerText =obj.price;

div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)
// console.log(bookingSeat);

 bookingSeat.appendChild(div)
}