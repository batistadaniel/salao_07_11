// HOME ADM
const idAdm = document.getElementById('btn-adm');
const idFun = document.getElementById('btn-fun');
const idCli = document.getElementById('btn-cli');
const idSer = document.getElementById('btn-ser');

if (idAdm) {
    idAdm.onclick = () => {
        window.location.href = 'telas-home-adm/adm.html';
    }
}
if (idFun) {
    idFun.onclick = () => {
        window.location.href = 'funcionario.html';
    }
}
if (idCli) {
    idCli.onclick = () => {
        window.location.href = 'cliente.html';
    }
}
if (idSer) {
    idSer.onclick = () => {
        window.location.href = 'servico.html';
    }
}

// HOME FUNCIONARIO E CLIENTE
const btnCriarAgendamento = document.getElementById('criarAgendamento');
const btnEditarAgendamento = document.getElementById('editarAgendamento');
const btnExcluirAgendamento = document.getElementById('excluirAgendamento');
const btnVerAgendamento = document.getElementById('visualizarAgendamento');

if (btnCriarAgendamento) {
    btnCriarAgendamento.onclick = () => {
        window.location.href = 'admfhdhdf.html';
    }
}
if (btnEditarAgendamento) {
    btnEditarAgendamento.onclick = () => {
        window.location.href = 'funcionario.html';
    }
}
if (btnExcluirAgendamento) {
    btnExcluirAgendamento.onclick = () => {
        window.location.href = 'cliente.html';
    }
}
if (btnVerAgendamento) {
    btnVerAgendamento.onclick = () => {
        window.location.href = 'servico.html';
    }
}
