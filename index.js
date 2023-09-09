const btn = document.querySelectorAll('.btn')
const foot = document.querySelector('.foot')
const normal = document.querySelector('.normal')
const active = document.querySelector('.active')
const desktopbox = document.querySelector('.desktopbox')

const media = window.matchMedia('(min-width: 900px)')

let isAct = false

function appear(object) {
  object.style.maxHeight = "1000px"
  object.querySelectorAll('*').forEach(function(child) {
    child.style.opacity = "1"
  })

}

function hidden(object) {
  object.style.maxHeight = "0px"
  object.querySelectorAll('*').forEach(function(child) {
    child.style.opacity = '0'
  })



}

function default_style() {
  appear(normal)
  hidden(active)
  foot.style.backgroundColor = "white"
  isAct = false
  document.querySelector('.normal .btn img').src = "./images/icon-actshare.svg"
  normal.querySelector('.btn').style.backgroundColor = "hsl(210, 46%, 95%)"
  desktopbox.style.opacity = "0"
}

function mobileHidden() {
  isAct = !isAct
  console.log(isAct)

  if (isAct) {
    appear(active)
    hidden(normal)

    foot.style.backgroundColor = "hsl(217, 19%, 35%)"
  }
  else {
    appear(normal)
    hidden(active)

    foot.style.backgroundColor = "white"


  }


}

function desktopHidden() {
  isAct = !isAct
  console.log('deskbtn is clicked')

  if (isAct) {
    desktopbox.style.opacity = "0.96"
    document.querySelector('.normal .btn img').src = "./images/icon-share.svg"
    normal.querySelector('.btn').style.backgroundColor = "hsl(214, 17%, 51%)"


  }
  else {

    desktopbox.style.opacity = "0"
    document.querySelector('.normal .btn img').src = "./images/icon-actshare.svg"
    normal.querySelector('.btn').style.backgroundColor = "hsl(210, 46%, 95%)"
  }
}

function mediaChange() {
  if (!media.matches) {
    // mobile work
    default_style()

    desktopbox.style.display = "none"

    btn.forEach(function(item) {
      item.removeEventListener('click', desktopHidden)

    })

    btn.forEach(function(item) {

      item.addEventListener('click', mobileHidden)


    })
  }
  else {
    // desktop work
    default_style()
    desktopbox.style.display = "flex"

    btn.forEach(function(item) {
      item.removeEventListener('click', mobileHidden)
    })
    btn.forEach(function(item) {


      item.addEventListener('click', desktopHidden)



    })
  }
}


mediaChange()

media.addEventListener('change', mediaChange)


