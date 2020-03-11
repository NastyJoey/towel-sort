// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i] = matrix[i].sort((a, b) => a - b).reverse();
    }

    return matrix.flat(2);
};
