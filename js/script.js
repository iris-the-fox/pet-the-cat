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
          if(event.clientX < 600){document
            .querySelector("#tummy")
            .textContent = "Pet me!";   
          }
          else if ( event.clientX < 1070 && event.clientY < 350 ) {
                        document
            .querySelector("#tummy")
            .textContent = "Purr! Purr! Purr!";         

          }
          else if ((event.clientX > 1070 && event.clientX < 1150 && event.clientY < 400) || ( event.clientX < 1070 && event.clientY > 350 && event.clientY < 415) ) {
                        document
            .querySelector("#tummy")
            .textContent = "Dont touch me!";


          }
          else {
                       document
            .querySelector("#tummy")
            .innerHTML = "<div class='angry'>Dont touch me! <br> I'll kill you <br> and everyone <br> you love!!!</div>";        
          }
          }

        }
      );

  })


function myFunction() {
  alert('Cat vomits');
}