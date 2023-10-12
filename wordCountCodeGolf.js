function read(path) {
    return require('fs')
        .readFileSync(path, 'utf8')
        .toLowerCase();
}

function topNMostFrequentWords(wordsPath, stopWordsPath, cnt) {
    return Object.entries(
            read(wordsPath)
            .split(/\s+/)
            .map((w) => w.replace(/^[.,!?;:]+|[.,!?;:]+$/g, '').replace(/\n/g, ''))
            .filter(w => !read(stopWordsPath).split(',').includes(w))
        .reduce((acc, w) => {
            acc[w] = (acc[w] || 0) + 1;
            return acc;
        }, {}))
    .sort((a, b) => b[1] - a[1])
    .slice(0, cnt)
}

if(process.argv.length >= 4) {
    // execução via linha de comando
    console.log(topNMostFrequentWords(process.argv[2], process.argv[3], 25))
}

module.exports = { topNMostFrequentWords };