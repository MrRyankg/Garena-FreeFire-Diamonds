document.getElementById('giveawayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    if (email && password) {
        messageDiv.innerHTML = `Thanks for entering, ${email}! Please subscribe to our YouTube channel to finalize your entry: <a href="https://www.youtube.com/channel/UCC0hom9n9raSY3c4y-2VfjQ" target="_blank">Subscribe Now</a>. Your details are recorded for the Garena-sponsored top-up.`;
        messageDiv.style.color = "#00ff00";
        console.log("Email:", email, "Password:", password); // For demo only - remove in production!
    } else {
        messageDiv.innerHTML = "Please enter both email and password!";
        messageDiv.style.color = "#ff0000";
    }
});