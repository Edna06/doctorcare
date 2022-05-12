// String (textos)
// Number (número)
// Boolean (true | false)

// if = se
//  else = se não

// funcionalidade para tirar a função scroll do html , colocsndo o comando na window inteira
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  //tem a função de gerenciar os diversos scrolls
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2
  // usei const poque não quero que o valor mude, se eu quisesse que o valor variasse, eu usaria let (estado da aplicação é outro)

  // quais dados vou precisar?

  //o topo da seção
  const sectionTop = section.offsetTop
  //início

  //a altura da seção
  const sectionHeight = section.offsetHeight
  //fim

  // verificação se a aplicação passou da linha

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // informações dos dados e da lógica
  console.log(
    'o topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetline
  )

  //verificar se a base está abaixo da linha imaginária
  //quais dados vou precisar?

  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline =
    sectionEndsAt <= //se ele está abaixo ou igual
    targetLine

  console.log('o fundo da seção passou da linha?', sectionEndPassedTargetline)

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
  //operador que significa que os dois lados tem que serem verdadeiros para o const ser true, caso contrário ele será false

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) //pesquisa pelo seletor

  menuElement.classList.remove('active') //primeiro remove para depois adicionar 
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

// mostra o navigation ao fazer o scroll
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

// funcionalidade de mostrar o botão back to top
function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img,
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)
