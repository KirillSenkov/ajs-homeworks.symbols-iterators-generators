import Daemon from '../daemon.js';

test('creation of Daemon character', () => {
    const daemon = new Daemon('Балрог');
    expect(daemon).toEqual({
        name: 'Балрог',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
        _stoned: false
    });
});