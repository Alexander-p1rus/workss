const tabParent = document.querySelector(".tabs_wrapper");
const tabContent = document.querySelectorAll(".content");
const tabs = document.querySelectorAll(".tabs");
 console.log(tabs.length);


    for (let i = 0; i<tabs.length; i++) {

      tabs[i].addEventListener('click', e=>{
          tabContent.forEach(index=>{
            index.classList.remove('acitvate');
          })
        tabContent[i].classList.add('acitvate');
      });
    }
