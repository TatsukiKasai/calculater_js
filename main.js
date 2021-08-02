

function get_calc(btn) {
      if(btn.value == "=") {
        document.calculater.display.value = eval(document.calculater.display.value);
      } else if (btn.value == "AC") {
        document.calculater.display.value = "";
      } else{
        document.calculater.display.value += btn.value;

      }
    }
     
