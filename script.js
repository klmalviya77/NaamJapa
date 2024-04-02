var currentDivIndex = 0;
  var clickCount = 0;
  var colors = [""]; // Add more colors as needed

  function showNextDiv() {
    if (currentDivIndex < 108) {
      var container = document.querySelector('.container');
      var images = container.querySelectorAll('img');
      if (currentDivIndex > 0) {
        images[currentDivIndex - 1].style.display = "none";
      }
      images[currentDivIndex].style.display = "block";
      images[currentDivIndex].style.backgroundColor = colors[clickCount % colors.length];
      images[currentDivIndex].style.transform = "rotate(" + (clickCount * 3.33) + "deg)";
      clickCount++;
      document.getElementById('counter').innerText = "Japa Counter: " + clickCount;
      currentDivIndex++;
      if (clickCount >= 108) {
        document.getElementById('counter').innerText = "108 जाप पूरे हुए";
      }
    }
  }

  function reset() {
    var container = document.querySelector('.container');
    var images = container.querySelectorAll('img');
    images.forEach(function(img) {
      img.style.display = "none";
    });
    clickCount = 0;
    currentDivIndex = 0;
    document.getElementById('counter').innerText = "Japa Counter: 0";
    document.getElementById('div108').classList.add('hide');
  }

  // Dynamically add 108 images with "mala.png"
  var container = document.querySelector('.container');
  for (let i = 0; i < 108; i++) {
    var img = document.createElement('img');
    img.src = "mala.png";
    container.appendChild(img);
    img.style.display = "none";
  }

  // Initially show Ram div
  var ramDiv = document.getElementById('ram');
  ramDiv.style.display = "block";
  
  
    if (performance.navigation.type === 1) {
        window.location.href = "index.html";
    }
    
        /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}