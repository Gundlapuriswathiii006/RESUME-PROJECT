window.addEventListener("load",function(){
    alert("welcome to my resume!");
});
  const skills = document.querySelectorAll(".skill-item");

    skills.forEach(skill => {
      skill.addEventListener("mouseover", function () {
        skill.style.backgroundColor = "lightblue";
        skill.style.fontWeight = "bold";
      });

      skill.addEventListener("mouseout", function () {
        skill.style.backgroundColor = "transparent";
        skill.style.fontWeight = "normal";
      });
    });
    
const link = document.getElementById("linked-in");
      link.addEventListener("mouseover", function () {
        link.style.color = "green";
        link.style.fontWeight = "bold";
      });

      link.addEventListener("mouseout", function () {
        link.style.color = "red";
        link.style.fontWeight = "normal";
      });

    
