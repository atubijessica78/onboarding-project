(function () {
  const inputs = document.querySelectorAll("#otp-input input");

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    input.addEventListener("input", function (e) {
      if (input.value.length == 1 && i + 1 < inputs.length) {
        inputs[i + 1].focus();
      }
      if (!/^[0-9]$/.test(e.target.value)) {
        e.target.value = "";
      }
      updateInput();
    });

    input.addEventListener("paste", function (e) {
      e.preventDefault();
      const pasteData = e.clipboardData.getData("text").split("");
      pasteData.forEach((char, index) => {
        if (index + i < inputs.length && /^[0-9]$/.test(char)) {
          inputs[index + i].value = char;
        }
        alert("Invalid input");
      });
      inputs[Math.min(i + pasteData.length, inputs.length - 1)].focus();
      updateInput();
    });

    input.addEventListener("keydown", function (e) {
      if (e.keyCode == 8 && input.value == "" && i != 0) {
        for (let pos = i; pos < inputs.length - 1; pos++) {
          inputs[pos].value = inputs[pos + 1].value;
        }
        inputs[i - 1].value = "";
        inputs[i - 1].focus();
        updateInput();
        return;
      }

      if (e.keyCode == 46 && i != inputs.length - 1) {
        for (let pos = i; pos < inputs.length - 1; pos++) {
          inputs[pos].value = inputs[pos + 1].value;
        }
        inputs[inputs.length - 1].value = "";
        input.select();
        e.preventDefault();
        updateInput();
        return;
      }

      if (e.keyCode == 37) {
        if (i > 0) {
          e.preventDefault();
          inputs[i - 1].focus();
          inputs[i - 1].select();
        }
        return;
      }

      if (e.keyCode == 39) {
        if (i + 1 < inputs.length) {
          e.preventDefault();
          inputs[i + 1].focus();
          inputs[i + 1].select();
        }
        return;
      }
    });
  }

  function updateInput() {
    let inputValue = Array.from(inputs).reduce(function (otp, input) {
      otp += input.value.length ? input.value : " ";
      return otp;
    }, "");
    document.querySelector("input[name=otp]").value = inputValue;
  }
})();
