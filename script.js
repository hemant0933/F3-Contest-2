

// lets create a function get menu
var Myobject=[];
function getMenu() {
 fetch('https://free-food-menus-api-production.up.railway.app/burgers')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        
        

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
        return Myobject = data
    })
  }
//   console.log(Myobject)
function takeOrder(){
    // console.log(data);
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve({
          
        })
       },2500)
    }) 
}
function orderPrep(){
    // const status = {'paymentStatus','orderStatus'}
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(
             
            )
        },1500)
    })
}
function payOrder(status){
  
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(
                //  {
                //     paid:true,
                //     orderStatus:true
                //    }
              
            )
        },1000)
    })
}
function thankYouFunc(){
    return new Promise((resolve, reject) => {
        resolve(alert('thank you'))
    })
}
// fetching the data by calling getMenu function
getMenu()


// promise chaining
takeOrder()
.then((data2) =>{
    orderPrep(data2);})
.then((data3) =>{
    payOrder(data3);})
.then((data3) =>{
    thankYouFunc(data3);})
.catch((e)=>{
    console.log('error',e)
})



