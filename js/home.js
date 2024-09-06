// let categories = {
//     categories: [
//         'Makeup',
//         'Skin Care',
//         'Hair Care'
//     ]
// }
// console.log(JSON.stringify(categories));
// let makeup = {
//     products: [
//         {
//             product1: {
//                 name: "first product",
//                 origin_price: Math.floor(Math.random() * 100),
//                 current_price:this.origin_price>40?this.origin_price-20:this.origin_price>10?this.origin_price-5:this.origin_price,
//                 img: "./images/logo-001.png"
//             }
//         },
//         {
//             product2: {
//                 name: "second product",
//                 origin_price:  Math.floor(Math.random() * 100),
//                 current_price:this.origin_price>40?this.origin_price-20:this.origin_price>10?this.origin_price-5:this.origin_price,
//                 img: "./images/logo-002.png"
//             }
//         },
//         {
//             product3: {
//                 name: "third product",
//                 origin_price:  Math.floor(Math.random() * 100),
//                 current_price:this.origin_price>40?this.origin_price-20:this.origin_price>10?this.origin_price-5:this.origin_price,
//                 img: "./images/logo-003.png"
//             }
//         },
//         {
//             product4: {
//                 name: "fourth product",
//                 origin_price:Math.floor(Math.random() * 100),
//                 current_price:this.origin_price>40?this.origin_price-20:this.origin_price>10?this.origin_price-5:this.origin_price,
//                 img: "./images/logo-004.png"
//             }
//         },
//         {
//             product5: {
//                 name: "fifth product",
//                 origin_price:  Math.floor(Math.random() * 100),
//                 current_price:this.origin_price>40?this.origin_price-20:this.origin_price>10?this.origin_price-5:this.origin_price,
//                 img: "./images/logo-005.png"
//             }
//         }
//     ]
// }
// console.log(JSON.stringify(makeup));


// console.log(document.location);
document.getElementsByTagName("style")[0].innerText="body{visibality:hiddin}"
let res;
let parent=document.getElementsByClassName("cards")[0];
let xhr=new XMLHttpRequest();
xhr.open('get','makeup.json');
xhr.onload=function() {
    if (xhr.status === 200) {
        res = xhr.responseText;
        res=JSON.parse(res).products;
        [...res].forEach((val,ind)=>{
 parent.innerHTML+=`
        <div class="card">
                    <span class="card-img" >
                        <img src="${val.img}" alt="" width="300px">
                    </span>
                    <div class="product-name">
                        ${val.name}
                    </div>
                    <span class="original-price">
                        $${val.origin_price}
                    </span>
                    <span class="current-price">
                        $${val.current_price}
                    </span>
                </div>`
        })
        // console.log(res);
        }
    };
xhr.send();


// console.log(res);
