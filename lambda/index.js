/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core')

const PALMEIRAS = 'A história da Sociedade Esportiva Palmeiras começa efetivamente em 1914 por iniciativa de, em sua maioria, moradores do à época italianíssimo bairro do Brás, em São Paulo, muitos deles funcionários das Indústrias Matarazzo, entusiasmados pela excursão do Torino-ITA e do Pro-Vercelli-ITA ao Brasil naquele mesmo ano. Um dos mais envolvidos era o jovem jornalista Vincenzo Ragognetti, que publicou no Fanfulla (órgão de imprensa voltado à colônia italiana na capital paulista) um convite aos interessados na fundação de uma agremiação esportiva que tivesse a representatividade que a imensa comunidade merecia.'
const SANTOS = '...Vixe, o Santos não faz parte dessa série.'
const SAO_PAULO = 'O São Paulo, aliás, é o time brasileiro com mais finais de Libertadores disputadas: foram seis. Três títulos (1992, 1993 e 2005) e três vices (1974, 1994 e 2006). 14. Além disso, o Tricolor é o único brasileiro a ter sido três vezes campeão mundial.'
const CORINTHIANS = 'O mascote do Corinthians foi criado em 1929. A origem do nome vem do jornalista Thomaz Mazzoni, do impresso A Gazeta. 1929 foi o ano em que o Corinthians foi bicampeão paulista e venceu a sua primeira partida internacional. Na ocasião, o jornalista destacou a fibra de mosqueteiro dos jogadores.'
const BOTAFOGO = 'O Botafogo de Futebol e Regatas foi fundado em 1º de julho de 1894. Levava “regatas” no nome devido à proximidade com a Baía de Guanabara, onde eram disputadas provas de remo. E foi justamente devido ao remo que o Botafogo foi o primeiro clube carioca a ganhar o seu primeiro título esportivo, em 1902.'
const FLAMENGO = 'O Flamengo foi fundado em 17 de novembro de 1895 para as disputas de remo. A entrada da equipe no futebol aconteceu em 1912. Atualmente, o time rubro-negro é o maior vencedor da história do Campeonato Carioca, com 31 títulos. Segundo diversas pesquisas, é o clube com o maior número de torcedores do País.'
const BAHIA = 'O maior artilheiro do Bahia foi Carlito, com 253 gols. Ele jogou por 14 temporadas no clube e jamais vestiu outra camisa. O Bahia é considerado o primeiro campeão brasileiro da história. O Tricolor venceu a Taça Brasil de 1959 superando o poderoso Santos de Pelé na decisão.'
const CRUZEIRO = 'O Cruzeiro é o quinto clube brasileiro com o maior número de vitórias na Copa Libertadores da América, com 95 vitórias e com 642 vitórias é o 9º clube com o maior número de vitórias na história do Campeonato Brasileiro de Futebol (soma dos campeonatos de 1959 a 2019). Além disso, é o nono do Ranking Histórico de Pontos.'
const FORTALEZA = 'O Fortaleza foi fundado em 1918, por Alcides Santos, membro da elite cearense, que se encantou pelo futebol quando estudava no College Stella, na Suíça. O uso do vermelho, do azul e do branco pelo time foi inspirado na bandeira francesa. 2. O Leão é o mascote do Fortaleza.'
const ATLETICO_PARANAENSE = 'Entre os títulos do Club Athletico Paranaense estão a Copa Sul-Americana 2018, a Copa do Brasil 2019, o Campeonato Brasileiro 2001 e a série B do Brasileirão em 1995, além de 26 Campeonatos Paranaenses. A equipe foi a única do Paraná a chegar a uma final da Libertadores, em 2005, quando perdeu para o São Paulo.'
const BRAGANTINO = 'Time de futebol profissional, fundado com o nome de Clube Atlético Bragantino, era uma dissidência do Bragança Futebol Clube. Tornaram-se arquirrivais, e em 1931, após derrotar os veteranos do Bragança F.C. e ficar com a Taça Raul Leme, os novatos do Bragantino receberam da imprensa local o apelido de Massa Bruta.'
const ATLETICO_MINEIRO = 'O Atlético Mineiro nasceu da mobilização de jovens moradores da capital mineira, ganhou o Brasileirão em 1971 e em 2021. Dadá Maravilha e Ronaldinho Gaúcho são ídolos do Atlético Mineiro. A torcida do Atlético Mineiro conta com mais de 6,4 milhões de pessoas.'
const VASCO = 'O Vasco esteve envolvido em dois milésimo gol da história do futebol brasileiro. Primeiro, em 1969, sofreu o de Pelé, vascaíno, que inclusive vestiu a camisa do clube em um amistoso. Depois, Romário, pelo Vasco, fez o seu contra o Sport, em 2007.'
const INTERNACIONAL = 'A maior goleada do Inter sobre o rival Grêmio foi um 7 a 0, em 17 de setembro de 1948, na partida final do campeonato da cidade de Porto Alegre. O mascote do Internacional é um Saci, personagem do folclore brasileiro. Não vence um título nacional há 31 anos – o último foi a Copa do Brasil de 1992.'
const JUVENTUDE = 'Conheça 5 curiosidades sobre o Juventude: – Após 13 temporadas, o Juventude voltou à série A do Campeonato Brasileiro em 2021. A primeira vez que o time esteve na elite do Brasileirão foi em 1977. Em 1997, teve sua melhor participação, conquistando o quinto lugar no Brasileirão.'
const CRICIÚMA = 'O primeiro título como Criciúma foi em 1986, a conquista do Campeonato Catarinense. O time tem 10 títulos estaduais e 10 vice-campeonatos. De 1986 até 1992, foi o clube catarinense que mais ganhou títulos, sendo considerado pela imprensa da época como o melhor do Estado'
const CUIABÁ = 'O time profissional do Cuiabá tem 10 Campeonatos Mato-Grossenses, 2 Copas Verdes (2015 e 2019) e a Copa Governador de 2010. Nas categorias de base, a equipe venceu a Copa FMF Sub-21, em 2016, e os Campeonatos Mato-Grossenses Sub-20, em 2003, 2004 e 2018, e Sub-17, em 2009 e 2010.'
const VITÓRIA = 'O clube foi fundado por 19 garotos baianos que haviam estudado em Londres (Inglaterra). Na época, o esporte mais praticado pela aristocracia de Salvador (BA) era o críquete. Para não entrar em conflito com seus pais, os rapazes instituíram em maio de 1899 o Club de Cricket Victoria. Mas, na verdade, estavam mesmo dispostos a treinar futebol. O nome mudou para Esporte Clube Vitória em 1901. O Vitória liderou a criação da Liga Baiana de Futebol, fundada em 1905. O clube resistiu por bastante tempo ao profissionalismo, permanecendo amador até 1952. Por isso, ficou sem títulos estaduais de 1910 a 1952. . Em 1953, já profissional, o clube foi campeão estadual. Foi o primeiro Campeonato Baiano decidido no estádio da Fonte Nova.'
const GRÊMIO = ' mística do futebol tornou o número 10 o símbolo maior da qualidade com a bola no pé. Pelé e Maradona foram os expoentes. Mas no Grêmio é a camisa 7 que fala mais alto, principalmente quando o assunto é Libertadores. Tudo por causa de Renato, responsável direto pela primeira conquista da América e do mundo, em 1983.'
const ATLÉTICO_GOIANAENSE = 'Atlético Clube Goianiense, notável como Atlético Goianiense e cujo acrônimo é ACG, é uma agremiação esportiva brasileira da cidade de Goiânia, no estado de Goiás, fundado em 2 de abril de 1937.'
const FLUMINENSE = 'Fluminense Football Club é um clube multidesportivo brasileiro sediado no bairro de Laranjeiras, localizado na Zona Sul da cidade do Rio de Janeiro, capital do estado homônimo. Fundado em 21 de julho de 1902, tem como principal atividade o futebol, mandando suas partidas no Maracanã. Disputa o Campeonato Carioca, a principal liga estadual do Rio de Janeiro, bem como o Campeonato Brasileiro, principal liga do Brasil.'

const HINO_PALMEIRAS = '<audio src="https://escolatito.com.br/hino-palmeiras.mp3" />'
const HINO_SAO_PAULO = '<audio src="https://escolatito.com.br/hino-sao-paulo-fc.mp3" />'
const HINO_CORINTHIANS = '<audio src="https://escolatito.com.br/hino-corinthians.mp3" />'
const HINO_BOTAFOGO = '<audio src="https://escolatito.com.br/hino-do-botafogo.mp3" />'
const HINO_FLAMENGO = '<audio src="https://escolatito.com.br/hino-clube-de-regatas-flamengo-rj.mp3" />'
const HINO_BAHIA = '<audio src="https://escolatito.com.br/hino-ec-bahia.mp3" />'
const HINO_CRUZEIRO = '<audio src="https://escolatito.com.br/hino-cruzeiro.mp3" />'
const HINO_FORTALEZA = '<audio src="https://escolatito.com.br/hino-fortaleza-ec.mp3" />'
const HINO_ATHLETICO_PARANAENSE = '<audio src="https://escolatito.com.br/hino-atletico-paranaense.mp3" />'
const HINO_BRAGANTINO = '<audio src="https://escolatito.com.br/hino-bragantino-sp.mp3" />'
const HINO_ATLETICO_MINEIRO = '<audio src="https://escolatito.com.br/hino-aletico-mineiro.mp3" />'
const HINO_VASCO = '<audio src="https://escolatito.com.br/hino-vasco-da-gama.mp3" />'
const HINO_INTERNACIONAL = '<audio src="https://escolatito.com.br/hino-do-internacional.mp3" />'
const HINO_JUVENTUDE = '<audio src="https://escolatito.com.br/hino-Oficial-do-Juventude.mp3" />'
const HINO_CRICIÚMA = '<audio src="https://escolatito.com.br/hino-criciuma-sc.mp3" />'
const HINO_CUIABÁ = '<audio src="https://escolatito.com.br/hino-cuiaba-ec.mp3" />'
const HINO_VITÓRIA = '<audio src="https://escolatito.com.br/hino-esporte-clube-vitoria.mp3" />'
const HINO_GRÊMIO = '<audio src="https://escolatito.com.br/hino-gremio-rs.mp3" />'
const HINO_ATLÉTICO_GOIANAENSE = '<audio src="https://escolatito.com.br/hino-atletico-go.mp3" />'
const HINO_FLUMINENSE = '<audio src="https://escolatito.com.br/hino-fluminense-fc.mp3" />'

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Olá, bem vindo a nossa senac tito skill paixões do futebol. Temos como lhe contar curiosidades do seu time favorito do campeonato brasileiro da série ah, ou tocar o hino do seu time. O que você prefere agora?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CuriosidadesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CuriosidadesIntent';
    },
    handle(handlerInput) {
       // const speakOutput = 'Ok, vamos mostrar as curiosidades do seu time';
       let speakOutput = '';
       const slotValue = Alexa.getSlot(handlerInput.requestEnvelope, 'nomeTime').resolutions.resolutionsPerAuthority[0].values[0].value.name;
       if(slotValue === 'palmeiras') {
           speakOutput = 'Aqui vai a sua curiosidade, como você já sabe o palmeiras não tem mundial, mas...' + PALMEIRAS
       } else if (slotValue === 'são paulo') {
           speakOutput = 'Aqui vai a sua curiosidade' + SAO_PAULO
       } else if (slotValue === 'corinthians') {
           speakOutput = 'Aqui vai a sua curiosidade' + CORINTHIANS
       } else if (slotValue === 'notafogo') {
           speakOutput = 'Aqui vai a sua curiosidade' + BOTAFOGO
       } else if (slotValue === 'flamengo') {
           speakOutput = 'Aqui vai a sua curiosidade' + FLAMENGO
       } else if (slotValue === 'bahia') {
           speakOutput = 'Aqui vai a sua curiosidade' + BAHIA
       } else if (slotValue === 'cruzeiro') {
           speakOutput = 'Aqui vai a sua curiosidade' + CRUZEIRO
       } else if (slotValue === 'fortaleza') {
           speakOutput = 'Aqui vai a sua curiosidade' + FORTALEZA
       } else if (slotValue === 'atlético paranaense') {
           speakOutput = 'Aqui vai a sua curiosidade' + ATLETICO_PARANAENSE
       } else if (slotValue === 'bragantino') {
           speakOutput = 'Aqui vai a sua curiosidade' + BRAGANTINO
       } else if (slotValue === 'atlético mineiro') {
           speakOutput = 'Aqui vai a sua curiosidade' + ATLETICO_MINEIRO
       } else if (slotValue === 'vasco') {
           speakOutput = 'Aqui vai a sua curiosidade' + VASCO
       } else if (slotValue === 'internacional') {
           speakOutput = 'Aqui vai a sua curiosidade' + INTERNACIONAL
       } else if (speakOutput === 'juventude') {
           speakOutput = 'Aqui vai a sua curiosidade' + JUVENTUDE
       } else if (slotValue === 'santos' ) {
           speakOutput = 'Aqui vai a sua curiosidade' + SANTOS
       } else if (speakOutput === 'Criciúma') {
           speakOutput = 'Aqui vai a sua curiosidade' + CRICIÚMA
       } else if (slotValue === 'vitória') {
           speakOutput = 'Aqui vai a sua curiosidade' + VITÓRIA
       } else if (slotValue === 'grêmio') {
           speakOutput = 'Aqui vai a sua curiosidade' + GRÊMIO
       } else if (slotValue === 'atlético goianiense') {
           speakOutput = 'Aqui vai a sua curiosidade' + ATLÉTICO_GOIANAENSE
       } else { 
           (speakOutput === 'fluminense') 
           speakOutput = 'Aqui vai a sua curiosidade' + FLUMINENSE
       }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HinoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HinoIntent';
    },
    handle(handlerInput) {
        let speakOutput = '';
        const slotValue = Alexa.getSlot(handlerInput.requestEnvelope, 'nomeTime').resolutions.resolutionsPerAuthority[0].values[0].value.name;
        
       if(slotValue === 'palmeiras') {
           speakOutput = 'Aí vai o seu hino ' + HINO_PALMEIRAS
       } else if (slotValue === 'são paulo') {
           speakOutput = 'Aí vai o seu hino ' + HINO_SAO_PAULO
       } else if (slotValue === 'corinthians') {
           speakOutput = 'Aí vai o seu hino ' + HINO_CORINTHIANS
       } else if (slotValue === 'botafogo') {
           speakOutput = 'Aí vai o seu hino ' + HINO_BOTAFOGO
       } else if (slotValue === 'flamengo') {
           speakOutput = 'Aí vai o seu hino ' + HINO_FLAMENGO
       } else if (slotValue === 'bahia') {
           speakOutput = 'Aí vai o seu hino ' + HINO_BAHIA
       } else if (slotValue === 'cruzeiro') {
           speakOutput = 'Aí vai o seu hino ' + HINO_CRUZEIRO
       } else if (slotValue === 'fortaleza') {
           speakOutput = 'Aí vai o seu hino ' + HINO_FORTALEZA
       } else if (slotValue === 'atlético paranaense') {
           speakOutput = 'Aí vai o seu hino ' + HINO_ATHLETICO_PARANAENSE
       } else if (slotValue === 'bragantino') {
           speakOutput = 'Aí vai o seu hino ' + HINO_BRAGANTINO
       } else if (slotValue === 'atlético mineiro') {
           speakOutput = 'Aí vai o seu hino ' + HINO_ATLETICO_MINEIRO
       } else if (slotValue === 'vasco') {
           speakOutput = 'Aí vai o seu hino ' + HINO_VASCO
       } else if (slotValue === 'internacional') {
           speakOutput = 'Aí vai o seu hino ' + HINO_INTERNACIONAL
       } else if (speakOutput === 'juventude') {
           speakOutput = 'Aí vai o seu hino ' + HINO_JUVENTUDE
       } else if (slotValue === 'santos' ) {
           speakOutput = 'Seu time está na série B do campionato, por favor escolha outro time'
       } else if (speakOutput === 'criciúma') {
           speakOutput = 'Aí vai o seu hino ' + HINO_CRICIÚMA
       } else if (slotValue === 'vitória') {
           speakOutput = 'Aí vai o seu hino ' + HINO_VITÓRIA
       } else if (slotValue === 'grêmio') {
           speakOutput = 'Aí vai o seu hino ' + HINO_GRÊMIO
       } else if (slotValue === 'atlético goianiense') {
           speakOutput = 'Aí vai o seu hino ' + HINO_ATLÉTICO_GOIANAENSE
       } else {
           (speakOutput === 'fluminense') 
           speakOutput = 'Aí vai o seu hino ' + HINO_FLUMINENSE
       }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};


const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Como posso te ajudar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Até mais, foi um prazer!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Desculpe, eu não sei nada sobre isso. Por favor tente novamente mais tarde.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Me desculpe, Eu não sei nada sobre isso. Por favor tente novamente mais tarde.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        CuriosidadesIntentHandler,
        HinoIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();