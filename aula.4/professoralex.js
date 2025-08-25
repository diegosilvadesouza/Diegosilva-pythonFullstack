/*
  ============================================================
Projeto: Simulador de Batalha Pokémon 
 Descrição:
Este programa simula batalhas Pokémon
 O jogador escolhe um Pokémon inicial 
A batalha é baseada em turnos, com ataques e contra-ataques
 Ao final, o jogador pode continuar a aventura ou trocar de Pokémon
  ============================================================
 funcoes utilizada;
Math.random() - Gera um número aleatório entre 0 e 1.
process.exit() - Encerra o programa imediatamente.
while (true) - deixar jogo rodando ate usario resolver sair
if , el if . else 

*/
const prompt = require("prompt-sync")(); 
// achei apropriado usar const aqui como nao estamos usando arrays acho que vai garantir que codigo rode bem

// função para pedir nome do usuário
function obterNomeDoUsuario() {
  console.log(" Olá, treinador! Bem-vindo ao mundo Pokémon, meu nome professor alexo!");
  const nome = prompt("Qual é o seu nome? ");
  console.log(` Muito bem, ${nome}! Sua jornada começa agora.\n`);
  return nome;
}

const nomeTreinador = obterNomeDoUsuario();


//  while (true) deixar jogo rodando ate usario resolver sair
// aqui usario escolher pokémon de sua prefrencia (JURO QUE NÃO E PARA PUXA SACO DOUGLAS KKK)
while (true) {
  console.log(" Escolha seu Pokémon para a batalha:");
  console.log("1 - Snorlax");
  console.log("2 - Gengar");
  console.log("3 - Pikachu");
  console.log("4 - Greninja");
  console.log("0 - Sair");

  const escolha = prompt("Digite o número do Pokémon escolhido: ");
//aqui encerra caso pessoal não quiser jogar 
  if (escolha === "0") {
    console.log(" Até a próxima, treinador!");
    break;
  }

  let vidaJogador, vidaInimigo;
  let nomeJogador, nomeInimigo;

  if (escolha === "1") {
    nomeJogador = "Snorlax";
    nomeInimigo = "Chansei";
    vidaJogador = 100;
    vidaInimigo = 100;
    console.log(" Snorlax abre um olho lentamente... parece que ele está pronto para lutar.");
    console.log(" Um Chansei selvagem apareceu!");
  } else if (escolha === "2") {0
    nomeJogador = "Gengar";
    nomeInimigo = "Alakazan";
    vidaJogador = 100;
    vidaInimigo = 100;
    console.log(" A sombra de Gengar se move sorrateiramente... você sente um arrepio.");
    console.log(" Um Alakazan selvagem voa em sua direção!");
  } else if (escolha === "3") {
    nomeJogador = "Pikachu";
    nomeInimigo = "Meowth";
    vidaJogador = 100;
    vidaInimigo = 100;
    console.log(" Pikachu solta faíscas pelas bochechas. Ele está animado para a batalha!");
    console.log(" Um Meowth selvagem aparece com olhar desafiador!");
  } else if (escolha === "4") {
    nomeJogador = "Greninja";
    nomeInimigo = "Lapras";
    vidaJogador = 100;
    vidaInimigo = 100;
    console.log(" Greninja observa silenciosamente o horizonte. A batalha se aproxima.");
    console.log(" Um Lapras selvagem surge entre mar!");
  } else {
    console.log(" Escolha inválida. Tente novamente.");
    continue;
  }
//mensagem empolgante para comeca brincadeira
  console.log("\n O vento sopra forte... algo se aproxima.");
  console.log(" Você encara o Pokémon selvagem nos olhos.");
  console.log(" A tensão está no ar. Está pronto para lutar ou prefere recuar?");
  const iniciar = prompt(" Pressione qualquer tecla para iniciar a batalha ou digite 'sair' para fugir: ");
  if (iniciar === "sair") {
    console.log(" Você optou por recuar. A batalha foi evitada... por enquanto.\n");
    continue;
  }

  console.log(" [Música de batalha começa a tocar]");
  console.log(" A batalha vai começar! Prepare-se!\n");

  while (vidaJogador > 0 && vidaInimigo > 0) {
    const ataque = Math.floor(Math.random() * 20) + 10;
    const contraAtaque = Math.floor(Math.random() * 20) + 10;

    vidaInimigo -= ataque;
    vidaJogador -= contraAtaque;

    console.log(`${nomeJogador} ataca com força!  Dano causado: ${ataque}`);
    console.log(`${nomeInimigo} contra-ataca!  Dano recebido: ${contraAtaque}`);
    console.log(` Vida de ${nomeJogador}: ${vidaJogador <= 0 ? 0 : vidaJogador}`);
    console.log(` Vida de ${nomeInimigo}: ${vidaInimigo <= 0 ? 0 : vidaInimigo}\n`);
  }

  if (vidaJogador > 0) {
    console.log(" Parabéns! Você venceu a batalha!");
    switch (nomeJogador) {
      case "Snorlax":
        console.log(" Snorlax boceja e volta a dormir... mas você sabe que ele estará pronto quando precisar.");
        break;
      case "Gengar":
        console.log(" Gengar ri sombriamente enquanto desaparece nas sombras. A vitória foi dele.");
        break;
      case "Pikachu":
        console.log(" Pikachu solta faíscas de empolgação. Ele está pronto para o que vier!");
        break;
      case "Greninja":
        console.log("🥷 Greninja permanece em silêncio, observando. A jornada continua.");
        break;
    }
// final da aventura
    const proximoPasso = prompt("\nDigite 'seguir' para continuar sua aventura ou 'trocar' para escolher outro Pokémon: ");
    if (proximoPasso === "trocar") {
      console.log(" Você decidiu trocar de Pokémon. Voltando ao menu de seleção...\n");
      continue;
    } else if (proximoPasso === "seguir") {
      console.log("\n Boa sorte na sua aventura, treinador!");
      console.log(` Que os ventos te levem a grandes descobertas, ${nomeTreinador}. Até logo!`);
      process.exit();
    } else {
      console.log(" Opção não reconhecida. Voltando ao menu principal...\n");
      continue;
    }
  } else {
    console.log(" Seu Pokémon foi derrotado. Hora de se recuperar e tentar novamente.");
    const tentarNovamente = prompt("Digite 'trocar' para escolher outro Pokémon ou qualquer tecla para tentar novamente com o mesmo: ");
    if (tentarNovamente === "trocar") {
      console.log(" Voltando ao menu de seleção...\n");
      continue;
    } else {
      console.log(" Recomeçando a batalha...\n");
      // Reinicia com o mesmo Pokémon
    }
  }
}


 // queria por opcao de usario escolher os aquetes mas ficou complexo  falta de tempo tambem espero que goste deu trabalho viu 