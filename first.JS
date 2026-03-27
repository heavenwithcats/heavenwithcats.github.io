const jartext = document.querySelector('.h')
const jartext2 = document.querySelector('.he')
const jartext3 = document.querySelector('.hi')
function changecolor() {
    this.style.color = "rgb(245, 180, 83) "
}
jartext.addEventListener('mouseover', changecolor)

function changecolors() {
    this.style.color = "#003249"
}
jartext.addEventListener('mouseout', changecolors);
jartext2.addEventListener('mouseover', changecolor);
jartext2.addEventListener('mouseout', changecolors);
jartext3.addEventListener('mouseover', changecolor);
jartext3.addEventListener('mouseout', changecolors);