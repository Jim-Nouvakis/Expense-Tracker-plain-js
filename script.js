let form = document.querySelectorAll("form");
let inputValue1 = document.querySelectorAll(".inputValue");
let inputValue2 = document.querySelectorAll(".inputValue2");
let inputValue3 = document.querySelectorAll(".inputValue3");
let formData = [];
let isbn = document.getElementById("btn").value;






// let LoopTheLoop = () => {
//   for (let i = 0; i < formData.length; i++) {
//     formData[]
//   }
// };

function handleForm(event) {
  event.preventDefault();
  let Name = inputValue1[0].value;
  let Date = inputValue2[0].value;
  let Amount = inputValue3[0].value;

  formData.push({ Name, Date, Amount });
 let ul = document.createElement('ul')
  let element = document.createElement("p")
  
  let clas = document.querySelectorAll(".name-res")
  let clas2 = document.querySelectorAll(".amount-res")
  let clas3 = document.querySelectorAll(".time-res")



let lastItem = formData.length - 1;

  let namee =`Name: ${formData[lastItem].Name}`
  let datee = `Date: ${formData[lastItem].Date}`
  let amountt= `Amount: ${formData[lastItem].Amount}$`

let li = document.createElement("li")
let l2 = document.createElement("li")
let l3 = document.createElement("li")
li.append(`${namee}`)
l2.append(`${datee}`)
l3.append(`${amountt} `)

ul.append(li,l2,l3)
clas[0].append(ul)


}

form[0].addEventListener("submit", handleForm);
