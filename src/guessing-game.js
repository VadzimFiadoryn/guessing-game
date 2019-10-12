class GuessingGame {
    constructor() {
        var answer = 0;
        var left = 0;
        var right = 0;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        return this.answer = Math.round((this.right + this.left) / 2);
    }

    lower() {
        return this.right = this.answer;
    }

    greater() {
        return this.left = this.answer;
    }
}
module.exports = GuessingGame;