
var db_contatos_inicial = {
    "data": [
        {
            "ID": 1,
            "NOME COMPLETO": "Gabriel Henrique Vieira de Oliveira",
            "CIDADE": "Belo Horizonte",
            "IDADE": "18",
            "EMAIL": "gabrielhvo2015@gmail.com",
            "TELEFONE E/OU CELULAR": "94002-8922",
            "PRODUTO DE INTERESSE": "Xiaomi Redmi 9S"
        },
        {
            "ID": 2,
            "NOME COMPLETO": "Caio Gomes Alcântara Gloria",
            "CIDADE": "Manaus",
            "IDADE": "54",
            "EMAIL": "caiogomes222@gmail.com",
            "TELEFONE E/OU CELULAR": "98567-7798",
            "PRODUTOS DE INTERESSE": "Fogão de 4 bocas"
        },
        {
            "ID": 3,
            "NOME COMPLETO": "Daniel Salgado Magalhães",
            "CIDADE": "Rio de Janeiro",
            "IDADE": "23",
            "EMAIL": "danielsalgadosalgado@gmail.com",
            "TELEFONE E/OU CELULAR": "99941-7765",
            "PRODUTO DE INTERESSE": "Playstation 5"
        },
        {
            "ID": 4,
            "NOME COMPLETO": "Ana Luiza Lisboa",
            "CIDADE": "Betim",
            "IDADE": "20",
            "EMAIL": "luizabbb@gmail.com",
            "TELEFONE E/OU CELULAR": "98863-3312",
            "PRODUTO DE INTERESSE": "Secador de cabelo automático"
        },
        {
            "ID": 5,
            "NOME COMPLETO": "Carlos Augusto de Nobrega",
            "CIDADE": "São Paulo",
            "IDADE": "57",
            "EMAIL": "salazar445@gmail.com",
            "TELEFONE E/OU CELULAR": "94954-1289",
            "PRODUTO DE INTERESSE": "Aspirador de pó"
        },
        {
            "ID": 6,
            "NOME COMPLETO": "Alexandre Augusto Niess",
            "CIDADE": "Rio de Janeiro",
            "IDADE": "19",
            "EMAIL": "alexandress@hotmail.com",
            "TELEFONE E/OU CELULAR": "97935-8478",
            "PRODUTO DE INTERESSE": "Calculadora científica"
        },
        {
            "ID": 7,
            "NOME COMPLETO": "Pedro Bárbaro Abrão",
            "CIDADE": "Ouro Preto",
            "IDADE": "43",
            "EMAIL": "predroabrao2003@gmail.com",
            "TELEFONE E/OU CELULAR": "98467-4553",
            "PRODUTO DE INTERESSE": "Mesa digitalizadora"
        },
        {
            "ID": 8,
            "NOME COMPLETO": "Nathan Augusto de Almeida",
            "CIDADE": "Salvador",
            "IDADE": "60",
            "EMAIL": "natedrake@gmai.com",
            "TELEFONE E/OU CELULAR": "96493-6943",
            "PRODUTO DE INTERESSE": "Pistola de chumbinho"
        },
        {
            "ID": 9,
            "NOME COMPLETO": "Warley Vieira da Silva",
            "CIDADE": "Foz do Iguaçu",
            "IDADE": "44",
            "EMAIL": "warley.vieira@hotmail.com",
            "TELEFONE E/OU CELULAR": "95976-6794",
            "PRODUTO DE INTERESSE": "Xbox Series S"
        },
        {
            "ID": 10,
            "NOME COMPLETO": "Clementina Vieira da Silva",
            "CIDADE": "Foz do Iguaçu",
            "IDADE": "31",
            "EMAIL": "eaclementina2@gmail.com",
            "TELEFONE E/OU CELULAR": "94648-3804",
            "PRODUTO DE INTERESSE": "Placa de vídeo NVIDIA RTX 3060TI"
        },
                  
        {
            "ID": 11,
            "NOME COMPLETO": "Joao Victor Aguiar",
            "CIDADE": "Rio de Janeiro",
            "IDADE": "18",
            "EMAIL": "jotta2345@gmail.com",
            "TELEFONE E/OU CELULAR": "94570-3811",
            "PRODUTO DE INTERESSE": "Beyblade eletrônico"
        },

        {   
            "ID": 12,
            "NOME COMPLETO": "Ian Monteiro Melo de Lima",
            "CIDADE": "Manaus",
            "IDADE": "52",
            "EMAIL": "iammonteiro@gmail.com",
            "TELEFONE E/OU CELULAR": "99942-7880",
            "PRODUTO DE INTERESSE": "KINDLE"
        },
        
        {
            "ID": 13,
            "NOME COMPLETO": "Thais Oliveira Participio",
            "CIDADE": "Goiânia",
            "IDADE": "27",
            "EMAIL": "patiqueen45@gmail.com.br",
            "TELEFONE E/OU CELULAR": "95778-3450",
            "PRODUTO DE INTERESSE": "Televisão Smart"

            
        }
    ]
}

var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria,
        "website": contato.website
    };

    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria,
    db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    
    localStorage.setItem('db_contato', JSON.stringify(db));
}