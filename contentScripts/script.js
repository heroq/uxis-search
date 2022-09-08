// uxis url
const url = "";
window.onload = function() {
   let history = new Array();
   if(localStorage.getItem("uxisHistory") != null){
      history = JSON.parse(localStorage.getItem("uxisHistory"));
      const historySet = new Set(history);
      const uniqueArr = [...historySet];
      uniqueArr.reverse();
      uniqueArr.forEach((element) => {
         const historyDiv = document.querySelectorAll("#history")[0];
         const cDiv = document.createElement("div");
         cDiv.classList.add("item");
         cDiv.innerText = element;

         const cHref = document.createElement("a");
         cHref.setAttribute("href", `${url}${element}`);
         cHref.setAttribute("target", "_blank");
         cHref.append(cDiv);
         
         historyDiv.append(cHref);
      });
   }
      

   const searchBtn = document.getElementById("searchBtn");
   const search = document.getElementById("search");	

   search.focus();
   
   search.addEventListener('keydown', (event) => {
      const keyName = event.key;
      if (keyName === 'Enter') {
         Move();
      }
   });

   searchBtn.addEventListener("click", () => {
      Move();
   });

   function Move(){
      history.push(search.value);
      localStorage.setItem("uxisHistory", JSON.stringify(history));
      window.open(url+encodeURI(search.value));
   }
};