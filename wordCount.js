const fs = require('fs');

function read(path) {
    return fs.readFileSync(path, 'utf8').toLowerCase();
}

function cleanWord(word) {
    // Remove pontuações do início e do fim da palavra, bem como quebras de linha
    return word.replace(/^[.,!?;:]+|[.,!?;:]+$/g, '').replace(/\n/g, '');
}

function topNMostFrequentWords(wordsPath, stopWordsPath, cnt) {

    stopWords = new Set(read(stopWordsPath).split(','));

    let words = read(wordsPath)
        .split(/\s+/) // quebra o texto nos espaços
        .map(cleanWord)
        .filter(w => !stopWords.has(w))

    let counts = words.reduce((acc, w) => {
        acc[w] = (acc[w] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, cnt)
}

if(process.argv.length >= 4) {
    // execução via linha de comando
    console.log(topNMostFrequentWords(process.argv[2], process.argv[3], 25))
}

module.exports = { topNMostFrequentWords };