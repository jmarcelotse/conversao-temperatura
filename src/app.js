const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para parsing JSON
app.use(express.json());

// Função para converter Celsius para Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Função para converter Fahrenheit para Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Rota principal
app.get('/', (req, res) => {
  res.json({
    message: 'API de Conversão de Temperatura',
    endpoints: {
      'GET /': 'Informações da API',
      'POST /celsius-to-fahrenheit': 'Converte Celsius para Fahrenheit',
      'POST /fahrenheit-to-celsius': 'Converte Fahrenheit para Celsius'
    }
  });
});

// Rota para converter Celsius para Fahrenheit
app.post('/celsius-to-fahrenheit', (req, res) => {
  const { celsius } = req.body;
  
  if (typeof celsius !== 'number') {
    return res.status(400).json({
      error: 'Por favor, forneça um valor numérico para celsius'
    });
  }
  
  const fahrenheit = celsiusToFahrenheit(celsius);
  
  res.json({
    celsius,
    fahrenheit,
    formula: 'F = (C × 9/5) + 32'
  });
});

// Rota para converter Fahrenheit para Celsius
app.post('/fahrenheit-to-celsius', (req, res) => {
  const { fahrenheit } = req.body;
  
  if (typeof fahrenheit !== 'number') {
    return res.status(400).json({
      error: 'Por favor, forneça um valor numérico para fahrenheit'
    });
  }
  
  const celsius = fahrenheitToCelsius(fahrenheit);
  
  res.json({
    fahrenheit,
    celsius,
    formula: 'C = (F - 32) × 5/9'
  });
});

// Iniciar servidor apenas se não estiver sendo importado (não durante testes)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
  });
}

module.exports = app;
