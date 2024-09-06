
function img(anything) {
    document.querySelector('.slide').src = anything;
  }
  

  (function () {
    const quantityContainer = document.querySelector(".quantity");
    const minusBtn = quantityContainer.querySelector(".minus");
    const plusBtn = quantityContainer.querySelector(".plus");
    const inputBox = quantityContainer.querySelector(".input-box");
  
    updateButtonStates();
  
    quantityContainer.addEventListener("click", handleButtonClick);
    inputBox.addEventListener("input", handleQuantityChange);
  
    function updateButtonStates() {
      const value = parseInt(inputBox.value);
      minusBtn.disabled = value <= 1;
      plusBtn.disabled = value >= parseInt(inputBox.max);
    }
  
    function handleButtonClick(event) {
      if (event.target.classList.contains("minus")) {
        decreaseValue();
      } else if (event.target.classList.contains("plus")) {
        increaseValue();
      }
    }
  
    function decreaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.max(value - 1, 1);
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function increaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function handleQuantityChange() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : value;
  
      // Execute your code here based on the updated quantity value
      console.log("Quantity changed:", value);
    }
  })();
  
 
var xhr2 = new XMLHttpRequest() 
xhr2.open('get','./html/makeup.json')
xhr2.send()
xhr2.addEventListener("readystatechange",function () {
    if (xhr2.readyState == 4 && xhr2.status == 200) {
        var products =JSON.parse(xhr2.responseText)
        var info = document.getElementsByClassName("container")[0]
        
        for (const product of products) {
            console.log(product);
            info.innerHTML +=`
      <div class="left">
        <div class="main_image">
          <img src="${product.img}"
          class="slide" width="450px" height="450px">
        </div>
        <div class="option flex">
          <img src="${product.images[3]}" onclick="img('${product.images[3]}')">
          <img src="${product.images[2]}" onclick="img('${product.images[2]}')">
          <img src="${product.images[1]}" onclick="img('${product.images[1]}')">
          <img src="${product.images[0]}" onclick="img('${product.images[0]}')">
              
        </div>
      </div>
      
    

                    `
        }
    }
})