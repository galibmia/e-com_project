const buttonSubmit = document.getElementById('submit');
buttonSubmit.addEventListener('click',function (){
    alert("You're successfully subscribe");
  } );
const buttonsBuyNow = document.getElementsByClassName('gs-btn-buy-now');
  for(const buttonBuyNow of buttonsBuyNow){
    buttonBuyNow.addEventListener('click',function (){
        alert("Item added");
      } );
  }


  