let newArray = [];
const bookingSeat = document.getElementById("booking-seat");
const seatCount = document.getElementById('seat-count')
// console.log(bookingSeat.children);
const allSeat = document.getElementsByClassName("busSitName");
const totalSit = document.getElementById('totalSit')
const totalPrice = document.getElementById('total-price')

for (const seat of allSeat) {
  seat.addEventListener("click", function (e) {
    const seatNameLocation = e.target;
    seatNameLocation.setAttribute("disabled", "true");

    const seatName = e.target.innerText;
    const seatNumberDetails = {
      location: seatNameLocation,
      price: 550,
      name: seatName,
      className: "Economoy",
    };
    if (newArray.length < 4) {
      createElement(seatNumberDetails);
      newArray.push(seatNumberDetails);
      totalMoney(newArray)
      seatNameLocation.classList.add("bg-green-500");
    }
    // counting area
    const countUp = convertNumver(seatCount)+1
    seatCount.innerText = countUp;
    const finalSeat = convertNumver(totalSit)-1;
    totalSit.innerText = finalSeat
  });
}

function createElement(obj) {
  const div = document.createElement("div");
  const p1 = document.createElement("p");
  p1.innerText = obj.name;
  const p2 = document.createElement("p");
  p2.innerText = obj.className;

  const p3 = document.createElement("p");
  p3.innerText = obj.price;

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  // console.log(bookingSeat);
  div.classList.add("flex", "justify-between", "p-2");

  bookingSeat.appendChild(div);
}

function convertNumver(id){
  const number  = parseInt(id.innerText)
  return number
}


function totalMoney (ary){
  let sum = 0;
// console.log(ary);
for(const seat of ary){
  console.log(seat.price);
  sum=sum+seat.price
}
totalPrice.innerText = sum
}