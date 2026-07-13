// Strukturierte Datenbasis (Streng sachlich)
const db = {
    "blut": {
        "warning": "WICHTIG: Niemals warmes oder heißes Wasser verwenden. Eiweiß gerinnt durch Hitze und fixiert den Fleck dauerhaft im Gewebe.",
        "baumwolle": [
            {
                "title": "1. Kaltes Wasser",
                "summary": "Den Fleck sofort unter fließendem, eiskaltem Wasser von der Rückseite ausspülen. Anschließend in kaltem Wasser einweichen.",
                "steps": ["Den Stoff wenden.", "Unter fließendem, kalten Wasser ausspülen.", "Das Kleidungsstück für 30 Minuten in kaltes Wasser legen."],
                "timer": 30
            },
            {
                "title": "2. Kochsalzlösung",
                "summary": "Gewebe mit einer kalten Kochsalzlösung behandeln, um angetrocknetes Blut zu lösen. Danach gründlich auswaschen.",
                "steps": ["Zwei Esslöffel Salz in einem Liter kaltem Wasser auflösen.", "Den Fleck 15 Minuten darin einweichen.", "Mit klarem, kalten Wasser ausspülen."],
                "timer": 15
            },
            {
                "title": "3. Gallseife",
                "summary": "Flüssige oder angefeuchtete Gallseife direkt auf den Fleck auftragen und einarbeiten. Vor dem Waschgang einwirken lassen.",
                "steps": ["Fleck mit kaltem Wasser anfeuchten.", "Gallseife direkt auf den Fleck auftragen und vorsichtig einreiben.", "10 Minuten einwirken lassen, danach normal waschen."],
                "timer": 10
            }
        ],
        "seide": [
            {
                "title": "1. Kalt abtupfen",
                "summary": "Den Fleck ohne Druck mit einem feuchten, kalten Tuch abtupfen. Niemals reiben, da sonst die Fasern beschädigt werden.",
                "steps": ["Ein weißes, sauberes Tuch mit kaltem Wasser befeuchten.", "Den Fleck vorsichtig von außen nach innen abtupfen.", "Mit einem trockenen Tuch nachdrücken, um Feuchtigkeit aufzunehmen."]
            },
            {
                "title": "2. Alkohol-Methode",
                "summary": "Reinen Alkohol auf ein Wattepad geben und den Fleck damit vorsichtig abtupfen. Löst die Eiweißstrukturen ohne Hitze.",
                "steps": ["Ein Wattepad mit reinem Alkohol befeuchten.", "Den Blutfleck ohne Druck abtupfen.", "Mit kaltem Wasser nachreinigen."]
            },
            {
                "title": "3. Backpulver-Paste",
                "summary": "Eine dicke Paste aus Backpulver und kaltem Wasser anrühren und auflegen. Nach der Einwirkzeit trocken abheben.",
                "steps": ["Backpulver mit wenigen Tropfen kaltem Wasser zu einer dicken Paste mischen.", "Die Paste vorsichtig auf den Fleck auftragen.", "20 Minuten einwirken lassen, danach mit kaltem Wasser abtupfen."],
                "timer": 20
            }
        ]
    },
    "kaffee": {
        "warning": "WICHTIG: Den Fleck nicht eintrocknen lassen. Eingetrocknete Gerbstoffe fixieren sich in den Fasern und sind schwer entfernbar.",
        "baumwolle": [
            {
                "title": "1. Fließendes Wasser",
                "summary": "Den frischen Kaffeefleck sofort unter fließendem, lauwarmem Wasser von der Rückseite des Gewebes ausspülen.",
                "steps": ["Das Kleidungsstück auf links drehen.", "Unter fließendem Wasser ausspülen, bis die Färbung verschwindet."]
            },
            {
                "title": "2. Backpulver",
                "summary": "Backpulver auf den noch feuchten Fleck streuen. Das Pulver bindet die Farbstoffe und zieht sie aus der Faser.",
                "steps": ["Fleck leicht mit Wasser anfeuchten.", "Backpulver direkt aufstreuen.", "15 Minuten einwirken lassen, danach gründlich ausspülen."],
                "timer": 15
            },
            {
                "title": "3. Spülmittel",
                "summary": "Farbloses Spülmittel direkt auf den Fleck auftragen, um die Fette und Gerbstoffe zu lösen. Kurz einwirken lassen.",
                "steps": ["Einige Tropfen farbloses Spülmittel auf den Fleck geben.", "Vorsichtig mit den Fingern einmassieren.", "5 Minuten einwirken lassen und mit warmem Wasser ausspülen."],
                "timer": 5
            }
        ],
        "seide": [
            {
                "title": "1. Lauwarm abtupfen",
                "summary": "Den Fleck umgehend mit einem sauberen, lauwarmen und feuchten Tuch von außen nach innen abtupfen.",
                "steps": ["Ein weiches Tuch mit lauwarmem Wasser befeuchten.", "Den Fleck ohne Druck abtupfen, um Ausbreitung zu verhindern."]
            },
            {
                "title": "2. Reiner Alkohol",
                "summary": "Etwas reinen Alkohol auf ein Tuch geben und den Fleck vorsichtig abtupfen, um die Kaffeerückstände zu lösen.",
                "steps": ["Alkohol auf ein sauberes Tuch dosieren.", "Den Kaffeefleck sanft abtupfen.", "Mit einem trockenen Tuch restliche Feuchtigkeit aufsaugen."]
            },
            {
                "title": "3. Glycerin",
                "summary": "Flüssiges Glycerin auf den Fleck träufeln, um eingetrocknete Partikel zu lockern. Nach der Einwirkzeit abtupfen.",
                "steps": ["Einige Tropfen flüssiges Glycerin auf den Fleck auftragen.", "10 Minuten einwirken lassen.", "Mit lauwarmem Wasser und einem Tuch vorsichtig abtupfen."],
                "timer": 10
            }
        ]
    }
};

// UI Elemente
const homeView = document.getElementById('home-view');
const resultView = document.getElementById('result-view');
const filterForm = document.getElementById('filter-form');
const stainSelect = document.getElementById('stain-select');
const materialSelect = document.getElementById('material-select');
const warningBanner = document.getElementById('warning-banner');
const warningText = document.getElementById('warning-text');
const solutionsContainer = document.getElementById('solutions-container');
const backBtn = document.getElementById('back-btn');

// Formular-Aktion (Ergebnis anzeigen)
filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const stain = stainSelect.value;
    const material = materialSelect.value;

    if (stain && db[stain] && db[stain][material]) {
        renderResults(stain, material);
    }
});

// Zurück zur Startseite
backBtn.addEventListener('click', () => {
    resultView.classList.add('hidden');
    homeView.classList.remove('hidden');
});

// Ergebnisse rendern
function renderResults(stain, material) {
    const data = db[stain];
    const cards = data[material];

    // Warnung anzeigen
    if (data.warning) {
        warningText.textContent = data.warning;
        warningBanner.classList.remove('hidden');
    } else {
        warningBanner.classList.add('hidden');
    }

    // Container leeren
    solutionsContainer.innerHTML = '';

    // 3 Karten generieren
    cards.forEach((cardData) => {
        const card = document.createElement('div');
        card.className = 'card';

        let stepsHtml = cardData.steps.map(step => `<li>${step}</li>`).join('');
        let timerHtml = cardData.timer 
            ? `<button class="timer-btn" data-minutes="${cardData.timer}">Timer starten (${cardData.timer} Min.)</button>` 
            : '';

        card.innerHTML = `
            <div class="card-title">${cardData.title}</div>
            <div class="card-summary">${cardData.summary}</div>
            <div class="card-details">
                <ol>${stepsHtml}</ol>
                ${timerHtml}
            </div>
        `;

        // Akkordeon-Interaktion
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('timer-btn')) return; // Timer-Klick ignorieren
            card.classList.toggle('open');
        });

        // Timer-Logik
        if (cardData.timer) {
            const timerBtn = card.querySelector('.timer-btn');
            timerBtn.addEventListener('click', () => startTimer(timerBtn, cardData.timer));
        }

        solutionsContainer.appendChild(card);
    });

    // Ansichten wechseln
    homeView.classList.add('hidden');
    resultView.classList.remove('hidden');
}

// Timer-Funktion
function startTimer(button, minutes) {
    if (button.classList.contains('running')) return;
    
    button.classList.add('running');
    let secondsLeft = minutes * 60; // Zum Testen hier z.B. "minutes = 0.1" für 6 Sekunden nutzen

    const interval = setInterval(() => {
        secondsLeft--;
        let min = Math.floor(secondsLeft / 60);
        let sec = secondsLeft % 60;
        button.textContent = `Warten: ${min}:${sec < 10 ? '0' : ''}${sec}`;

        if (secondsLeft <= 0) {
            clearInterval(interval);
            button.classList.remove('running');
            button.textContent = "Timer beendet";
            playNotificationSound();
        }
    }, 1000);
}

// Sound-Erzeugung via Web Audio API (Funktioniert sofort offline ohne Mediendatei)
function playNotificationSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // 3 aufeinanderfolgende Pieptöne erzeugen
        [0, 0.2, 0.4].forEach((delay) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, audioCtx.currentTime + delay); // Tonhöhe
            
            gain.gain.setValueAtTime(0.3, audioCtx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + delay + 0.15); // Ausklingen
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start(audioCtx.currentTime + delay);
            osc.stop(audioCtx.currentTime + delay + 0.15);
        });
    } catch (e) {
        console.error("Audio-Fehler:", e);
    }
}

// Service Worker Registrierung
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registriert'))
            .catch(err => console.log('Service Worker Fehler', err));
    });
}
