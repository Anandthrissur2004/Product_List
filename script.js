const products = [
    {
        name:"Laptop",
        price: 1000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
    },
    {
        name:"Smartphone",
        price: 800,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    },
    {
        name:"Headphones",
        price: 150,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    },
    {
         name: "Shoes",
        price: 2000,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },   
    {
        name: "T-Shirt",
        price: 800,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Watch",
        price: 3000,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Headphones",
        price: 1500,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80"
    }
];

const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const productList = document.getElementById("productList");

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchValue);
        const matchesCategory =
            !selectedCategory ||
            product.category.toLowerCase() === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
}

function displayProducts(productsToDisplay) {
    productList.replaceChildren();

    productsToDisplay.forEach(product => {
        const productCard = document.createElement("article");
        productCard.className = "product";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = `Price: $${product.price.toLocaleString()}`;

        const category = document.createElement("p");
        category.textContent = `Category: ${product.category}`;

        productCard.append(image, name, price, category);
        productList.append(productCard);
    });
}

// Step 5: Add event listeners
searchInput.addEventListener("input", filterProducts);

categorySelect.addEventListener("change", filterProducts);

// Step 6: Display all products initially
displayProducts(products);
