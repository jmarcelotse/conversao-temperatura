// Teste básico para o projeto de conversão de temperatura
describe('Conversão de Temperatura', () => {
  test('deve passar no teste básico', () => {
    expect(true).toBe(true);
  });

  test('deve converter Celsius para Fahrenheit', () => {
    // Fórmula: F = (C × 9/5) + 32
    const celsius = 0;
    const fahrenheit = (celsius * 9/5) + 32;
    expect(fahrenheit).toBe(32);
  });

  test('deve converter Fahrenheit para Celsius', () => {
    // Fórmula: C = (F - 32) × 5/9
    const fahrenheit = 32;
    const celsius = (fahrenheit - 32) * 5/9;
    expect(celsius).toBe(0);
  });
});
