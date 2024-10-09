

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        console.log(name)
        console.log(email)
        console.log(message)
       
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        
        if(name == " ") {
            alert("Please enter your name.");
            return;
        }

        // Validate email
        if(email == " ") {
            alert("Please enter your email.");
            return;
        }

        if(!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate message
        if(message == " ") {
            alert("Please enter your message.");
            return;
        }

        const formData = { name, email, message };
        localStorage.setItem('formData', JSON.stringify(formData));
            
        

       
        setTimeout(function() {
            window.location.href = 'success.html'; 
        }, 1000); 
    });
