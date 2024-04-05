// sidebar

const menuItems = document.querySelectorAll('.menu-item')

const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')

var root = document.querySelector(':root')

const changeActiveItem = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem()
        item.classList.add('active')
        if(item.id != 'notifications')
        {
          document.querySelector('.notification-popup').style.display = 'none'
        }
        else
        {
          document.querySelector('.notification-popup').style.display = 'block'
          document.querySelector('#notifications .notification-count').style.display='none'
        }
    })
})

// masseges 
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message') //1
const messageSearch = document.querySelector('#message-search')//2
const messagesNotification = document.querySelector('#messages-notification')

//search


//dearches chats

const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    console.log(val)
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1)
    {
        chat.style.display = 'flex';
    }
    else
    {
        chat.style.display = 'none';
    }
    })
}


//search chat
messageSearch.addEventListener('keyup',searchMessage)


//show when message card when clicled


messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = ' 0 0 1rem var(--color-primary)'
    document.querySelector('.notification-count').style.display='none'
    setTimeout(()=>{
        messages.style.boxShadow = 'none'
    },2000)
})



// theme costome

const openThemeModal = () =>{
themeModal.style.display='grid';
}

const closeThemeModel = (e) =>{
    if(e.target.classList.contains('customize-theme'))
    themeModal.style.display='none'
}

themeModal.addEventListener('click',closeThemeModel)
theme.addEventListener('click',openThemeModal)


const fontSizes = document.querySelectorAll('.choose-size span')

fontSizes.forEach(size =>{ 
    let fontSize

    size.addEventListener('click',()=>{
    if(size.classList.contains('font-size-1'))
    {
        fontSize = '10px'
        root.style.setProperty('--sticky-top-left','5.4rem')
        root.style.setProperty('--sticky-top-right','5.4rem')
    } 
    else if(size.classList.contains('font-size-2'))
    {
        fontSize = '13px'
        root.style.setProperty('--sticky-top-left','5.4rem')
        root.style.setProperty('--sticky-top-right','-7rem')
    } 
    else if(size.classList.contains('font-size-3'))
    {
        fontSize = '16px'
        root.style.setProperty('--sticky-top-left','-2rem')
        root.style.setProperty('--sticky-top-right','-17rem')
    } 
    else if(size.classList.contains('font-size-4'))
    {
        fontSize = '19px'
        root.style.setProperty('--sticky-top-left','-5rem')
        root.style.setProperty('--sticky-top-right','-25rem')
    } 
    elseif(size.classList.contains('font-size-5'))
    {
        fontSize = '22px'
        root.style.setProperty('--sticky-top-left','-12rem')
        root.style.setProperty('--sticky-top-right','-35rem')
    } 
    document.querySelector('html').style.fontSize=fontSize
    })
    
   
    
})