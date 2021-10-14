const player1 = {
    name: 'Scorpion',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'Kunai',
    attack: function() {

        console.log(player1.name + 'Fight...');
    }
};

const player2 = {
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: 'Hands',
    attack: function() {

        console.log(player2.name + 'Fight...');
    }
};


const $arenas = document.querySelector('.arenas');

function createPlayer(player, name, hp, heroImg) {
    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.classList.add('img');
    $img.src = heroImg;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $arenas.appendChild($player);
}

createPlayer('player1', player1.name, player1.hp, player1.img);
createPlayer('player2', player2.name, player2.hp, player2.img);
