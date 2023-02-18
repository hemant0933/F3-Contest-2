// lets create a function get menu

var Myobject = [];

// displaying the food from api
function getMenu() {
    return new Promise((resolve, reject) => {
    fetch('https://free-food-menus-api-production.up.railway.app/burgers')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        Myobject = data;

        let displayMenu = document.getElementById('menu')
        const menuItems = data.map(item => `
          <div id='item'>
            <img src=${item.img} width='70%'>
            <h2>${item.name}</h2>
            <p><strong>Description</strong> : ${item.dsc}</p>
            <p><strong>Price</strong> : ${item.price}$</p>
            <p><strong>Country</strong> : ${item.country}</p>
            <p><strong>Rating</strong> : ${item.rate}⭐</p>
          </div>
        `)
        displayMenu.innerHTML = menuItems;

       resolve(Myobject)
    })
  })
}

//   the random three burger stored in object ->>>>>>>>>>>>>>>>
  
function takeOrder(data){
    // console.log(data);
    let emptyObject = {}
    for(let i=0;i<3;i++){
        let randomIndex = Math.floor(Math.random() * data.length)
        emptyObject[`value${i}`] = data[randomIndex]
    }
    // the three random burger are consoled here ->>>>>>>>>>>>>
    
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        console.log(emptyObject)
        resolve(emptyObject)
       },2500)
    }) 
}

// function 2 order has been place payment is left
function orderPrep(){
    // var status = {'paymentStatus','orderStatus'}
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log({order_status:true, paid:false});
            resolve({order_status:true, paid:false})
        },1500)
    })
}

// function 3 payment 
function payOrder(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log({order_status:true, paid:true});
            resolve(
                 {
                    paid:true,
                    orderStatus:true
                   }
              
            )
        },1000)
    })
}
// function 4 success
function thankYouFunc(){
    return new Promise((resolve, reject) => {
        resolve(alert('thank you'))
    })
}
// fetching the data by calling getMenu function

// promise chaining is going on 
getMenu()
.then((data1) =>
    takeOrder(data1))
.then(() =>
    orderPrep())
.then(() =>
    payOrder())
.then(() =>
    thankYouFunc())
.catch((e)=>
    console.log('error',e)
)
