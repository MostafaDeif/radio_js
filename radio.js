var radios = document.getElementsByName('genderS');

for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        alert(radios[i].value);

    // only one radio can be logically checked, don't check the rest
        break;
  }
}

