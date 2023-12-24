// Get references to the menu button and menu elements
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

// Get references to the link input, link form, and error message elements
const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

// Add click event listener to the menu button for mobile menu toggle
btn.addEventListener('click', navToggle)

// Add submit event listener to the link form for form submission
linkForm.addEventListener('submit', formSubmit)

// Toggle Mobile Menu
function navToggle() {
    // Toggle the 'open' class on the menu button
    btn.classList.toggle('open')
        // Toggle between 'flex' and 'hidden' classes on the menu
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

// Function to handle form submission
function formSubmit(e) {
    // Prevent the default form submission behavior
    e.preventDefault()

    // Check if the input value is empty
    if (input.value === '') {
        // Display an error message if the input is empty
        errMsg.innerHTML = 'Please enter something'
            // Add 'border-red' class to highlight the input with red border
        input.classList.add('border-red')
    } else if (!validURL(input.value)) {
        // Check if the input value is a valid URL
        // Display an error message if it's not valid
        errMsg.innerHTML = 'Please enter a valid URL'
            // Add 'border-red' class to highlight the input with red border
        input.classList.add('border-red')
    } else {
        // If input is not empty and is a valid URL, reset error message and styles
        errMsg.innerHTML = ''
        input.classList.remove('border-red')
            // Show a success alert (you might want to replace this with your actual success handling)
        alert('Success')
    }
}