function show(button, target) {
  const box = document.getElementById(button);
  var popup = document.getElementById(target);

  popup.classList.toggle("show");
  
  box.addEventListener('mouseout', function () {
    popup.classList.remove("show");
  });
  
  popup.addEventListener('mouseover', function () {
      popup.classList.add("show");
  });

  popup.addEventListener('mouseout', function () {
      popup.classList.remove("show");
  });
}


function showPopup() {
    const input = document.getElementById("searchInput").value.trim();
    if (input) {
        document.getElementById("popupContent").textContent =  input;
        document.getElementById("popup").style.display = "flex";
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        showPopup();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup()
    }
});