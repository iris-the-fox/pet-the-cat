document.addEventListener("DOMContentLoaded",
  function (event) {
  	document.querySelector("button")
      .addEventListener("click", 
      	function(event){
      		document
            .querySelector("#cat")
            .textContent = "Hold Shift to pet the cat";
                  		document
            .querySelector("#cat-img")
            .innerHTML = "<img src='img/Kontur-koshechki_106430.jpg' alt='Погладь кота' id='cat-img'>"
      	}

      	);


    document.querySelector("html")
      .addEventListener("mousemove",
        function (event) {
          if (event.shiftKey === true) {
          	            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          if (event.clientX > 970 && event.clientX < 1150 && event.clientY > 180 && event.clientY < 400) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
            console.log("Dont touch me!")
            document
            .querySelector("#tummy")
            .textContent = "Dont touch me!";
          }
          else if (event.clientX > 1150) {
                       document
            .querySelector("#tummy")
            .innerHTML = "<div class='angry'>Dont touch me! <br> I'll kill you <br> and everyone <br> you love!!!</div>";
          }
          else {
            document
            .querySelector("#tummy")
            .textContent = "Purr! Purr! Purr!";           
          }
        	}

        }
      );

  }
);