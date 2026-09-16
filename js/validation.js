const registerForm = document.getElementById('registerForm');

if(registerForm){
    registerForm.addEventListener('submit', function (e){
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const age = document.getElementById('age').value.trim();
        const troop = document.getElementById('troop').value.trim();
        const reason = document.getElementById('reason').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');

        let isValid = true;
        let errorMessage = "Registration failed. Please fix the following errors:\n\n";

        if(name.length < 3){
            isValid = false;
            errorMessage += "- Name must be at least 3 characters long.\n";
        }

        if(
            email === "" ||
            !email.includes("@") ||
            !email.includes(".") ||
            email.startsWith("@") ||
            email.endsWith("@") ||
            email.indexOf("@") > email.lastIndexOf(".")
        )
        {
            isValid = false;
            errorMessage += "- Please enter a valid email address.\n";
        }

        if(
            age === "" ||
            isNaN(age) ||
            parseInt(age) < 13
        ) {
            isValid = false;
            errorMessage += "- You must be at least 13 years old to join our guild.\n";
        }

        if(troop.length < 2){
            isValid = false;
            errorMessage += "- Please enter a valid Favorite Troop.\n";
        }

        if(!gender){
            isValid = false;
            errorMessage += "- Please select your gender.\n";
        }

        if(reason.length < 10){
            isValid = false;
            errorMessage += "- Reason must be at least 10 characters long.\n";
        }

        if(!isValid){
            alert(errorMessage);
        } else{
            alert(`Registration successful! Welcome to the guild, ${name}!`);

            registerForm.reset();

            window.location.href = 'home.html';
        }
    });
}