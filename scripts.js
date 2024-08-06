document.addEventListener('DOMContentLoaded', function() {
    // Add to Cart button functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });

    // View Details button functionality
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            alert('View product details!');
        });
    });

    // Newsletter signup functionality
    document.querySelector('.newsletter-signup button').addEventListener('click', function() {
        const email = document.querySelector('.newsletter-signup input').value;
        if (email) {
            alert(`Thank you for subscribing, ${email}!`);
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
