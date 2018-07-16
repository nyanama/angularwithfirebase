const exp = require('express');
const app = exp();
app.use(exp.static(__dirname+'dist'));
app.listen(process.env.PORT || 8080);