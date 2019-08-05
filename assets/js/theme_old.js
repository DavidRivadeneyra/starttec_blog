const changeThemeButtons = document.querySelectorAll('[name=theme]')
// const rootStyles = document.documentElement.style
const rootStyles = document.body.style


const ligthTheme = {
    '--light-color': "#F7F9F9",
	'--dark-color': "#292F36"
}

const darkTheme = {
    '--light-color': "#292F36",
    '--dark-color': "#F7F9F9"
}

for(let button of changeThemeButtons) {
	button.addEventListener('change', e => {
		if (document.getElementById('check').checked) 
		{
			changeTheme(darkTheme)
		} else {
			changeTheme(ligthTheme)
			
		}
	})
}

const changeTheme = theme => {
	let cssVars = Object.keys(theme) 
	for (cssVar of cssVars) {
		rootStyles.setProperty(cssVar, theme[cssVar])		
	}
}

let saludar = "Hola Mundo!"
console.log(saludar)