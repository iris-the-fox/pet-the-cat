

document.addEventListener("DOMContentLoaded",
  function (event) {
    var petButton = document.querySelector("#pet-button");
    var titleImg = document.querySelector("#title-img");
    var catWellcome = document.querySelector("#cat-wellcome");
    var catImg = document.querySelector("#cat-img");
    var title = document.querySelector("#title");
  	petButton.addEventListener("click", 
      	function(event){
          catWellcome.textContent = "Hold Shift to pet the cat";
          console.log(catImg);
          catImg.innerHTML = "<img src='img/free_stencils_cats-8.png' alt='Погладь кота' id='cat-img'>";
          console.log(catImg.innerHTML);
          title.style.display = 'none';
          petButton.style.display = 'none';
          titleImg.style.display = 'none';   
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