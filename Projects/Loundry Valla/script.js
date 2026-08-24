// Service data
const services = [
    { serviceName: "Dry Cleaning", serviceCost: 200 },
    { serviceName: "Wash & Fold", serviceCost: 100 },
    { serviceName: "Ironing", serviceCost: 30 },
    { serviceName: "Stain Removal", serviceCost: 500 },
    { serviceName: "Leather & Suede Cleaning", serviceCost: 999 },
    { serviceName: "Wedding Dress Cleaning", serviceCost: 2800 }
];

let addBtn1 = document.querySelector(".addBtn1");
let addBtn2 = document.querySelector(".addBtn2");
let addBtn3 = document.querySelector(".addBtn3");
let addBtn4 = document.querySelector(".addBtn4");
let addBtn5 = document.querySelector(".addBtn5");
let addBtn6 = document.querySelector(".addBtn6");
let bookBtn = document.querySelector(".bookButton button");

let emptyState = document.getElementById("cart-empty-state");
let cartItemList = document.getElementById("cart-items-list");
let totalPrice = document.getElementById("total-amount");
let bookingMessage = document.getElementById("booking-message");

let cartItems = [];
let addedServices = {}; // Track which services are added

bookingMessage.textContent = "Add items to cart to book.";
bookingMessage.className = "booking-message";

const cartUpdate = () => {
        emptyState.style.display = "none";
        cartItemList.innerHTML = "";
        let total = 0;
        bookBtn.style.backgroundColor = "blue"
        cartItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.padding = '5px 10px';
            li.style.borderBottom = '1px solid #ddd';
            li.style.backgroundColor = 'white';
            li.innerHTML = `
                <span>${index + 1}</span>
                <span>${item.serviceName}</span>
                <span>₹${item.serviceCost}</span>
            `;
            cartItemList.appendChild(li);
            total += item.serviceCost;
        });
        totalPrice.textContent = `₹ ${total}`;
        bookingMessage.textContent = ''
};

const addServiceToCart = (serviceIndex, button) => {
    if (!addedServices[serviceIndex]) {
        cartItems.push(services[serviceIndex]);
        addedServices[serviceIndex] = true;
        button.textContent = "Remove Item";
        button.style.setProperty("--button-after-content", '"-"');
        button.style.setProperty("--button-after-background", 'red');
        button.style.backgroundColor = "#ffcccc";
        cartUpdate();
    }
};

const removeServiceFromCart = (serviceIndex, button) => {
    cartItems = cartItems.filter((item, index) => item.serviceName !== services[serviceIndex].serviceName);
    addedServices[serviceIndex] = false;
    button.textContent = "Add Items";
    button.style.setProperty("--button-after-background", '#3dbf23');
    button.style.setProperty("--button-after-content", '"+"');
    button.style.backgroundColor = "";
    cartUpdate();
    bookingMessage.textContent = "Add items to cart to book.";
    bookingMessage.className = "booking-message";
};

const resetBooking = () => {
    cartItems = [];
    addedServices = {};
    cartItemList.innerHTML = "";
    emptyState.style.display = "block";
    totalPrice.textContent = "₹ 0";
    bookBtn.style.backgroundColor = "";

    [addBtn1, addBtn2, addBtn3, addBtn4, addBtn5, addBtn6].forEach((button) => {
        button.textContent = "Add Items";
        button.style.setProperty("--button-after-content", '"+"');
        button.style.setProperty("--button-after-background", "#3dbf23");
        button.style.backgroundColor = "";
    });

    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#Pnumber").value = "";
};

// Add button event listeners
addBtn1.addEventListener("click", () => {
    if (addedServices[0]) {
        removeServiceFromCart(0, addBtn1);
    } else {
        addServiceToCart(0, addBtn1);
    }
});

addBtn2.addEventListener("click", () => {
    if (addedServices[1]) {
        removeServiceFromCart(1, addBtn2);
    } else {
        addServiceToCart(1, addBtn2);
    }
});

addBtn3.addEventListener("click", () => {
    if (addedServices[2]) {
        removeServiceFromCart(2, addBtn3);
    } else {
        addServiceToCart(2, addBtn3);
    }
});

addBtn4.addEventListener("click", () => {
    if (addedServices[3]) {
        removeServiceFromCart(3, addBtn4);
    } else {
        addServiceToCart(3, addBtn4);
    }
});

addBtn5.addEventListener("click", () => {
    if (addedServices[4]) {
        removeServiceFromCart(4, addBtn5);
    } else {
        addServiceToCart(4, addBtn5);
    }
});

addBtn6.addEventListener("click", () => {
    if (addedServices[5]) {
        removeServiceFromCart(5, addBtn6);
    } else {
        addServiceToCart(5, addBtn6);
    }
});

bookBtn.addEventListener("click", () => {
    if (cartItems.length === 0) {
        return;
    }

    resetBooking();
    bookingMessage.textContent = "Email has been sent to you successfully";
    bookingMessage.className = "booking-message success";
});