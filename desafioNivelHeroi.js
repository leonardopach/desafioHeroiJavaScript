const nomeHeroi = 'Leonardopach';
let xpHeroi = 6002;
let nivel;

switch (true) {
    case xpHeroi < 1000:
        nivel = 'Ferro';
        break;
    case xpHeroi >= 1000 && xpHeroi <= 2000:
        nivel = 'Bronze';
        break;
    case xpHeroi >= 2001 && xpHeroi <= 5000:
        nivel = 'Prata';
        break;
    case xpHeroi >= 6001 && xpHeroi < 7000:
        nivel = 'Ouro';
        break;
    case xpHeroi >= 7001 && xpHeroi < 8000:
        nivel = 'Platina';
        break;
    case xpHeroi >= 8001 && xpHeroi < 9000:
        nivel = 'Ascendente';
        break;
    case xpHeroi >= 9001 && xpHeroi < 10000:
        nivel = 'Imortal';
        break;
    case xpHeroi >= 10001:
        nivel = 'Radiante';
        break;
    default:
        nivel = 'Desconhecido'
}

console.log(`${nomeHeroi} está no nível de ${nivel}`);
