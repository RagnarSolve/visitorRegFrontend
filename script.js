const URL = "https://visitorreg-functionapp-g5a4cghjfzb7c4dz.uksouth-01.azurewebsites.net/api/register";

const form = document.getElementById('form');
const input = document.getElementById('input');
const text = document.getElementById('text');

form.onsubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: input.value.trim() })
    }).catch(() => null);

    if (!response) { text.textContent = "Can't find network"; return; }
    if (response.ok) {
        text.textContent = "Name added!";
        form.reset();
        setTimeout(() => { text.textContent = ""; }, 2000);
    } else {
        text.textContent = "Error!";
        form.reset();
        setTimeout(() => { text.textContent = ""; }, 2000);
    }

};