const totalHeigth = document.documentElement.scrollHeight
const viewportHeigth = document.documentElement.clientHeight
const scrollUnit = (totalHeigth - viewportHeigth) / 100
const rootStyleOpacity = document.documentElement.style

addEventListener('scroll', () =>    {
    rootStyleOpacity.setProperty('--opacity', (Math.round(scrollY / scrollUnit)) / 40)
    // console.log((Math.round(scrollY / scrollUnit)) / 40)
})


