var textoanimado = document.querySelector('.sobre__textoanimado_conteudo');

console.log('Até TW');
var typewriter = new Typewriter(textoanimado, {
  loop: true,
  delay: 50,
  deleteSpeed: 0,
});

typewriter
  .typeString("<span style='color:#be8ee4'>var </span>Abner  = {")
  .typeString("\n    id: <span style='color:rgb(var(--cor-tema))'>'Determinado',</span>")
  .typeString("\n    skin: <span style='color:rgb(var(--cor-tema))'>'Desenvolvedor Front-End',</span>")
  .typeString("\n    objetivo: <span style='color:rgb(var(--cor-tema))'>'Ser um dos melhores',</span>")
  .typeString("\n    cursando: [")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>'HTML',</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>'CSS',</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>'JAVASCRIPT',</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>'Análise e</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>Desenvolvimento</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>de Sistemas',</span>")
  .typeString("\n    ]")
  .typeString("\n};  ")
  .pauseFor(5000)
  .deleteAll()
  .start(); 