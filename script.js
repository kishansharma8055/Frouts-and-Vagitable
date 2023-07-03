// var name2 = prompt();
// var user = document.getElementById('user');
// user.innerHTML = <span> ${name2} </span>



document.addEventListener("DOMContentLoaded", function () {
    // Sample product data
    var products = [
        { name: "Apple", price: 1.99, quantity: 10 },
        { name: "Banana", price: 0.99, quantity: 15 },
        { name: "Carrot", price: 0.50, quantity: 20 }
    ];

    var productContainer = document.getElementById("product-list");

    // Render the product list
    products.forEach(function (product) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <input class="quantity-input" type="number" min="1" max="${product.quantity}" value="1">
            <button class="btn" onclick="buyProduct('${product.name}', ${product.price}, ${product.quantity})">Buy</button>
        `;
        productContainer.appendChild(listItem);
    });

    // Buy product function
    function buyProduct(productName, productPrice, productQuantity) {
        var quantityInput = event.target.parentNode.querySelector(".quantity-input");
        var quantity = parseInt(quantityInput.value);
        if (quantity <= 0 || isNaN(quantity)) {
            alert("Please enter a valid quantity.");
            return;
        }
        if (quantity > productQuantity) {
            alert("Insufficient quantity available.");
            return;
        }
        productQuantity -= quantity;
        quantityInput.value = 1;
        alert("Product purchased successfully!");
    }

});


