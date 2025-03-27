import Character from "./character.js";

const memberCountSymbol = Symbol('count');

export default class Team {
    constructor(teamName, members=[]) {
        if (typeof teamName !== 'string' || teamName.length < 2) {
            throw new Error('Название команды - строка не короче двух символов.')
        }
        this.teamName = teamName;
        this.members = [...members];
        this[memberCountSymbol] = this.members.length;
    }

    add(character) {
        if (character instanceof Character) {
            this.members.push(character);
            this[memberCountSymbol]++;
            return;
        }
        throw new Error('Требуются настоящие герои.');
    }

    [Symbol.iterator]() {
        const generator = this.#makeGenerator()(this.members);
        return {
          next: (...args) => generator.next(...args)
        };
    }

    #makeGenerator() {
        return function* (members) {
          for (const member of members) {
            yield member;
          }
        };
    }
  
  }