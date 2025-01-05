var ctvei = window.document.getElementById('veiculo')
var ctped = window.document.getElementById('pedestre')
var ctcftv = window.document.getElementById('cftv')
var ctala = window.document.getElementById('alarme')
var ctcer = window.document.getElementById('cerca')
// ct é conteúdo
var ivei = window.document.getElementById('portao')
var iped = window.document.getElementById('porta')
var icftv = window.getElementById('')
var iala = window.getElementById('')
var icer = window.getElementById('')
// i é imagem 


function oncar () {
    ctvei.innerHTML = '<p>Aqui vamos colocar as descrições das manutenções</p>'
    ctvei.style.textAlign = 'justify'
    ctvei.style.textIndent = '20px'
    ivei.src = '../imagens/motor.jpg'
}
function offcar() {
    ctvei.innerHTML = '<p>Aqui veremos os gabaritos de manutenções de <strong>motores</strong>, centrais <strong>automatizadoras (placas)</strong> e seus acessórios, como por exemplo, uma <strong>fotocélula</strong>.</p>'
    ctvei.style.textAlign = 'justify'
    ctvei.style.textIndent = '20px'
    ivei.src = ''
}

function onped () {
    ctped.innerText = 'Aqui vamos colocar as descrições das manutenções'
    ctped.style.textAlign = 'justify'
    ctped.style.textIndent = '20px'
    iped.src = '/imagens/camera.btn.png'
}
function offped () {
    ctped.innerHTML = '<p>Aqui veremos os gabaritos de manutenções dos <strong>controles de acesso</strong>, como o Módulo Guarita, <strong>leitores</strong>, <strong>fechaduras</strong> e seus acessórios.</p>'
    ctped.style.textAlign = 'justify'
    ctped.style.textIndent = '20px'
    iped.src = ''
}

function oncctv () {
    ctcftv.innerText = 'Clicou cftv'
}
function offcctv () {
    
}

function onalarm () {
    ctala.innerText = 'Clicou alarme'
}
function offalarm () {
    
}

function oneletric () {
    ctcer.innerText = 'Clicou cer'
}
function offeletric () {
    
}

