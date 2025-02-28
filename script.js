let cart = [];
        
        function addToCart(item, price) {
            cart.push({ item, price });
            updateCart();
        }
        
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }
        
        function updateCart() {
            const cartItems = document.getElementById("cart-items");
            const totalPrice = document.getElementById("total-price");
            
            cartItems.innerHTML = "";
            let total = 0;
            
            cart.forEach((product, index) => {
                let li = document.createElement("li");
                li.textContent = `${product.item} - $${product.price}`;
                
                let deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.className = "delete-btn";
                deleteBtn.onclick = () => removeFromCart(index);
                
                li.appendChild(deleteBtn);
                cartItems.appendChild(li);
                total += product.price;
            });
            
            totalPrice.textContent = total;
        }