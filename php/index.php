<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
       $modelo = $_POST['modelo'];
    $marca= $_POST['marca'];
    $cor = $_POST['cor'];
    $data_lancamento = $_POST['data_lancamento'];

  
    $servername = "localhost";
    $username = "root"; 
    $password = "";     
    $dbname = "meu_banco"; 

    
    $conn = new mysqli($servername, $username, $password, $dbname);

    
    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    
    $sql = "INSERT INTO carros (modelo, ano, cor, data_lancamento) VALUES ('$modelo', '$marca', '$cor', '$data_lancamento')";

    
    if ($conn->query($sql) === TRUE) {
        echo "Carro cadastrado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    
    $conn->close();
}
?>