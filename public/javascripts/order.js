// Javascript code for choosing order mode (delivery,takeaway,reservation)
addEvent(window, 'load', addListeners, false);
function optcheck(e) {
    if (window.event) {
      var thing = window.event.srcElement;
    } else {
      var thing = e.target;
    }
    if(thing.value==="3"){
        document.getElementById("enterid").style.display="block";
        document.getElementById("takeaway").style.display="none";
        document.getElementById("delivery").style.display="none";
    }
    if(thing.value==="2"){
        document.getElementById("enterid").style.display="none";
        document.getElementById("takeaway").style.display="block";
        document.getElementById("delivery").style.display="none";
    }
    if(thing.value==="1"){
        document.getElementById("enterid").style.display="none";
        document.getElementById("takeaway").style.display="none";
        document.getElementById("delivery").style.display="block";
    }
}
function addListeners(e) {
  addEvent(document.getElementById('one'), 'click', optcheck, false);
  addEvent(document.getElementById('two'), 'click', optcheck, false);
  addEvent(document.getElementById('three'), 'click', optcheck, false);
  }
function addEvent(elm, evType, fn, useCapture){
  if (elm.addEventListener) {
    elm.addEventListener(evType, fn, useCapture);
    return true;
  } else if (elm.attachEvent) {
    var r = elm.attachEvent('on' + evType, fn);
    return r;
  } else {
    elm['on' + evType] = fn;
  }
}