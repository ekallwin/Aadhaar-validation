document.getElementById("aadharForm").addEventListener("submit", function(event){
    event.preventDefault();
    var Aadhaar_number = document.getElementById("Aadhaar_input").value;
    validateAadhar(Aadhaar_number);
  });
  function validateAadhar(Aadhaar_number) {
    var mult = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
          [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
          [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
          [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
    var perm = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
          [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
          [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
  
    var i = Aadhaar_number.length;
    var j = 0;
    var x = 0;
  
    while (i > 0) {
      i -= 1;
      x = mult[x][perm[(j % 8)][parseInt(Aadhaar_number[i])]];
      j += 1;
    }

    var resultElement = document.getElementById("val_disp");
    var loadingElement = document.getElementById("loading");

    loadingElement.style.display = "block";
    resultElement.style.display = "none";

    setTimeout(function() {
        loadingElement.style.display = "none";
        resultElement.style.display = "block";

        if (x === 0) {
            resultElement.innerHTML = "Aadhaar Number is Valid";
            resultElement.style.color = "green";
        } else {
            resultElement.innerHTML = "Invalid Aadhaar Number";
            resultElement.style.color = "red";
        }
    }, 1000); 
}
function clearEntries() {
    document.getElementById("Aadhaar_input").value = "";
    var resultElement = document.getElementById("val_disp");
    resultElement.style.display = "none"; 
    var loadingElement = document.getElementById("loading");
    loadingElement.style.display = "none"; 
}
function checkLength(input) {
  if (input.value.length > 12) {
      input.value = input.value.slice(0, 12);
  }
}