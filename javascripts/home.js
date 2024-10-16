const roles = ["Researcher", "Developer", "Machine Learning Enthusiast"];
let index = 0;
let roleElement = document.getElementById('role');

function typeRole(role, callback) {
    let text = '';
    let i = 0;

    function typing() {
        if (i < role.length) {
            text += role.charAt(i);
            roleElement.textContent = text;
            i++;
            setTimeout(typing, 100);
        } else {
            setTimeout(() => eraseRole(role, callback), 2000); // Pause before erasing
        }
    }

    typing();
}

function eraseRole(role, callback) {
    let text = role;
    let i = text.length;

    function erasing() {
        if (i > 0) {
            text = text.substring(0, i - 1);
            roleElement.textContent = text;
            i--;
            setTimeout(erasing, 100);
        } else {
            callback(); // Move to the next role after erasing
        }
    }

    erasing();
}

function cycleRoles() {
    typeRole(roles[index], () => {
        index = (index + 1) % roles.length; // Move to the next role
        cycleRoles();
    });
}

cycleRoles(); // Start the cycle
