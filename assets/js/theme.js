const changeThemeButtons = document.querySelectorAll('[name=theme]')
const themeBody = document.querySelector('#body')
const checkInput = document.getElementById('check')
const themeMode = localStorage.getItem('theme-mode')


if(themeMode === null) {
	themeBody.className = 'dark-theme'
} else {
	themeBody.className =  themeMode
}

if(themeMode === 'light-theme') checkInput.checked = true

for(let button of changeThemeButtons) {
	button.addEventListener('change', e => {
		e.preventDefault()
		if (document.getElementById('check').checked) 
		{
			themeBody.className = ('light-theme')
			localStorage.setItem('theme-mode', 'light-theme')	
		} else {
			
			themeBody.className = ('dark-theme')
			localStorage.setItem('theme-mode', 'dark-theme')	
		}
	})
}

