const API = {
    fetchAPI: filename => fetch(`https://raw.githubusercontent.com/DevInstitut/conference-data/master/${filename}.json`).then(response => {
            if (!response.ok) throw Error(`Can't access ${filename}`)                
            return response.json()
        }).catch(error => alert(`Error ${error}`)),

    fetchSessions: () => API.fetchAPI('sessions'),
    fetchSpeakers: () => API.fetchAPI('speakers'),
    fetchSession: id => API.fetchSessions().then(sessions => sessions[id]),
    fetchSpeaker: id => API.fetchSpeakers().then(speakers => speakers[id]),
};


(() => {
    'use strict';

    // if (!('serviceWorker' in navigator)) {
    //     console.log('Service worker non supporté'); return;
    // }

    // navigator.serviceWorker.register('service-worker.js')
    //     .then(() => {
    //         console.log('Enregistrement OK');
    //         navigator.serviceWorker.onmessage = function (event) {
    //             console.log("Reçu du SW : ", event.data);
    //         }
    //         // envoyer un message au service worker
    //         if (navigator.serviceWorker.controller) {
    //             // navigator.serviceWorker.controller.postMessage({
    //             //     "command": "MISE_A_JOUR",
    //             //     "message": "Hello je suis un client"
    //             // });
    //         }
    //     })
    //     .catch(error => {
    //         console.log('Enregistrement KO :', error);
    //     });
    



    const main = document.getElementById('main');

    if ('fetch' in window) {
        showSessions();
    } else {
        alert("Please update browser")
    }
})();



///////////////////////////////
///////// SESSIONS ////////////
///////////////////////////////

function showSessions() {
    API.fetchSessions().then(json => {
        const categories = [];
        const sessions = [];
        for (let i in json) {
            sessions.push(json[i]);
            if (!categories.includes(json[i].type)) {
                categories.push(json[i].type);
            }
        }
        categories.forEach(c =>
            renderSessionsList(main, {
                type: c,
                meetups: sessions.filter(m => m.type === c)
            }
        ));
    })
}

function renderSessionsList(container, data) {
    const sessionsHtmlList = data.meetups.map(session => renderSessionList(session)).join('');
    const child = document.createElement('div');

    child.innerHTML = `
        <h2>${data.type}</h2>
        <ul>
            ${sessionsHtmlList}
        </ul>`;

    container.appendChild(child);
}


function renderSessionList(session) {
    return `
        <li><b>${session.title}</b> | <button onclick="showSessionFull(${session.id})">voir plus</button></li>
    `
}


function renderSpeakerList(speaker) {
    return `
        <li><b>${speaker.name}</b> | <button onclick="showSpeaker(${speaker.id})">voir plus</button></li>
    `
}


function showSessionFull(id) {
    API.fetchSession(id).then(session => {
        API.fetchSpeakers().then(speakers => {
            const speakersHtmlList = session.speakers.map(id => renderSpeakerList(speakers[id])).join('');
            main.innerHTML = `
                <h2>${session.title}</h2>
                <p>${session.description}</p>
                <div>
                    Speakers:
                    <ul>
                        ${speakersHtmlList}
                    </ul>
                </div>
            `;
        });
    });
}

function showSpeaker(id) {
    API.fetchSpeaker(id).then(speaker => {
        main.innerHTML = `
        <h2>${speaker.name}</h2>
        <p>${speaker.shortBio}</p>
        `
    })
}