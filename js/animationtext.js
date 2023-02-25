var contAnimatedText = document.querySelector('.animatedtext--content');

console.log('Até TW');
var typewriter = new Typewriter(contAnimatedText, {
  loop: true,
  delay: 50,
  deleteSpeed: 0,
});

typewriter
  .typeString("<span style='color:#ED145B'>var </span>Abner  = {")
  .typeString("\n    id: <span style='color:rgb(var(--brancoAbsoluto))'>'Software Developer',</span>")
  .typeString("\n    running: <span style='color:rgb(var(--brancoAbsoluto))'>'Análise e Desenvolvimento de Sistemas',</span>")
  .typeString("\n    métodos: <span style='color:rgb(var(--brancoAbsoluto))'>'Foco, Disciplina e Prática',</span>")
  .typeString("\n    atributos: [")
  .typeString("\n       <span style='color:rgb(var(--brancoAbsoluto))'>'JavaScript',</span>")
  .typeString("\n       <span style='color:rgb(var(--brancoAbsoluto))'>'Java',</span>")
  .typeString("\n       <span style='color:rgb(var(--brancoAbsoluto))'>'Angular',</span>")
  .typeString("\n       <span style='color:rgb(var(--brancoAbsoluto))'>'Go'</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>JAVA'</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>'ADS',</span>")
  .typeString("\n    ]")
  .typeString("\n};  ")
  .pauseFor(5000)
  .deleteAll()
  .start(); 