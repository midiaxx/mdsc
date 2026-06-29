
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita envio real

    // Limpa mensagens de erro
    document.getElementById("nomeError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("mensagemError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
    let valid = true;

    // Validação do nome
    if (nome === "") {
        document.getElementById("nomeError").textContent = "O campo nome é obrigatório.";
        valid = false;
    }

    // Validação do e-mail
    if (email === "") {
        document.getElementById("emailError").textContent = "O campo e-mail é obrigatório.";
        valid = false;
    } else {
        // Regex simples para validar formato de e-mail
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Digite um e-mail válido.";
            valid = false;
        }
    }

    // Validação da mensagem
    if (mensagem === "") {
        document.getElementById("mensagemError").textContent = "O campo mensagem é obrigatório.";
        valid = false;
    }

    // Se tudo estiver válido, simula envio
    if (valid) {
        // Limpa campos
        document.getElementById("contactForm").reset();

        // Exibe mensagem de sucesso
        document.getElementById("successMessage").textContent = "Mensagem enviada com sucesso!";

        // Também pode usar alert
        alert("Mensagem enviada com sucesso!");
    }
});