var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('hei kaikki t:viljami ps. tämä on minu oma nettisivusto');
    res.end();
}).listen(process.env.PORT || 3000);
