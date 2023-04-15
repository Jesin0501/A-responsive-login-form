const forms = document.querySelector(".forms"),               //class forms
      pwShowHide = document.querySelectorAll(".eye-icon"),   //password show hide  
      links = document.querySelectorAll(".link");
      

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");   //class field input-field

        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");     // Boxicon.com  bx-hide and bx-show icons
                return;
            }

            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e =>{
        e.preventDefault();   //preventing form submit
        forms.classList.toggle("show-signup")
    })
})