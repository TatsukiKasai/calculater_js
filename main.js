let display  = document.getElementById("display");

function edit(elem){
  if(display.value === "0"){
    display.value = elem.value;
  }else if(display.value === "00"){
    display.value =  elem.value;
  }else{
    display.value = display.value + elem.value;
  }
}


function calc(){
  display.value = new Function("return " + display.value)();
}

function calculation(elem) {
  if(display.value.slice(-1) == "+"){
    const l = display.value.slice(0,-1);
    display.value = l + elem.value;
  }else if(display.value.slice(-1) == "-"){
    const l = display.value.slice(0,-1);
    display.value = l + elem.value;
  }else if(display.value.slice(-1) == "*"){
    const l = display.value.slice(0,-1);
    display.value = l + elem.value;
  }else if(display.value.slice(-1) == "/"){
    const l = display.value.slice(0,-1);
    display.value = l + elem.value;
  }else{
    display.value = display.value + elem.value;
  }
}

function update() {
  display.value = "";
}