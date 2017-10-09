(() => {
    const container = document.getElementById('sessions');

    if ('fetch' in window) {
        fetch('data.json').then(response => {
            if (!response.ok) {
                throw Error("Ton fichier n'existe pas")                
            }

            return response.json();              
        }).then(json => {
            json.meetup
                .map(c => c.type)
                .filter((elem, pos, others) => others.indexOf(elem) == pos)
                .forEach(c => {
                    renderCategory(container, {
                        type: c,
                        meetups: json.meetup.filter(m => m.type === c)
                    }
                );
            });
        }).catch(error => {
            alert(`Error ${error}`)
        })
    } else {
        alert("Y'a pas fetch mec")
    }
})();



function renderMeetup(meetup) {
    return `
        <li><b>${meetup.title}</b> : ${meetup.attendees.join(', &nbsp')}</li>
    `
}

function renderCategory(container, data) {
    const meetups = data.meetups.map(m => renderMeetup(m));

    const child = document.createElement('div');
    child.innerHTML = `
        <h2>${data.type}</h2>
        <ul>
            ${meetups.join('')}</li>
        </ul`;

    container.appendChild(child);
}
