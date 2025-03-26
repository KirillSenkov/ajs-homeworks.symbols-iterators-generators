export default class Character {
    constructor(name, type, attack, defence, health) {
        this.name = name;
        this.type = type;
        this.level = 1;
        this.health = health;
        this.attack = attack;
        this.defence = defence;
        this._stoned = false
    }

    set stoned(value) {
        if (typeof value !== 'boolean') {
            throw new Error('Некорректное значение для наложения/снятия дурмана.');
        }
        this._stoned = value;

    }

    get stoned() {
        return this._stoned;
    }

    rangeCoefficient(range=1) {
        range = Math.min(range, 5);
        const linearFactor = 1 - (range - 1) * 0.1;

        if (!this.stoned) {
            return linearFactor;
        }
        const penalty = Math.log2(range) * 5;
        return linearFactor - penalty / 100;
    }
  
    damage(points, range) {
        points *= this.rangeCoefficient(range);

        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
            console.log("Проверка: здоровье после урона =", this.health)
            if (this.health < 0) {
                console.log("Условие сработало, устанавливаем здоровье в 0");
                this.health = 0;
            }
        }
    }
}
