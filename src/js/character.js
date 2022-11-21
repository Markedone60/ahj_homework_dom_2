export default class Character {
  Constructor(character) {
    this.character = character;
  }

  setCharacter() {
    const character = document.createElement('div');
    character.classList.add('char'); 
  }

  getCharacter() {
    this.setCharacter();
    return this.character
  }
}