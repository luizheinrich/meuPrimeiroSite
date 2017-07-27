var express = require('express');
var app = express();
var path = require('path');

// configurar a pasta de arquivos estáticos
//todos os arquivos que serão acessados partirão deste diretório
app.use(express.static(path.join(__dirname, '/')));
        
        
    
app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname + '/index.html'));
});




app.listen(3000, function () {
 console.log("Escutando na porta 3000");
});