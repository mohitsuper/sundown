let leftTitles = document.querySelectorAll(".left-titles")

leftTitles.forEach((element, i) => {



  element.addEventListener("click", function() {

    leftTitles.forEach((el) => el.classList.remove('active'));

    
    element.classList.add('active');
    element.getAttribute("class").style.backgroundColor = "red"
    

  })
});