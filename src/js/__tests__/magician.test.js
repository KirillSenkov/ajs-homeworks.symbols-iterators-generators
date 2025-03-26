import Magician from '../magician.js';

test('creation of Magician character', () => {
    const magician = new Magician('Гэндальф');
    expect(magician).toEqual({
        name: 'Гэндальф',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
        _stoned: false
    });
});