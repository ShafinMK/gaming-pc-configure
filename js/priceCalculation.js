
// processor price 
document.getElementById('processor').addEventListener('click', function (event) {

    let processorPrice = 0;
    let processor = event.target.innerHTML;
    if (processor == 'Intel Core I9-12900k') {
        processorPrice = 240;
    }
    else if (processor == 'AMD Ryzen 9 5900X') {
        processorPrice = 260;
    }
    else if (processor == 'AMD Ryzen 5 5600G') {
        processorPrice = 230;
    }
    else {
        processorPrice = 0;
    }
    document.getElementById('processorPrice').innerHTML = processorPrice;
    totalPrice();
})
// ssd price 
document.getElementById('primaryStorage').addEventListener('click', function (event) {

    let primaryStorage = event.target.innerHTML;
    let ssdPrice = 0;
    if (primaryStorage == 'SSD 240GB') {
        ssdPrice = 35;
    }
    else if (primaryStorage == 'SSD 512GB') {
        ssdPrice = 49;
    }
    else if (primaryStorage == 'SSD 1TB') {
        ssdPrice = 110;
    }
    else{
        ssdPrice = 0;
    }
    document.getElementById('ssdPrice').innerHTML = ssdPrice;
    totalPrice();
})
// rams price 
document.getElementById('rams').addEventListener('click', function (event) {

    let ramStorage = event.target.innerHTML;
    let ramPrice = 0;
    if (ramStorage == '16GB') {
        ramPrice = 68;
    }
    else if (ramStorage == '32GB') {
        ramPrice = 133;
    }
    else if (ramStorage == '64GB') {
        ramPrice = 270;
    }
    else{
        ramPrice = 0;
    }
    document.getElementById('ramPrice').innerHTML = ramPrice;
    totalPrice();
})
// gpu charge 
document.getElementById('graphicsCard').addEventListener('click', function (event) {

    let graphicsCard = event.target.innerHTML;
    let gpuPrice = 0;
    if (graphicsCard == 'Nvidia GeForce RTX3090Ti') {
        gpuPrice = 2050;
    }
    else if (graphicsCard == 'Nvidia GeForce RTX3080') {
        gpuPrice = 950;
    }
    
    else{
        gpuPrice = 0;
    }
    document.getElementById('gpuPrice').innerHTML = gpuPrice;
    totalPrice();
})
// delivery charge 
document.getElementById('delivery').addEventListener('click', function (event) {

    let delivery = event.target.innerHTML;
    let deliveryCost = 0;
    if (delivery == 'Urgent Delivery(1 day)') {
        deliveryCost = 20;
    }
    else{
        deliveryCost = 0;
    }
    document.getElementById('deliveryCost').innerHTML = deliveryCost;
    totalPrice();
})

// total price calculation
function totalPrice(){
    let processorPrice = parseInt(document.getElementById('processorPrice').innerHTML);
    let ssdPrice =  parseInt(document.getElementById('ssdPrice').innerHTML);
    let ramPrice =  parseInt(document.getElementById('ramPrice').innerHTML);
    let gpuPrice =  parseInt(document.getElementById('gpuPrice').innerHTML);
    let delivery =  parseInt(document.getElementById('deliveryCost').innerHTML);
    let basicPrice = parseInt(document.getElementById('basicPrice').innerHTML);

    let total = processorPrice + ssdPrice + ramPrice + gpuPrice + delivery+ basicPrice;
    document.getElementById('totalPrice').innerHTML = total;
    document.getElementById('finalPrice').innerHTML = total;
    // console.log(total);
}

//promo code discount
document.getElementById('promoApply').addEventListener('click', function(){

    let promoCode = document.getElementById('promoCode');
    // console.log(promoCode);
    let total = document.getElementById('totalPrice');
    let final = document.getElementById('finalPrice');
    if(promoCode.value == 'Tesla20'){
        
       let previousPrice = parseInt(total.innerHTML);
       let discount = previousPrice*.2;
       let disountedPrice = previousPrice - discount;
       total.innerHTML = disountedPrice;
       final.innerHTML = disountedPrice;
       
       document.getElementById('promoApply').disabled = true;
    }
    else if(promoCode.value == ''){
        alert('No Code Found')
    }
    else{
        alert('Invalid Code')
    }
    promoCode.value = '';

})