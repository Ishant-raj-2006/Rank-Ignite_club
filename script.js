// Student Data
const data = [
    {
        rank: 1,
        Roll: "0245CSE031",
        name: "Anupam Kumari",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/anupam-kumari-8167aa3a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/anupamguptaji123-droid"
    },
    {
        rank: 1,
        Roll: "0245CDS043",
        name: "Riya Kumari",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/riya-singh-703142353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/riyasingh41996-ctrl"
    },
    {
        rank: 1,
        Roll: "0255Cybs027",
        name: "Bhavishya ",
        Point: 10,
        linkedin: "https://in.linkedin.com/in/bhavishya-rajput-56a225399",
        github: "https://github.com/Deon-Wertz"
    },
    {
        rank: 1,
        Roll: "0255CDS025",
        name: "Satyam Kumar",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/satyam-kumar-5b5167384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        github: "https://github.com/satyamkmr18"
    },
    {
        rank: 1,
        Roll: "0245CYBS019",
        name: "Prince",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/prince-kumar-04b443367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Prince-3103"
    },
    {
        rank: 1,
        Roll: "0245CSE005",
        name: "Shayef Kabir",
        Point: 10,
        linkedin: "http://www.linkedin.com/in/shayef-kabir-b853b0372",
        github: "https://github.com/shayefkabir2005"
    },
    {
        rank: 1,
        Roll: "0255CDS015",
        name: "Muskan Bhari",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/muskan-bharti-b9166a3a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/muskan-0228"
    },
    {
        rank: 1,
        Roll: "0255CSE036",
        name: "Priyanka Kumari",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/priyanka-kumari-5354443a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Priyanka-798"
    },
    {
        rank: 2,
        Roll: "0255CSE039",
        name: "Antriksh Arya",
        Point: 5,
        linkedin: "",
        github: "https://github.com/antriksharyagrd-a11y"
    },
     {
        rank: 2,
        Roll: "0255BBA068",
        name: "Prema Jaiswal",
        Point: 5,
        linkedin: "https://www.linkedin.com/in/prema-jaiswal-836658296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: ""
    },
    {
        rank: 0,
        Roll: "0255CDS035",
        name: "Prachi Kumari",
        Point: 0,
        linkedin: "",
        github: ""
    },
    {
        rank: 0,
        Roll: "0255EEE004",
        name: "Tushar Jaiswal",
        Point: 0,
        linkedin: "",
        github: ""
    }
];

// Render Table
function renderTable(list) {
    const table = document.getElementById("dataTable");
    table.innerHTML = `
        <thead>
            <tr>
                <th>Rank</th>
                <th>Roll No</th>
                <th>Name</th>
                <th>Point</th>
                <th>LinkedIn</th>
                <th>GitHub</th>
            </tr>
        </thead>
        <tbody>
            ${list.map(item => `
                <tr>
                    <td>${item.rank}</td>
                    <td>${item.Roll}</td>
                    <td>${item.name}</td>
                    <td>${item.Point}</td>
                    <td><a href="${item.linkedin}" target="_blank">LinkedIn</a></td>
                    <td><a href="${item.github}" target="_blank">GitHub</a></td>
                </tr>
            `).join("")}
        </tbody>
    `;
}

// Search Function
function searchData() {
    const value = document.getElementById("searchInput").value.toLowerCase();
    const filtered = data.filter(item =>
        item.Roll.toLowerCase().includes(value)
    );
    renderTable(filtered);
}

document.addEventListener("DOMContentLoaded", () => {

    renderTable(data);

    document.getElementById("searchInput")
        .addEventListener("input", searchData);

    // Welcome Voice
    const speech = new SpeechSynthesisUtterance(
        "Welcome to Ignite Club BOYS BugByte"
    );
    window.speechSynthesis.speak(speech);

    // Remove Welcome Screen
    setTimeout(() => {
        const welcome = document.getElementById("welcome-screen");
        if (welcome) {
            welcome.remove();
        }
    }, 1000);
});
