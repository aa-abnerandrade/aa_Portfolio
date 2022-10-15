var textoanimado = document.querySelector('.sobre__textoanimado_conteudo');

console.log('Até TW');
var typewriter = new Typewriter(textoanimado, {
  loop: true,
  delay: 50,
  deleteSpeed: 0,
});

typewriter
  .typeString("<span style='color:#ED145B'>var </span>Abner  = {")
  .typeString("\n    id: <span style='color:rgb(var(--brancoAbsoluto))'>'Determinado',</span>")
  .typeString("\n    skin: <span style='color:rgb(var(--brancoAbsoluto))'>'Desenvolvedor Front End',</span>")
  .typeString("\n    objetivo: <span style='color:rgb(var(--brancoAbsoluto))'>'Ser um dos melhores',</span>")
  .typeString("\n    cursando: [")
  .typeString("\n       <span style='color:rgb(var(--brancoAbsoluto))'>'HTML',</span>")
  .typeString("\n       <span style='color:rgb(var(--brancoAbsoluto))'>'CSS',</span>")
  .typeString("\n       <span style='color:rgb(var(--brancoAbsoluto))'>'JAVASCRIPT',</span>")
  .typeString("\n       <span style='color:rgb(var(--brancoAbsoluto))'>'PYTHON'</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>JAVA'</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>'ADS',</span>")
  .typeString("\n    ]")
  .typeString("\n};  ")
  .pauseFor(5000)
  .deleteAll()
  .start(); 