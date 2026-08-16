// Services Data
const servicesData = [
    {serviceName: 'Washing', serviceCost: 100, img: "washing.jpg"},
    {serviceName: 'Spinning', serviceCost: 120, img: "spining.jpg"},
    {serviceName: 'Ironing', serviceCost: 50, img: "Ironing.jpg"},
    {serviceName: 'ALL', serviceCost: 300, img: "all.jpg"}
];

// Get HTML elements
const sName = document.getElementById('service-name');
const sCost = document.getElementById('service-cost');
const sImage = document.getElementById('service-img');
const btnAdd = document.getElementById('add-btn');
const btnSkip = document.getElementById('skip-btn');
const cartItemList = document.getElementById("cart-items-list");
const totalAmount = document.getElementById("total-amount");
const cartEmptyState = document.getElementById("cart-empty-state");
const errorMsg = document.getElementById("error-msg");

// Variables
let currentServiceIndex = 0;
let cartItems = [];
let totalCost = 0;

// Display current service
const displayService = () => {
    if(currentServiceIndex < servicesData.length) {
        const service = servicesData[currentServiceIndex];
        sName.textContent = service.serviceName;
        sCost.textContent = `₹${service.serviceCost}`;
        sImage.src = service.img;
        sImage.alt = `${service.serviceName} Illustration`;
        btnAdd.disabled = false;
        btnSkip.disabled = false;
    } else {
        sName.textContent = 'More Services will be Added Soon';
        sCost.textContent = '';
        sImage.alt = "No more services";
        btnAdd.disabled = true;
        btnSkip.disabled = true;
    }
};

// Add service to cart
const addToCart = () => {
    if(currentServiceIndex < servicesData.length) {
        cartItems.push(servicesData[currentServiceIndex]);
        totalCost += servicesData[currentServiceIndex].serviceCost;
        cartItemList.style.display = 'block';
        updateCart();
        errorMsg.style.display = 'none';
        currentServiceIndex++;
        displayService();
    }
};

// Skip service
const skipService = () => {
    currentServiceIndex++;
    displayService();
};

// Update cart display
const updateCart = () => {
    // Hide empty state if items added
    if(cartItems.length > 0) {
        cartEmptyState.style.display = 'none';
    }

    // Clear and rebuild cart list
    cartItemList.innerHTML = '';
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.padding = '5px 10px';
        li.style.borderBottom = '1px solid #ddd';
        li.style.backgroundColor = 'white'
        li.innerHTML = `
            <span>${index + 1}</span>
            <span>${item.serviceName}</span>
            <span>₹${item.serviceCost}</span>
        `;
        cartItemList.appendChild(li);
    });

    // Update total amount
    totalAmount.textContent = `₹ ${totalCost}`;
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayService();
    updateCart();
    btnAdd.addEventListener('click', addToCart);
    btnSkip.addEventListener('click', skipService);
});

