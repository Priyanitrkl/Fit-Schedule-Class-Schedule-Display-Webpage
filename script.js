const classNames = [
    {
        name: "Yoga",
        timing: "9:00 AM - 10:00 AM",
        instructor: 'John Doe' 
      },
      {
        name: "Zumba",
        timing: "11:00 AM - 12:00 PM",
        instructor: 'John Doe' 
      },
      {
        name: "Pilates",
        timing: "2:00 PM - 3:00 PM",
        instructor: 'John Doe' 
      }
  ];

window.addEventListener('DOMContentLoaded', function(){

    const classContainer = this.document.getElementById('class-container');

    for(var i = 0; i<classNames.length; i++){

        var classObject = classNames[i];
        var className = classObject.name;
        var classTiming = classObject.timing;
        var classInstructor = classObject.instructor;

        const classElement = document.createElement("h2");
        classElement.textContent = className;
        classContainer.appendChild(classElement);

        var timingElement = document.createElement("p");
        timingElement.textContent = "Timing: "+ classTiming;
        classContainer.appendChild(timingElement);

         var instructorElement = document.createElement("p");
         instructorElement.textContent = "Instructor: "+ classInstructor;
         classContainer.appendChild(instructorElement);
    };
})

document.addEventListener("DOMContentLoaded", function(){
const classDetailsLinks = document.querySelectorAll(".toggle-button");

classDetailsLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const detailsElement  = link.nextElementSibling;
    if(detailsElement.style.display === "none" ){
      detailsElement.style.display = "block";
      event.textContent = "Hide Details";
    }else{
      detailsElement.style.display = "none";
      event.textContent = "View Details";
    }
  });
})

});
//AIzaSyBs1w4Iv4tkbsGZPQB0qVohdnoo2aSTx9c