<?php

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    /* echo "Nome: " . ($_POST['nome'] ?? 'Não enviado') . "\n";
    echo "Email: " . ($_POST['email'] ?? 'Não enviado') . "\n";
    echo "Telefone: " . ($_POST['telefone'] ?? 'Não enviado') . "\n";
    echo "Endereço: " . ($_POST['endereco'] ?? 'Não enviado') . "\n";
    echo "Diurno: " . (isset($_POST['op1']) ? 'Sim' : 'Não') . "\n";
    echo "Noturno: " . (isset($_POST['op2']) ? 'Sim' : 'Não') . "\n";
    echo "Interno: " . (isset($_POST['op3']) ? 'Sim' : 'Não') . "\n";
    echo "Sugestão: " . ($_POST['sugestao'] ?? 'Não enviado') . "\n"; */

    $nome  = ($_POST['nome'] ?? 'Não enviado');
    $email  = ($_POST['email'] ?? 'Não enviado');
    $telefone = ($_POST['telefone'] ?? 'Não enviado');
    $endereco = ($_POST['endereco'] ?? 'Não enviado');
    $op1 = (isset($_POST['op1']) ? 'Sim' : 'Não');
    $op2 = (isset($_POST['op2']) ? 'Sim' : 'Não');
    $op3 = (isset($_POST['op3']) ? 'Sim' : 'Não');
    $sugestao = ($_POST['sugestao'] ?? 'Não enviado');

$query = "INSERT INTO tbusuario(nome,email,telefone,endereco,diurno,noturno,interno,sugestao) 
VALUES('$nome', '$email', '$telefone', '$endereco', '$op1', '$op2', '$op3', '$sugestao')";   

$result = mysqli_query($conexao, $query);

$port = 5177;

if ($result) {
    echo "
    <script>
    alert('Cadastro realizado com sucesso!');
    setTimeout(function() {
        window.location.href = 'http://localhost:$port';
    });
</script>";
    exit;
} else {
    echo "
    <script>
        alert('Erro ao salvar os dados.');
        setTimeout(function() {
            window.history.back(); // Volta à página anterior após 2 segundos
        });
    </script>";
    exit;
}

} 
else {
    echo "Nenhum dado foi enviado.";
}

