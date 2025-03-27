import Character from "./js/character.js";
import Team from './js/Team.js';
import canIterate from './js/canIterate.js';

const team = new Team('A-Team', [new Character('Mr. T', 'Daemon', 100, 20, 90)]);
team.add(new Character('Mad Murdock', 'Magician', 90, 30, 100));
team.members[1].stoned = true;

for (const member of team) {
  console.log(member);
}

const data = [
    [new Map(), '// true //'],
    [new Set(), '// true //'],
    [null, '// false //'],
    [10, '// false //'],
    ['Netology', '// true //']
];

for (const item of data) {
    console.log(item[0], item[1], canIterate(item[0]));
};