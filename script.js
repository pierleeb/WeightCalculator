<!--
    Copyright (c) 2023 Pierleeb
    SPDX-License-Identifier: MIT
-->


function changeLanguage() {
    const language = document.getElementById('language').value;
    // Adicione lógica para mudar o idioma conforme necessário
    // Você pode usar bibliotecas de internacionalização (i18n) para isso.
}

function calculateWeight() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height && weight) {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        displayResult(`Seu Índice de Massa Corporal (IMC): ${bmi}`);
    } else {
        displayResult('Por favor, preencha todos os campos.');
    }
}

function displayResult(message) {
    document.getElementById('result').innerText = message;
    // Adicione notificação moderna usando SweetAlert2
    Swal.fire({
        icon: 'success',
        title: 'Resultado Calculado!',
        text: message,
        confirmButtonText: 'OK'
    });
}
