document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // valores dos campos
    let username = document.getElementById("user").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // mensagens de erro
    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // zera as mensagens de erro
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    // validação do nome de utilizador (mín. 4 e máx. 15 caracteres)
    let user = /^[a-z\d_]{4,15}$/i ;
    if ((document.getElementById("user").value.trim()).length < 4 || (document.getElementById("user").value.trim()).length > 15) {
        usernameError.textContent = "O nome de utilizador deve ter entre 4 e 15 caracteres.";
        valid = false;
    }

    // validação do email usando uma expressão regular
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Insira um email válido.";
        valid = false;
    }

    // validação da senha
    let passwordRegex = /^(?=.{8,})(?=.[A-Z])(?=.[a-z])(?=.\d).$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.";
        valid = false;
    }

    // se todas as validações passarem, mostrar um "alert" de sucesso
    if (valid) {
        alert("Registro bem-sucedido!");
    }
});