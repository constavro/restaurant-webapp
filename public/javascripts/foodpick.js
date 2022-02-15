const list= document.querySelector('ol');
var totalCost;
var sum=0;
var input = document.getElementsByClassName("food-menu-box");
var myFunction = function() {
    var attribute = this.getElementsByTagName("h4")[0].innerText;
    var cost=this.getElementsByClassName('food-price')[0].innerText;
    newListItem=document.createElement('li');
    newListItem.className="";
    newListItem.innerHTML=attribute;
    list.appendChild(newListItem);
    cost=parseFloat(cost.substring(1)); //cost without dollar
    sum=sum+cost;//Total Cost of order
    document.getElementById('total').innerHTML="Total cost: " + sum + "$";
};

for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('click', myFunction, false);
}

list.addEventListener("dblclick",function(){
    list.removeChild(event.target);
});
