function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA !
        img.src = 'foto-manha.png'
        document.body.style.background = '#c4bc75'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'foto-tarde.png';
        document.body.style.background = '#3496e7'
    } else {
        // BOA NOITE !
        img.src = 'foto-noite.png'
        document.body.style.background = '#3e3e5a'
    }
}
