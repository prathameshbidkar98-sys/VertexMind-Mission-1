async function getUsers() {

    try {

        const response =
            await fetch("http://localhost:3000/users");

        const users =
            await response.json();

        const output =
            document.getElementById("output");

        output.innerHTML =
            users.map(user => `
                <div class="user-card">
                    <h3>${user.name}</h3>
                    <p>User ID: ${user.id}</p>
                </div>
            `).join("");

    }
    catch(error){

        document.getElementById("output").innerHTML =
            "<p>Unable to load users.</p>";

        console.error(error);
    }
}