// Strukturierte Datenbasis (Lockeres, aber rein sachliches "Du")
const db = {
    "blut": {
        "warning": "Nutze auf keinen Fall warmes oder heißes Wasser. Das Eiweiß im Blut gerinnt ab circa 42°C, verbindet sich untrennbar mit den Fasern des Stoffes und fixiert den Fleck dauerhaft.",
        "baumwolle": [
            {
                "title": "1. Kaltwasser-Spülung von links",
                "summary": "Spüle den Fleck sofort unter fließendem, eiskaltem Wasser von der Rückseite aus.",
                "steps": [
                    "Drehe das Kleidungsstück sofort auf links (Innenseite nach außen). So drückst du das Blut aus dem Gewebe heraus, anstatt es tiefer hineinzupressen.",
                    "Halte den Fleck unter einen starken Strahl fließenden, eiskalten Leitungswassers.",
                    "Lege das Textil anschließend für 30 Minuten in eine Schüssel mit klarem, kaltem Wasser ohne Zusätze.",
                    "Achte darauf, währenddessen nicht auf dem Fleck zu reiben."
                ],
                "timer": 30
            },
            {
                "title": "2. Einweichen in Kochsalzlösung",
                "summary": "Behandle den Fleck mit einer kalten Salzlösung, um angetrocknete Eiweiße zu spalten.",
                "steps": [
                    "Löse zwei gehäufte Esslöffel feines Speisesalz in einem Liter kaltem Leitungswasser auf, bis keine Kröndchen mehr sichtbar sind.",
                    "Tauche den betroffenen Fleckenbereich komplett in diese Salzlösung ein.",
                    "Lasse das Gewebe für exakt 15 Minuten einweichen.",
                    "Spüle die Salzlösung danach mit klarem, kalten Wasser vollständig aus."
                ],
                "timer": 15
            },
            {
                "title": "3. Gallseife einarbeiten",
                "summary": "Trage flüssige Gallseife direkt auf und wasche das Gewebe danach in der Maschine.",
                "steps": [
                    "Feuchte den Fleck leicht mit kaltem Wasser an.",
                    "Trage flüssige Gallseife unverdünnt direkt auf den Blutfleck auf.",
                    "Massiere die Seife vorsichtig mit den sauberen Fingerspitzen in kreisenden Bewegungen von außen nach innen ein. Nutze keine harten Bürsten.",
                    "Lasse die Seife 10 Minuten einwirken und gib das Kleidungsstück danach sofort in die normale Waschmaschine."
                ],
                "timer": 10
            }
        ],
        "seide": [
            {
                "title": "1. Tupfen mit einem weißen Tuch",
                "summary": "Tupfe den Fleck ohne Druck ab. Reiben zerstört die empfindliche Faserstruktur sofort.",
                "steps": [
                    "Verwende ein sauberes, rein weißes, absolut fusselfreies Baumwolltuch oder ein ungefärbtes Mikrofasertuch.",
                    "Feuchte eine Ecke des Tuches leicht mit eiskaltem Wasser an.",
                    "Tupfe den Fleck vorsichtig und ohne Druck von den Rändern hin zur Mitte ab. Reibe niemals, sonst wird die Seide dauerhaft stumpf.",
                    "Drücke direkt danach ein trockenes Stück des Tuches auf die Stelle, um gelöste Pigmente aufzusaugen."
                ]
            },
            {
                "title": "2. Wattepad und Alkohol",
                "summary": "Nutze reinen Alkohol, um die Eiweißstrukturen materialschonend zu trennen.",
                "steps": [
                    "Tränke ein sauberes Wattepad mit reinem Isopropylalkohol (aus der Apotheke).",
                    "Tupfen den Fleck sanft ab. Der Alkohol spaltet das Blut, ohne die Seidenfaser aufzuquellen.",
                    "Wechsle das Wattepad sofort, sobald es Farbe aufnimmt, um den Fleck nicht zu verschmieren.",
                    "Tupfe die Stelle am Ende mit einem feuchten, kalten Tuch nach."
                ]
            },
            {
                "title": "3. Dickflüssige Backpulver-Paste",
                "summary": "Trage eine kalte Paste auf und hebe sie nach dem Trocknen vorsichtig ab.",
                "steps": [
                    "Mische herkömmliches Backpulver mit wenigen Tropfen kaltem Wasser zu einer dicken, streichfähigen Paste an.",
                    "Trage die Paste vorsichtig mit einer glatten Löffelrückseite flach auf den Fleck auf.",
                    "Lasse die Paste für 20 Minuten komplett unberührt einwirken.",
                    "Hebe die getrocknete Paste mit einer stumpfen Kante ab und tupfe Pulverreste mit einem feuchten Tuch weg."
                ],
                "timer": 20
            }
        ]
    },
    "kaffee": {
        "warning": "Lasse den Fleck nicht eintrocknen. Die im Kaffee enthaltenen Gerbstoffe oxidieren schnell an der Luft und binden sich sonst fest an das Gewebe.",
        "baumwolle": [
            {
                "title": "1. Lauwarme Rückspülung",
                "summary": "Spüle den frischen Fleck sofort von der Rückseite mit lauwarmem Wasser aus.",
                "steps": [
                    "Drehe das Kleidungsstück sofort auf links.",
                    "Halte den Fleck unter fließendes, lauwarmes Leitungswasser, bis das abfließende Wasser keine Braunfärbung mehr aufweist."
                ]
            },
            {
                "title": "2. Farbstoffbindung mit Backpulver",
                "summary": "Streue Backpulver auf, um die Gerbstoffe aktiv aus dem Gewebe zu ziehen.",
                "steps": [
                    "Falls das Gewebe schon trocken ist, feuchte es ganz leicht mit etwas Wasser an.",
                    "Streue eine deckende Schicht normales Backpulver direkt auf den Kaffeefleck.",
                    "Lasse das Pulver für 15 Minuten einwirken, während es die Farbstoffe aufsaugt.",
                    "Spüle das Pulver anschließend von Hand unter fließendem Wasser gründlich aus."
                ],
                "timer": 15
            },
            {
                "title": "3. Tensid-Reinigung mit Spülmittel",
                "summary": "Nutze farbloses Spülmittel, um verbliebene Fette und Gerbstoffe aufzulösen.",
                "steps": [
                    "Gib einige Tropfen eines komplett farblosen Handspülmittels direkt auf den Fleck.",
                    "Verreibe das Spülmittel vorsichtig mit den Fingern, bis sich ein minimaler Schaum bildet.",
                    "Lasse das Ganze 5 Minuten einwirken und wasche das Textil danach mit warmem Wasser aus."
                ],
                "timer": 5
            }
        ],
        "seide": [
            {
                "title": "1. Vorsichtiges Feuchtabtupfen",
                "summary": "Nutze ein feuchtes Tuch und arbeite dich staub- und reibungsfrei von außen nach innen vor.",
                "steps": [
                    "Nimm ein weiches, weißes Baumwolltuch zur Hand.",
                    "Befeuchte es leicht mit lauwarmem Wasser.",
                    "Tupfe den Kaffeefleck ohne Druck von den Außenrändern zur Mitte hin ab, um eine Ausbreitung im Gewebe zu verhindern."
                ]
            },
            {
                "title": "2. Fleckenlösung durch Alkohol",
                "summary": "Entferne hartnäckige Kaffeerückstände punktuell mit reinem Alkohol.",
                "steps": [
                    "Gib eine kleine Menge reinen Alkohol auf ein sauberes, trockenes Tuchstück.",
                    "Tupfe den Fleck sanft ab, bis die braunen Pigmente vollständig in das Reinigungstuch übergegangen sind.",
                    "Drücke ein trockenes Tuch nach, um die Feuchtigkeit sofort aus der Seide zu ziehen."
                ]
            },
            {
                "title": "3. Aufweichen mit flüssigem Glycerin",
                "summary": "Nutze Glycerin, um bereits angetrocknete Kaffeepartikel materialschonend zu lockern.",
                "steps": [
                    "Träufle einige Tropfen flüssiges Glycerin direkt auf den Fleck.",
                    "Lasse die Flüssigkeit für 10 Minuten ruhen, damit sie tief in die Faser eindringt.",
                    "Nimm ein sauberes, leicht feuchtes Tuch und tupfe das Glycerin mitsamt dem gelösten Schmutz vorsichtig ab."
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
    themeColorMeta.setAttribute('content', theme === 'dark' ? '#1e1e24' : '#f0f0f3');
}

initTheme();

// --- ROUTING & VIEW LOGIK ---
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
    window.scrollTo(0, 0);
}

function startTimer(button, minutes) {
    if (button.classList.contains('running')) return;
    
    button.classList.add('running');
    let secondsLeft = minutes * 60;

    const interval = setInterval(() => {
        secondsLeft--;
        let min = Math.floor(secondsLeft / 60);
        let sec = secondsLeft % 60;
        button.textContent = `Bitte warten: ${min}:${sec < 10 ? '0' : ''}${sec}`;

        if (secondsLeft <= 0) {
            clearInterval(interval);
            button.classList.remove('running');
            button.textContent = "Einwirkzeit beendet!";
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
        navigator.serviceWorker.register('sw.js');
    });
}
