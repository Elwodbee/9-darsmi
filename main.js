const fantastik897 = [
    {
        ism: "Elshod",
        login: 123456,
        parol: 78900,
    }
];

const form = document.querySelector(".form");
const loginInput = document.querySelector(".login");
const parolInput = document.querySelector(".parol");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    const result = fantastik897.filter(item => item.login == loginInput.value && item.parol == parolInput.value);

    if (result.length > 0) {
        alert(`${result[0].ism} Hush kelibsiz`);
    } else {
        alert("Login yoki parol xato");
    }
});