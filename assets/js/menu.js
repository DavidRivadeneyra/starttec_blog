const showMenu = (toggleId, navId, itemId) => {
  const toggle = document.getElementById(toggleId),
        nav    = document.getElementById(navId),
        item   = document.getElementById(itemId)
  if(toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active'),
      nav.classList.toggle('active')
    })
  } 
  if(toggle && nav)  {
    item.addEventListener('click', () => {
      toggle.classList.remove('active'),
      nav.classList.remove('active')
    })
  }
}

showMenu('main-header__mobile','main-menu', 'item', 'check')
