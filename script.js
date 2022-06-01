const numberCount = document.getElementById("number-count");
const click = document.getElementById("clicker");
const reset = document.getElementById("reset");
const buzzImg = document.createElement("img");
buzzImg.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3_BCCAEuuWm08hlMd2e-lEUFqxem49QIRII0nRQsTmhf8Cvkoy5mIEt3acWzHQ7LkM3s&usqp=CAU";
const fizzImg = document.createElement("img");
fizzImg.src =
  "https://media.istockphoto.com/photos/fizz-sparkling-cola-water-refreshing-bubbly-soda-pop-with-ice-cubes-picture-id1206615595?k=20&m=1206615595&s=170667a&w=0&h=_RVuZNE6xEerchWJtV4kfDciBPT6Mae4gi2olaxk-tY=";
let count = 0;

function incrementCount() {
  count++;
  numberCount.textContent = count;
  if (count % 3 === 0 && count % 5 === 0) {
    numberCount.style.color = "orange";
    numberCount.textContent = "Fizzbuzz";
  } else if (count % 3 === 0) {
    addFizzImg();
    numberCount.style.color = "orange";
    numberCount.textContent = "Fizz";
    document.body.removeChild(buzzImg);
  } else if (count % 5 === 0) {
    addBuzzImg();
    numberCount.style.color = "orange";
    numberCount.textContent = "Buzz";
    document.body.removeChild(fizzImg);
  } else {
    numberCount.style.color = "black";
    document.body.removeChild(fizzImg);
    document.body.removeChild(buzzImg);
  }
}

function addFizzImg() {
  document.body.appendChild(fizzImg);
  fizzImg.style.borderRadius = "50px";
  fizzImg.style.height = "90px";
  fizzImg.style.width = "100px";
}

function addBuzzImg() {
  document.body.appendChild(buzzImg);
  buzzImg.style.borderRadius = "50px";
  buzzImg.style.height = "90px";
  buzzImg.style.width = "100px";
}

function removeFizzImg() {
  document.body.removeChild(fizzImg);
}

function removeBuzzImg() {
  document.body.removeChild(buzzImg);
}

function resetCount() {
  count = 0;
  numberCount.textContent = count;
  numberCount.style.color = "black";
  document.body.appendChild(fizzImg);
  document.body.appendChild(buzzImg);
  removeFizzImg();
  removeBuzzImg();
}

click.addEventListener("click", incrementCount);

reset.addEventListener("click", resetCount);
