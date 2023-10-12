const { topNMostFrequentWords } = require('../wordCountCodeGolf.js');

describe('Most frequent word', () => {
  it('deve retornar "water", com 9 ocorrencias', () => {
    expect(topNMostFrequentWords('../files/words.txt', '../files/stop_words.txt', 1)).toEqual([['water', 9]]);
  });
  it('deve retornar "futebol", com 2 ocorrencias', () => {
    expect(topNMostFrequentWords('1/words.txt', '../files/stop_words.txt', 1)).toEqual([['futebol', 2]]);
  });
  it('A palavra mais frequente aparece apenas no máximo duas vezes', () => {
    expect(topNMostFrequentWords('2/words.txt', '../files/stop_words.txt', 1)[0][1]).toBeLessThanOrEqual(2);
  });
  it('deve lançar uma exceção quando o input não é válido', () => {
    expect(() => topNMostFrequentWords('words_xxxx.txt', 'stop_words_xxxxx.txt', 1)).toThrow();
  });
  it('deve retornar plantação e, em seguida, arroz. Ambos com 7 ocorrencias', () => {
    expect(topNMostFrequentWords('3/words.txt', '../files/stop_words.txt', 2)).toEqual([['plantação', 7], ['arroz', 7]]);
  });
});

