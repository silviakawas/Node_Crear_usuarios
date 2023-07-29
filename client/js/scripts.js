const formElement = document.getElementById('form');


formElement.addEventListener('submit', (event)=>{
    event.preventDefault();

    fetch('http://localhost:3000/api/users/create', {
        method: 'POST',
        body: JSON.stringify({
            title: event.target.title.value,
            name: event.target.name.value,
            age: event.target.age.value,
            username: event.target.username.value,
            email: event.target.email.value
        }),
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        }
        
    });
});