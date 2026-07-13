// Strukturierte Datenbasis (Streng sachlich und lückenlos detailliert)
const db = {
    "blut": {
        "warning": "Niemals warmes oder heißes Wasser verwenden. Proteine im Blut gerinnen ab circa 42°C, verbinden sich dauerhaft mit der Faser und machen die Fleckentfernung unmöglich.",
        "baumwolle": [
            {
                "title": "1. Mechanische Kaltwasserspülung",
                "summary": "Den Fleck unmittelbar unter fließendem, eiskaltem Wasser von der Rückseite ausdrucksvoll ausspülen.",
                "steps": [
                    "Wenden Sie das Kleidungsstück auf die Innenseite (auf links), damit das Blut aus dem Gewebe herausgedrückt wird, statt hindurch.",
                    "Halten Sie die betroffene Stelle unter einen harten Strahl fließenden, eiskalten Leitungswassers.",
                    "Legen Sie das Textil anschließend für exakt 30 Minuten in eine Schüssel mit kaltem, klarem Wasser, ohne Reinigungsmittel zuzufügen."
                ],
                "timer": 30
            },
            {
                "title": "2. Sättigung mit Kochsalzlösung",
                "summary": "Gewebe mit einer kalten, hochkonzentrierten Salzlösung behandeln, um angetrocknete Bestandteile aufzuspalten.",
                "steps": [
                    "Geben Sie zwei gehäufte Esslöffel feines Speisesalz in einen Liter kaltes Leitungswasser und rühren Sie, bis es vollständig aufgelöst ist.",
                    "Tauchen Sie den Fleckenbereich komplett in diese Lösung ein.",
                    "Lassen Sie das Textil für 15 Minuten einweichen.",
                    "Spülen Sie die Salzlösung danach mit kaltem, fließendem Wasser vollständig aus."
                ],
                "timer": 15
            },
            {
                "title": "3. Punktuelle Gallseifen-Einarbeitung",
                "summary": "Flüssige Seife direkt auf den Fleck applizieren und mechanisch ohne Reibungswärme einarbeiten.",
                "steps": [
                    "Feuchten Sie den Bereich mit kaltem Wasser an.",
                    "Tragen Sie flüssige Gallseife unverdünnt direkt auf den Blutfleck auf.",
                    "Massieren Sie die Seife ausschließlich mit den sauberen Fingerspitzen in kreisenden Bewegungen von außen nach innen ein.",
                    "Lassen Sie die Seife exakt 10 Minuten einwirken, bevor Sie das Kleidungsstück im regulären Waschgang der Waschmaschine reinigen."
                ],
                "timer": 10
            }
        ],
        "seide": [
            {
                "title": "1. Isoliertes Kaltabtupfen",
                "summary": "Fleck ohne Ausdehnung und ohne Druck punktuell mit einem ungefärbten Tuch abtupfen.",
                "steps": [
                    "Nutzen Sie ein sauberes, rein weißes, absolut fusselfreies Baumwolltuch oder ein ungefärbtes Mikrofasertuch.",
                    "Feuchten Sie eine Ecke des Tuches mit eiskaltem Wasser an.",
                    "Tupfen Sie den Fleck ohne Druck ausschließlich von den Außenrändern hin zur Mitte ab. Reiben Sie niemals, da sonst die empfindlichen Seidenfilamente aufrauen und dauerhaft stumpf werden.",
                    "Drücken Sie ein trockenes Element desselben Tuches auf die nasse Stelle, um gelöste Pigmente direkt aufzusaugen."
                ]
            },
            {
                "title": "2. Präzise Alkohol-Behandlung",
                "summary": "Reinen Alkohol mittels Wattepad auftragen, um die Eiweißstrukturen materialschonend zu spalten.",
                "steps": [
                    "Tränken Sie ein sauberes Wattepad mit reinem Isopropylalkohol oder Weingeist aus der Apotheke.",
                    "Tupfen Sie den Fleck sanft ab. Der Alkohol löst Rückstände, ohne das Gewebe aufzuquellen.",
                    "Wechseln Sie das Wattepad, sobald es Verfärbungen aufnimmt, um eine Fleckenübertragung zu verhindern.",
                    "Tupfen Sie die Stelle abschließend mit einer mit kaltem Wasser angefeuchteten Tuchteilen nach."
                ]
            },
            {
                "title": "3. Rückstandsfreie Backpulver-Paste",
                "summary": "Eine kalte Paste anrühren, auftragen und nach der Einwirkzeit mechanisch abheben.",
                "steps": [
                    "Mischen Sie herkömmliches Backpulver mit wenigen Tropfen eiskaltem Wasser in einem kleinen Gefäß zu einer dickflüssigen Paste.",
                    "Streichen Sie die Paste vorsichtig mit der Rückseite eines Löffels flach auf den Fleck auf.",
                    "Lassen Sie die Paste exakt 20 Minuten unberührt einwirken.",
                    "Heben Sie die getrocknete Paste mit der Kante des Löffels vorsichtig ab und tupfen Sie Reste mit einem leicht feuchten, kalten Tuch ab."
                ],
                "timer": 20
            }
        ]
    },
    "kaffee": {
        "warning": "Den Fleck unter keinen Umständen eintrocknen lassen. Im Kaffee enthaltene Gerbstoffe oxidieren an der Luft und verbinden sich untrennbar mit der Faserstruktur.",
        "baumwolle": [
            {
                "title": "1. Thermische Rückspülung",
                "summary": "Den frischen Kaffeefleck unmittelbar mit lauwarmem Wasser von der Geweberückseite neutralisieren.",
                "steps": [
                    "Drehen Sie das Textil sofort auf links.",
                    "Spülen Sie den Fleck mit fließendem, lauwarmem Leitungswasser aus, bis im abfließenden Wasser keine Braunfärbung mehr sichtbar ist."
                ]
            },
            {
                "title": "2. Trockenbindung durch Backpulver",
                "summary": "Pulver auf den feuchten Fleck aufbringen, um Farbstoffe kapillar aus der Faser zu ziehen.",
                "steps": [
                    "Befeuchten Sie die betroffene Stelle minimal mit Wasser, falls sie bereits angetrocknet ist.",
                    "Streuen Sie eine deckende Schicht Backpulver direkt auf den Fleck.",
                    "Lassen Sie das Pulver 15 Minuten einwirken, während es die Gerbstoffe bindet.",
                    "Spülen Sie das Pulver anschließend von Hand unter fließendem Wasser vollständig aus."
                ],
                "timer": 15
            },
            {
                "title": "3. Tensid-Anwendung",
                "summary": "Farbloses Spülmittel einsetzen, um Gerbstoffe und Kaffeefette strukturell zu lösen.",
                "steps": [
                    "Tragen Sie einige Tropfen eines absolut farblosen, handelsüblichen Handspülmittels direkt auf den Fleck auf.",
                    "Verreiben Sie das Spülmittel sanft mit den Fingern, bis ein leichter Schaum entsteht.",
                    "Lassen Sie das Tensid 5 Minuten einwirken.",
                    "Waschen Sie das Kleidungsstück mit warmem Wasser gründlich aus."
                ],
                "timer": 5
            }
        ],
        "seide": [
            {
                "title": "1. Isoliertes Feuchtabtupfen",
                "summary": "Fleck umgehend mit lauwarmem Wasser und einem sauberen Tuch von außen nach innen abtupfen.",
                "steps": [
                    "Nutzen Sie ein weiches, weißes Baumwoll- oder Mikrofasertuch.",
                    "Feuchten Sie dieses mit lauwarmem Wasser an.",
                    "Tupfen Sie den Kaffeefleck flach und ohne Reibung von den Rändern zur Mitte ab, um ein Auslaufen des Flecks in die Breite zu verhindern."
                ]
            },
            {
                "title": "2. Lösung mittels Alkohol",
                "summary": "Reinen Alkohol punktuell einsetzen, um Kaffeerückstände materialschonend zu lösen.",
                "steps": [
                    "Dosieren Sie eine kleine Menge reinen Alkohol auf ein sauberes, trockenes Tuch.",
                    "Tupfen Sie den Fleck sanft ab, bis die Farbpartikel vollständig in das Reinigungstuch übergegangen sind.",
                    "Drücken Sie ein trockenes, sauberes Tuchstück nach, um die Feuchtigkeit restlos zu entziehen."
                ]
            },
            {
                "title": "3. Flüssige Glycerin-Lockerung",
                "summary": "Flüssiges Glycerin auftragen, um eingetrocknete Gerbstoffe aufzuweichen.",
                "steps": [
                    "Träufeln Sie flüssiges Glycerin (aus der Apotheke) direkt auf den Fleck.",
                    "Lassen Sie die Flüssigkeit für exakt 10 Minuten ruhen, um die Fasern zu durchdringen.",
                    "Nehmen Sie ein sauberes, feuchtes Tuch und tupfen Sie das Glycerin mitsamt den gelösten Kaffeerückständen vorsichtig ab."
                ],
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
const darkmodeToggle = document.getElementById('darkmode-toggle');
const themeColorMeta = document.getElementById('theme-color-meta');

// --- DARKMODE LOGIK ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateMetaThemeColor(savedTheme);
}

darkmodeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateMetaThemeColor(newTheme);
});

function updateMetaThemeColor(theme) {
    if (theme === 'dark') {
        themeColorMeta.setAttribute('content', '#181b22');
    } else {
        themeColorMeta.setAttribute('content', '#eef2f7');
    }
}

initTheme();

// --- ROUTING & LOGIK ---
filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const stain = stainSelect.value;
    const material = materialSelect.value;

    if (stain && db[stain] && db[stain][material]) {
        renderResults(stain, material);
    }
});

backBtn.addEventListener('click', () => {
    resultView.classList.add('hidden');
    homeView.classList.remove('hidden');
});

function renderResults(stain, material) {
    const data = db[stain];
    const cards = data[material];

    if (data.warning) {
        warningText.textContent = data.warning;
        warningBanner.classList.remove('hidden');
    } else {
        warningBanner.classList.add('hidden');
    }

    solutionsContainer.innerHTML = '';

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

        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('timer-btn')) return;
            card.classList.toggle('open');
        });

        if (cardData.timer) {
            const timerBtn = card.querySelector('.timer-btn');
            timerBtn.addEventListener('click', () => startTimer(timerBtn, cardData.timer));
        }

        solutionsContainer.appendChild(card);
    });

    homeView.classList.add('hidden');
    resultView.classList.remove('hidden');
}

function startTimer(button, minutes) {
    if (button.classList.contains('running')) return;
    
    button.classList.add('running');
    let secondsLeft = minutes * 60;

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

function playNotificationSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        [0, 0.2, 0.4].forEach((delay) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, audioCtx.currentTime + delay);
            gain.gain.setValueAtTime(0.3, audioCtx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + delay + 0.15);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + delay);
            osc.stop(audioCtx.currentTime + delay + 0.15);
        });
    } catch (e) {
        console.error("Audio-Fehler:", e);
    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registriert'))
            .catch(err => console.log('Service Worker Fehler', err));
    });
}
