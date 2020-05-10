let searchResponse = require(`./fixtures/search.json`);
let exchange = require(`./fixtures/exchange.json`);
var bodyParser = require('body-parser');


const fetchResults = [
  require(`./fixtures/fetch.json`), require(`./fixtures/fetch2.json`), require(`./fixtures/fetch3.json`),
  require(`./fixtures/fetch-currency.json`), require(`./fixtures/fetch-currency2.json`), require(`./fixtures/fetch-currency3.json`),
]
module.exports = function (app) {
  app.use(bodyParser.json());
  app.post("/api/trade/search/*", bodyParser.json(), function (req, res) {
    res.send(searchResponse)
  });
  app.post("/api/trade/exchange/*", bodyParser.json(), function (req, res) {
    res.send(exchange)
  });
  app.get("/api/trade/fetch/:items", bodyParser.json(), function (req, res) {
    console.log(`/api/trade/fetch Requested ${req.params.items}`);
    let items = req.params.items.split(',');
    let result = fetchResults.find(a => a.result.find(b=> b.id === items[0]))
    console.log(`/api/trade/fetch Returning ${JSON.stringify(result.result.map(a => a.id))}`);
    res.send(result)
  });
}
