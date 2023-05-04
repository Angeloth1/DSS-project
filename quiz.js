document.getElementById("sub").addEventListener("click", function(event) {
    event.preventDefault();
  
    var form = document.getElementById("FormId");
    var radios = form.querySelectorAll("input[type='radio']");
    var answered = true;
  
    for (var i = 0; i < radios.length; i++) {
      var radio = radios[i];
      var radioName = radio.getAttribute("name");
      var radioChecked = form.querySelector("input[name='" + radioName + "']:checked");
  
      if (!radioChecked) {
        answered = false;
        break;
      }
    }
  
    if (answered) {
      var selectedValue = document.querySelector('input[name="A8"]:checked').value;
  
      if (selectedValue === "f") {
        var popup = document.getElementById("popup");
        popup.classList.remove("hidden");
  
        setTimeout(function() {
          popup.classList.add("hidden");
        }, 5000);
      } else {
        document.getElementById("popup").classList.add("hidden");
        form.submit();
      }
    } else {
      alert("Please answer all the questions before submitting.");
    }
  });
  