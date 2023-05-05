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
    var selectedA8Value = document.querySelector('input[name="A8"]:checked').value;
    var selectedA9Value = document.querySelector('input[name="A9"]:checked').value;
    var selectedA6Value = document.querySelector('input[name="A6"]:checked').value;
    var selectedA14Value = document.querySelector('input[name="A14"]:checked').value;
    var selectedA13Value = document.querySelector('input[name="A13"]:checked').value;

    if (selectedA8Value === "f") {
      var popup = document.getElementById("popup");
      popup.innerHTML = "Sorry, we cannot approve you.";
      popup.classList.remove("hidden");

      setTimeout(function() {
        popup.classList.add("hidden");
      }, 5000);
    } else if (selectedA9Value === "t") {
      var popup = document.getElementById("popup");
      popup.innerHTML = "Credit approved.";
      popup.classList.remove("hidden");

      setTimeout(function() {
        popup.classList.add("hidden");
      }, 5000);
    } else if (
      selectedA6Value === "h" ||
      selectedA6Value === "z" ||
      selectedA6Value === "o" ||
      selectedA6Value === "dd" ||
      selectedA6Value === "n"
    ) {
      var popup = document.getElementById("popup");
      popup.innerHTML = "Credit approved.";
      popup.classList.remove("hidden");

      setTimeout(function() {
        popup.classList.add("hidden");
      }, 5000);
    } else if (selectedA6Value === "ff" || selectedA6Value === "j") {
      var popup = document.getElementById("popup");
      popup.innerHTML = "Sorry, we cannot approve you.";
      popup.classList.remove("hidden");

      setTimeout(function() {
        popup.classList.add("hidden");
      }, 5000);
    } else if (selectedA6Value === "v") {
      if (selectedA14Value === "more") {
        var popup = document.getElementById("popup");
        popup.innerHTML = "Credit approved.";
        popup.classList.remove("hidden");

        setTimeout(function() {
          popup.classList.add("hidden");
        }, 5000);
      } else if (selectedA14Value === "l=375") {
        var popup = document.getElementById("popup");
        popup.innerHTML = "Sorry, we cannot approve you.";
        popup.classList.remove("hidden");

        setTimeout(function() {
          popup.classList.add("hidden");
        }, 5000);
      }
    } else if (selectedA6Value === "bb") {
      if (selectedA13Value === "more") {
        var popup = document.getElementById("popup");
        popup.innerHTML = "Credit approved.";
        popup.classList.remove("hidden");

        setTimeout(function() {
          popup.classList.add("hidden");
        }, 5000);
      } else if (selectedA13Value === "l=80") {
        var popup = document.getElementById("popup");
        popup.innerHTML = "Sorry, we cannot approve you.";
        popup.classList.remove("hidden");
        setTimeout(function() {
          popup.classList.add("hidden");
        }, 5000);
      }
    } else {
      document.getElementById("popup").classList.add("hidden");
      form.submit();
    }} else {
      alert("Please answer all the questions before submitting.");
      }
      });      