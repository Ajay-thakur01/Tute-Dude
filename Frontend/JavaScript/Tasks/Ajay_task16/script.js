const baseStudents = [
    {
        name: "Salman Ahmed",
        marks: 38,
        class: "3rd",
        address: "India"
    },
    {
        name: "Riya Sharma",
        marks: 85,
        class: "10th",
        address: "ABC Colony, Delhi"
    },
    {
        name: "Rohan Patel",
        marks: 70,
        class: "12th",
        address: "456 XYZ Street, Mumbai"
    },
    {
        name: "Priya Singh",
        marks: 95,
        class: "8th",
        address: "789 PQR Nagar, Bangalore"
    },
    {
        name: "Ankit Gupta",
        marks: 60,
        class: "9th",
        address: "101 LMN Road, Kolkata"
    },
    {
        name: "Neha Verma",
        marks: 80,
        class: "11th",
        address: "222 DEF Avenue, Chennai"
    },
    {
        name: "Ajay",
        marks: 68,
        class: "7th",
        address: "India"
    },
    {
        name: "Sneha Jaryal",
        marks: 85,
        class: "10th",
        address: "ABC Colony, Delhi"
    },
    {
        name: "Suraj Patel",
        marks: 70,
        class: "12th",
        address: "456 XYZ Street, Mumbai"
    },
    {
        name: "Priyanshu",
        marks: 95,
        class: "8th",
        address: "789 PQR Nagar, Bangalore"
    },
    {
        name: "Ankita Gupta",
        marks: 60,
        class: "9th",
        address: "101 LMN Road, Kolkata"
    },
    {
        name: "Sneha Verma",
        marks: 80,
        class: "11th",
        address: "222 DEF Avenue, Chennai"
    }
];

const names = [
    "Aarav Singh", "Diya Nair", "Kabir Mehta", "Ishita Roy", "Vivaan Kumar",
    "Meher Khan", "Yash Malhotra", "Ananya Joshi", "Rudra Sen", "Saanvi Kapoor",
    "Tanvi Das", "Harsh Vardhan", "Kaira Bhatia", "Aditya Shah", "Pooja Iyer",
    "Nikhil Rao", "Zoya Ali", "Rahul Khanna", "Mira Sethi", "Arjun Verma",
    "Tanya Grover", "Krishna Patel", "Naina Gupta", "Vikram Singh", "Aditi Sharma"
];

const classes = ["3rd", "5th", "7th", "8th", "9th", "10th", "11th", "12th"];
const cities = ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Lucknow"];
const streets = ["Green Park", "Lake View", "Sunrise Avenue", "Maple Road", "Royal Lane", "Palm Grove", "Hill Crest", "City Center"];

function generateRandomStudents(count) {
    return Array.from({ length: count }, () => {
        const name = names[Math.floor(Math.random() * names.length)];
        const marks = Math.floor(Math.random() * 101);
        const className = classes[Math.floor(Math.random() * classes.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];
        const street = streets[Math.floor(Math.random() * streets.length)];
        const houseNo = Math.floor(Math.random() * 900) + 100;

        return {
            name,
            marks,
            class: className,
            address: `${houseNo} ${street}, ${city}`
        };
    });
}

const students = [...baseStudents, ...generateRandomStudents(25)];

const container = document.getElementById("studentContainer");

function displayStudents(data) {
    container.innerHTML = "";

    data.forEach(student => {
        container.innerHTML += `
            <div class="card">
                <h4>Student Name: ${student.name}</h4>
                <p>Marks: ${student.marks}%</p>
                <p>Class: ${student.class}</p>
                <p>Address: ${student.address}</p>
            </div>
        `;
    });
}

displayStudents(students);

function searchStudent() {
    const value = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = students.filter(student =>
        student.name.toLowerCase().includes(value)
    );

    displayStudents(filtered);
}