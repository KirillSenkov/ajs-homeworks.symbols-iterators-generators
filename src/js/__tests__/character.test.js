import Character from '../character.js';

test('get/set stoned working properly', () => {
    const unit = new Character('Маг', 'Magician', 100, 20, 100);
    unit.stoned = true;
    expect(unit.stoned).toBe(true);
    unit.stoned = false;
    expect(unit.stoned).toBe(false);
  });

test('not boolean stoned setting error', () => {
    const unit = new Character('Маг', 'Magician', 100, 20, 100);
    expect(() => {
      unit.stoned = 'упоротый';
    }).toThrow('Некорректное значение для наложения/снятия дурмана.');
});

test('rangeCoefficient of not stoned on range 3  = 0.8', () => {
    const unit = new Character('Дэвид', 'Daemon', 100, 10, 100);
    unit.stoned = false;
    const result = unit.rangeCoefficient(3);
    expect(result).toBeCloseTo(0.8);
});

test('rangeCoefficient of stoned on range 2 = 0.85', () => {
    const unit = new Character('Блэйн', 'Magician', 100, 20, 100);
    unit.stoned = true;
    const result = unit.rangeCoefficient(2);
    expect(result).toBeCloseTo(0.85);
});

test('damage of critical', () => {
    const unit = new Character('Z', 'Magician', 100, 0, 20);
    unit.stoned = false;
    unit.damage(9000, 1);
    expect(unit.health).toBe(0);
});
  
test('damage of stoned with 50 of defence on range = 2', () => {
    const unit = new Character('Z', 'Magician', 100, 50, 100);
    unit.stoned = true;
    unit.damage(100, 2);
    expect(unit.health).toBeCloseTo(57.5);
});


test('damage of a corpse', () => {
    const unit = new Character('DeadMan', 'Magician', 0, 0, 0);
    unit.stoned = false;
    unit.damage(100, 1);
    expect(unit.health).toBe(0);
  });

  test('rangeCoefficient of clean on 1 range = 1.0', () => {
    const unit = new Character('Clean', 'Daemon', 100, 10, 100);
    unit.stoned = false;
    const result = unit.rangeCoefficient();
    expect(result).toBeCloseTo(1.0);
  });