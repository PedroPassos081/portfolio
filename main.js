AOS.init(),
document.addEventListener("DOMContentLoaded", function() {
    const t = document.getElementById("typed-text")
      , o = "Desenvolvedor Front-end";
    let a = 0;
    !function e() {
        t.textContent += o.charAt(a),
        ++a < o.length && setTimeout(e, 150)
    }()
  });

const buttonFecharModal = document.querySelector(".fechar")
  , modalProjetos = document.querySelector(".modal");
let saibaMais = document.querySelectorAll(".saiba-mais")
  , titulo = document.querySelector(".title")
  , texto = document.querySelector(".text")
  , techs = document.querySelector(".techs")
  , modalImgProjeto = document.querySelector(".modal-img-projeto")
  , codeGithub = document.querySelector("#button-github-modal")
  , deployVercel = document.querySelector("#button-deploy-modal");

  const projetos = [{
    title: "QUIZ - O Próximo Mundo",
    src: "./dist/images/menu-digital.png",
    text: 'Este foi um site que criei para um menu de um restaurante/lanchonete que envia pedidos direto para o whatsapp',
    tech: "Feito com: Git, JS, jQuery, Bootstrap, CSS3 e HTML5.",
    code: "https://github.com/PedroPassos081/menu_virtual",
    deploy: "https://menu-virtual.vercel.app/"
}, {
    title: "Jogo da Memória - Hora de Aventura",
    src: "./dist/images/projeto_jogo_memoria.png",
    text: "Este jogo só é acessível após inserir um nickname de pelo menos 3 caracteres. Para vencer, é preciso encontrar os 10 pares. Divirta-se e jogue quantas vezes quiser!",
    tech: "Feito com: Git, CSS3, JS e HTML5.",
    code: "https://github.com/PedroPassos081/jogo-da-memoria",
    deploy: "https://jogo-da-memoria-psi-ashy.vercel.app/"
}, {
    title: "Projeto Pomodoro",
    src: "./dist/images/projeto_pomodoro.png",
    text: 'Um projeto criado para estudos, mais especificamente a técnica pomodoro onde você escolhe uma tarefa, trabalha nela por 25 minutos, faz uma pausa de 5 minutos e repete o ciclo. Após quatro ciclos, faça uma pausa mais longa. ',
    tech: "Feito com: Git, JS, CSS3 e HTML5.",
    code: "https://github.com/PedroPassos081/pomodoro",
    deploy: "https://pomodoro-tau-dusky.vercel.app/"
}, {
    title: "Página com artigos",
    src: "./dist/images/projeto_artigos.png",
    text: "Página criada com afinalidade de aprendizado sobre diversos artigos de tecnologias ",
    tech: "Feito com: React, JS, Git.",
    code: "https://github.com/PedroPassos081/ola-mundo",
    deploy: "https://ola-mundo-phi-liard.vercel.app/"
}, {
    title: "Landing Page AlphaFit",
    src: "./dist/images/projeto_alphafit.png",
    text: "Esta Landing Page é quase um clone do site da Smartf fit, fiz esse site para botar em prática meus conhecimentos em HTML e CSS",
    tech: "Feito com: HTML5 e CSS3",
    code: "https://github.com/PedroPassos081/Alpha-Fit",
    deploy: "https://alpha-fit-pedropassos081s-projects.vercel.app/"
}, {
    title: "Landing Page Advocacia",
    src: "./dist/images/projeto_advocacia.png",
    text: "Esta Landing Page criei com um desing no figma, também criado por mim, fiz esse site para botar em prática meus conhecimentos em HTML e CSS",
    tech: 'Feito com: Git, HTML5, CSS3',
    code: "https://github.com/PedroPassos081/site-escritorio-advocacia-",
    deploy: "https://site-escritorio-advocacia.vercel.app/#"
}]
  , abrirModal = ()=>{
    modalProjetos.classList.add("modal-visivel")
}
  , fecharModal = ()=>{
    modalProjetos.classList.remove("modal-visivel")
}
  , setProjeto = (e,t,o,a,c,i)=>{
    titulo.textContent = e,
    modalImgProjeto.src = t,
    texto.textContent = o,
    techs.textContent = a,
    codeGithub.href = c,
    deployVercel.href = i
}
  , activeMenu = (saibaMais.forEach((e,t)=>{
    const o = projetos[t];
    e.addEventListener("click", ()=>{
        setProjeto(o.title, o.src, o.text, o.tech, o.code, o.deploy),
        abrirModal()
    }
    )
}
),
buttonFecharModal.addEventListener("click", fecharModal),
modalProjetos.addEventListener("click", fecharModal),
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".voltar-ao-topo").addEventListener("click", function() {
        document.body.scrollTop = 0,
        document.documentElement.scrollTop = 0
    }),
    window.onscroll = function() {
        var e, t;
        e = document.querySelector(".hero"),
        t = document.querySelector(".voltar-ao-topo"),
        document.body.scrollTop > e.clientHeight || document.documentElement.scrollTop > e.clientHeight ? t.style.display = "block" : t.style.display = "none"
    }
}),
document.querySelector(".fa-bars"))
  , navMenu = document.querySelector(".header .primary-navgation")
  , menuLinks = (activeMenu.addEventListener("click", ()=>{
    activeMenu.classList.toggle("fa-x"),
    navMenu.classList.toggle("active")
}
),
document.querySelectorAll(".primary-navgation"));
for (let e = 0; e < menuLinks.length; e++)
    menuLinks[e].addEventListener("click", ()=>{
        navMenu.classList.contains("active") && (activeMenu.classList.remove("fa-x"),
        navMenu.classList.remove("active"))
    }
    );
