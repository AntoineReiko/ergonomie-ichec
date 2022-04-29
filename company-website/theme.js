window.addEventListener("load", function () {
    document.getElementById("colorSelector").value = "#e21c20";
  });
  
  function onChangeColor() {
    let color = document.getElementById("colorSelector").value;
    console.log(color);
    document.documentElement.style.setProperty("--color-vdb", color);
  }
  
// window.addEventListener("load",function {
//     document.querySelector(`.backblur`);
// });

  function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.querySelector(`.backblur`).style.display = "none";
  }



//   --color-vdb: #e21c20;
//   --color-fnac:#e09900; 