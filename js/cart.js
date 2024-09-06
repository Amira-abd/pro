
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
  
      console.log("Quantity changed:", value);
    }
  })();


  // Shopping Cart
// var x =0;
// document.getElementById('items-basket').innerHTML = x;

// function button1() {
//   document.getElementById('items-basket').innerHTML = ++x;
// }

// function button2() {
//   document.getElementById('items-basket').innerHTML = --x;
// }
  
// Delete selected row
function deleteRow(el) {
  
  var tbl = el.parentNode.parentNode.parentNode;
  var row = el.parentNode.parentNode.rowIndex;

  tbl.deleteRow(row);

}


// document.getElementsByTagName("style")[0].innerText="body{visibality:hiddin}"
// var xhr2 = new XMLHttpRequest() 
// xhr2.open('get','makeup.json')
// xhr2.send()
// xhr2.onload=function() {

//     if (xhr2.readyState == 4 && xhr2.status == 200) {
//         var products =JSON.parse(xhr2.responseText)
//         var table = document.getElementsByTagName("table")[0]
//         for (const product of products) {
//             console.log(product);
//             table.innerHTML += `

//          <td class="product-img">
//               <img src="${product.img}" width="80px" height="100px">
//          </td>

//          <td class="product-name">${product.name}</td>


//          <td class="product-price">${product.current_price}</td>

//          <td class="quantity">
//             <button class="minus"  value="increment" onclick="button2()">&minus;</button>
//             <input type="number" class="input-box" value="1" min="1" max="10">
//             <button class="plus" value="decrement"onclick="button1()">&plus;</button>
//          </td>

//          <td class="product-subtotal" id="totalPrice"> &#36;59.00 </td>
//     </tr>     

//             `
//         }
//     }
// };
// xhr2.send();

document.getElementsByTagName("style")[0].innerText="body{visibality:hiddin}"
let res;
let parent=document.getElementsByTagNameNS("table")[0];
let xhr=new XMLHttpRequest();
xhr.open('get','makeup.json');
xhr.onload=function() {
    if (xhr.status === 200) {
        res = xhr.responseText;
        res=JSON.parse(res).products;
        [...res].forEach((val,ind)=>{
 parent.innerHTML+= `

         <td class="product-img">
              <img src="${val.img}" width="80px" height="100px">
         </td>

         <td class="product-name"> ${val.name}</td>


         <td class="product-price">$${val.current_price}</td>

         <td class="quantity">
            <button class="minus"  value="increment" onclick="button2()">&minus;</button>
            <input type="number" class="input-box" value="1" min="1" max="10">
            <button class="plus" value="decrement"onclick="button1()">&plus;</button>
         </td>

         <td class="product-subtotal" id="totalPrice"> &#36;59.00 </td>
    </tr>     

            `
        })
    }
};
xhr2.send();
