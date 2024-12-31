<?php

$bdHost = 'localhost';
$bdUsername = 'root';
$bdPassword = '';
$bdName = 'bdforms';


$conexao = new mysqli($bdHost, $bdUsername, $bdPassword, $bdName);

/* if($conexao->connect_errno){
    echo "Erro";
}
else{
    echo "Conectado!";
} */

