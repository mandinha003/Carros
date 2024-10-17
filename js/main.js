function AddCarro(){
    let carro = {
        "marca": "Fiat",
        "modelo": "Uno Vivace",
        "ano":2021,
        "cor":"preta"
    }
    console.log(carro);
}

function AddCarro2(){
    let carro = {
        "marca": document.getElementById("marca").value,
        "modelo": document.getElementById("modelo").value,
        "ano": document.getElementById("ano").value,
        "cor":document.getElementById("cor").value,
    }
    console.log(carro);
}

function AddCarroArray(){
    let carros = [
        {
            "marca": "Fiat",
            "modelo": "Uno Vivace",
            "ano":2021,
            "cor":"preta"
        },
        {
            "marca": "VW",
            "modelo": "UP",
            "ano":2022,
            "cor":"branca"
        },
        {
            "marca": "Chevrolet",
            "modelo": "Onix",
            "ano":2020,
            "cor":"prata"
        }
    ];

    let carro = {
        "marca": document.getElementById("marca").value,
        "modelo": document.getElementById("modelo").value,
        "ano": document.getElementById("ano").value,
        "cor":document.getElementById("cor").value
    }

    //carros.unshift(carro);
    carros.push(carros);

    console.log(carros);
}