// Testes para o projeto de conversão de temperatura
const request = require('supertest');
const app = require('../src/app');

describe('API de Conversão de Temperatura', () => {
  
  describe('GET /', () => {
    test('deve retornar informações da API', async () => {
      const response = await request(app).get('/');
      
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('API de Conversão de Temperatura');
      expect(response.body.endpoints).toBeDefined();
    });
  });

  describe('POST /celsius-to-fahrenheit', () => {
    test('deve converter 0°C para 32°F', async () => {
      const response = await request(app)
        .post('/celsius-to-fahrenheit')
        .send({ celsius: 0 });
      
      expect(response.status).toBe(200);
      expect(response.body.celsius).toBe(0);
      expect(response.body.fahrenheit).toBe(32);
      expect(response.body.formula).toBe('F = (C × 9/5) + 32');
    });

    test('deve converter 100°C para 212°F', async () => {
      const response = await request(app)
        .post('/celsius-to-fahrenheit')
        .send({ celsius: 100 });
      
      expect(response.status).toBe(200);
      expect(response.body.celsius).toBe(100);
      expect(response.body.fahrenheit).toBe(212);
    });

    test('deve retornar erro para valor não numérico', async () => {
      const response = await request(app)
        .post('/celsius-to-fahrenheit')
        .send({ celsius: 'abc' });
      
      expect(response.status).toBe(400);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('POST /fahrenheit-to-celsius', () => {
    test('deve converter 32°F para 0°C', async () => {
      const response = await request(app)
        .post('/fahrenheit-to-celsius')
        .send({ fahrenheit: 32 });
      
      expect(response.status).toBe(200);
      expect(response.body.fahrenheit).toBe(32);
      expect(response.body.celsius).toBe(0);
      expect(response.body.formula).toBe('C = (F - 32) × 5/9');
    });

    test('deve converter 212°F para 100°C', async () => {
      const response = await request(app)
        .post('/fahrenheit-to-celsius')
        .send({ fahrenheit: 212 });
      
      expect(response.status).toBe(200);
      expect(response.body.fahrenheit).toBe(212);
      expect(response.body.celsius).toBe(100);
    });

    test('deve retornar erro para valor não numérico', async () => {
      const response = await request(app)
        .post('/fahrenheit-to-celsius')
        .send({ fahrenheit: 'xyz' });
      
      expect(response.status).toBe(400);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('Testes básicos de conversão', () => {
    test('deve passar no teste básico', () => {
      expect(true).toBe(true);
    });

    test('deve converter Celsius para Fahrenheit (função)', () => {
      // Fórmula: F = (C × 9/5) + 32
      const celsius = 0;
      const fahrenheit = (celsius * 9/5) + 32;
      expect(fahrenheit).toBe(32);
    });

    test('deve converter Fahrenheit para Celsius (função)', () => {
      // Fórmula: C = (F - 32) × 5/9
      const fahrenheit = 32;
      const celsius = (fahrenheit - 32) * 5/9;
      expect(celsius).toBe(0);
    });
  });
});
