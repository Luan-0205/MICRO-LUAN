const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🔥 Serviço de Cardápio rodando em http://localhost:${PORT}`);
});
//BUSQUEI NO GOOGLE