const levenshtein = (a, b) => {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    Math.min(
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    )
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// تابع محاسبه درصد شباهت
const similarity = (a, b) => {
    const maxLength = Math.max(a.length, b.length);
    const distance = levenshtein(a, b);
    return (1 - distance / maxLength) * 100;
}


const findClosestWord = (input, words) => {
    let closestWord = '';
    let closestDistance = Infinity;
    let highestSimilarity = 0;

    words.forEach(word => {
        const distance = levenshtein(input, word);
        const sim = similarity(input, word);

        if (sim > highestSimilarity) {
            highestSimilarity = sim;
            closestDistance = distance;
            closestWord = word;
        }
    });

    // شرط برای برگرداندن رشته خالی در صورت شباهت کم
    if (highestSimilarity < 50) { // مثلاً اگر شباهت کمتر از 50 درصد بود
        return null; // رشته خالی برمی‌گرداند
    }

    return closestWord;
}

export default findClosestWord;