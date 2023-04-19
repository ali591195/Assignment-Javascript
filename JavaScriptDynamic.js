const backgroundDiv = document.getElementById('background-div')
const bandMembers = document.getElementById('band-members')
const ticketSection = document.getElementById('ticket-section')
const contact = document.getElementById('contact')
const contactInfo = document.getElementById('contact-info')
const contactForm = document.getElementById('contact-form')
const inputHolder = document.getElementById('input-holder')
const ticketDivs = document.getElementsByClassName('ticket-divs')
const bandMembersDiv = bandMembers.querySelectorAll('div')
const contactFormDiv = document.getElementsByClassName('contact-form-div')

resizeWeb()
window.addEventListener('resize', resizeWeb)

function resizeWeb() {
    let width = window.innerWidth
    if (width >= 993){
        formDiv.style.width = '900px'
    }
    else if (width > 768) {
            formDiv.style.width = '600px'
            backgroundDiv.style.paddingTop = '100px'
    }
    else if (width <= 768 && width > 601) {
        formDiv.style.width = '500px'
        formDiv.style.boxSizing = 'content-box'
        formDiv.style.margin = '0 auto'
        backgroundDiv.style.paddingTop = '50px'
        bandMembers.style.flexDirection = 'row'
        ticketSection.style.flexDirection = 'row'
        contact.style.flexDirection = 'row'
        inputHolder.style.flexDirection = 'row'
        contactInfo.style.width =  'auto' 
        contactForm.style.width = 'auto' 
        for (let key of bandMembersDiv) key.style.width = 'auto'
        for (let key of contactFormDiv) key.style.width = '48%'
        for (let key of ticketDivs) {
            key.style.width = 'auto'
            key.style.padding = '0 8px'
            key.style.marginBottom = '0'
        }
    }
    else {
        formDiv.style.width = 'auto'
        formDiv.style.boxSizing = 'border-box'
        formDiv.style.margin = '0 10px'
        bandMembers.style.flexDirection = 'column'
        ticketSection.style.flexDirection = 'column'
        contact.style.flexDirection = 'column'
        inputHolder.style.flexDirection = 'column'
        contactInfo.style.width =  '100%' 
        contactForm.style.width = '100%' 
        for (let key of bandMembersDiv) key.style.width = '100%'
        for (let key of contactFormDiv) key.style.width = '100%'
        for (let key of ticketDivs) {
            key.style.width = '100%'
            key.style.padding = '0 0 0 2.5px'
            key.style.marginBottom = '16px'
        }
        
    }
}