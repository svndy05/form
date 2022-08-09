window.addEventListener("load", (event) => {
  const selectBtn = document.querySelector("#select-btn-1");
  option = document.querySelector("#option");
  listItem = document.querySelectorAll(".list-item");
  selectBtnBis = document.querySelector("#select-btn-2");
  optionBis = document.querySelector("#option-2");
  listItemBis = document.querySelectorAll(".list-item-2");
  listCheckbox = document.querySelectorAll(".checkbox");
  renseignement = document.querySelectorAll(".renseignement");
  listCheckbox.forEach((element) => {
    element.addEventListener("click", () => {
      listCheckbox[3].checked = true;
      listCheckbox.forEach((checkbox) => {
        if (checkbox.checked && checkbox !== element) {
          checkbox.checked = false;
        }
      });
    });
    });
  selectBtn.addEventListener("click", () => {
    option.classList.remove("hidden");
  });

  selectBtnBis.addEventListener("click", () => {
    optionBis.classList.remove("hidden");
  });

  listItem.forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector("#type-habitat").innerText = element.innerText;
      option.classList.toggle("hidden");
    });
  });

  listItemBis.forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector("#regime-juridique").innerText = element.innerText;
      optionBis.classList.toggle("hidden");
    });
  });
  renseignement.forEach((element) =>{
    element.addEventListener("click",()=>{
      if(element.classList.contains('bg-white')){
      element.classList.toggle('bg-blue');
      element.classList.remove('bg-white');
      element.classList.toggle('fill-white');
      element.classList.remove('fill-blue');
    }
    else{
      element.classList.toggle('bg-white');
      element.classList.remove('bg-blue');
      element.classList.toggle('fill-blue');
      element.classList.remove('fill-white');
    }
    })
  })
});
