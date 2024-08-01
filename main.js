const form = document.getElementById('form');
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function (e){
    e.preventDefault(); 

    adicionarLinha();
    atualizaTabela();
    
});

function adicionarLinha(){
    const inputNome= document.getElementById('Nome');
    const inputTelefone= document.getElementById('telefone');

    if (contatos.includes(inputNome.value)) {
        alert(`O contato: ${inputNome.value} já foi inserido`);
    }
    
    else {

    contatos.push(inputNome.value);
    telefone.push(parseFloat(inputTelefone.value));

    let linha = '<tr>';
    linha +=`<td> ${inputNome.value}</td>`;
    linha +=`<td> ${inputTelefone.value}</td>`;
    
    linha +=`</tr>`;

    linhas += linha;

    inputNome.value = '';
    inputTelefone.value = '';

}}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

