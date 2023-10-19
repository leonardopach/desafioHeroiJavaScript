// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
function vitorias(saldo) {
    if (saldo < 10) {
        return "Ferro";
    } else if (saldo >= 10 && saldo <= 20) {
        return "Bronze";
    } else if (saldo > 20 && saldo <= 50) {
        return "Prata";
    } else if (saldo > 50 && saldo <= 80) {
        return "Ouro";
    } else if (saldo > 80 && saldo <= 90) {
        return "Diamante";
    } else if (saldo > 90 && saldo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

function imprimir(saldo) {
    return `O Herói tem de saldo de **${saldo}** está no nível de **${vitorias(saldo)}**`;
}

function jogador(qtdVitorias, qtdDerrotas) {
    let saldoRanqueadas = qtdVitorias - qtdDerrotas;
    console.log(imprimir(saldoRanqueadas));
}

jogador(20, 11);
jogador(20, 10);
jogador(50, 11);
jogador(80, 11);
jogador(100, 11);
jogador(100, 9);
jogador(101, 0);
