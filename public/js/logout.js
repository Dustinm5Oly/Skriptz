const logoutLink = document.getElementById("logout-link");

logoutLink.addEventListener("click", async function(event){
   let response = await fetch("/api/users/logout");
   if (!response.ok) {
      alert("Remove /logout from endpoint.")
   }
   return;
})