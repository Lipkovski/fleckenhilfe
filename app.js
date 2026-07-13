// Strukturierte Datenbasis (Lockerer, fehlerfreier und präziser Du-Stil)
const db = {
    "blut": {
        "warning": "Nutze auf keinen Fall warmes oder heißes Wasser. Das Eiweiß im Blut gerinnt ab circa 42 °C, verbindet sich untrennbar mit den Fasern des Stoffes und fixiert den Fleck dauerhaft.",
        "robust": [
            { "title": "1. Eiskalte Rückspülung", "summary": "Spüle den Fleck sofort unter fließendem, eiskaltem Wasser von der Rückseite aus.", "steps": ["Drehe das Kleidungsstück sofort auf links.", "Halte die Stelle unter einen starken Strahl fließenden, eiskalten Leitungswassers.", "Lege das Textil anschließend für 30 Minuten in eine Schüssel mit klarem, kalten Wasser.", "Achte darauf, währenddessen nicht auf dem Fleck zu reiben."], "timer": 30 },
            { "title": "2. Einweichen in Kochsalzlösung", "summary": "Behandle den Fleck mit einer kalten Salzlösung, um angetrocknete Eiweiße zu spalten.", "steps": ["Löse zwei gehäufte Esslöffel feines Speisesalz in einem Liter kaltem Wasser auf.", "Tauche den Fleckenbereich komplett in diese Salzlösung ein.", "Lasse das Gewebe für exakt 15 Minuten einweichen.", "Spüle die Lösung danach mit klarem, kalten Wasser vollständig aus."], "timer": 15 },
            { "title": "3. Gallseife einarbeiten", "summary": "Trage flüssige Gallseife direkt auf und wasche das Gewebe danach in der Maschine.", "steps": ["Feuchte den Fleck leicht mit kaltem Wasser an.", "Trage flüssige Gallseife unverdünnt direkt auf den Fleck auf.", "Massiere die Seife vorsichtig mit den Fingerspitzen von außen nach innen ein.", "Lasse die Seife 10 Minuten einwirken und gib das Kleidungsstück danach in die Waschmaschine."], "timer": 10 }
        ],
        "sensibel": [
            { "title": "1. Tupfen mit weißem Tuch", "summary": "Tupfe den Fleck ohne Druck ab. Reiben zerstört die empfindliche Faserstruktur sofort.", "steps": ["Nutze ein sauberes, rein weißes, absolut fusselfreies Baumwolltuch.", "Feuchte eine Ecke des Tuches leicht mit eiskaltem Wasser an.", "Tupfe den Fleck vorsichtig von den Rändern hin zur Mitte ab. Reibe niemals.", "Drücke direkt danach ein trockenes Stück des Tuches auf die Stelle, um gelöste Pigmente aufzusaugen."] },
            { "title": "2. Wattepad und Alkohol", "summary": "Nutze reinen Alkohol, um die Eiweißstrukturen materialschonend zu trennen.", "steps": ["Tränke ein sauberes Wattepad mit reinem Isopropylalkohol aus der Apotheke.", "Tupfe den Fleck sanft ab. Der Alkohol spaltet das Blut, ohne die Faser aufzuquellen.", "Wechsle das Wattepad sofort, sobald es Farbe aufnimmt.", "Tupfe die Stelle am Ende mit einem feuchten, kalten Tuch nach."] },
            { "title": "3. Backpulver-Paste", "summary": "Trage eine kalte Paste auf und hebe sie nach dem Trocknen vorsichtig ab.", "steps": ["Mische herkömmliches Backpulver mit wenigen Tropfen kaltem Wasser zu einer dicken Paste.", "Trage die Paste vorsichtig mit einer glatten Löffelrückseite flach auf den Fleck auf.", "Lasse die Paste für 20 Minuten komplett unberührt einwirken.", "Hebe die getrocknete Paste mit einer stumpfen Kante ab und tupfe Reste mit einem feuchten Tuch weg."], "timer": 20 }
        ]
    },
    "rotwein": {
        "warning": "Verwende kein Salz auf empfindlichen Stoffen. Salz entzieht zwar Feuchtigkeit, kann aber bei manchen Geweben die Farbstoffe wie eine Beize permanent fixieren.",
        "robust": [
            { "title": "1. Mineralwasser-Sauerstoff", "summary": "Nutze sprudelndes Mineralwasser, um die Farbstoffe aus den Fasern zu drücken.", "steps": ["Gieße sofort kohlensäurehaltiges Mineralwasser reichlich über den Fleck.", "Tupfe die Flüssigkeit parallel mit einem sauberen, weißen Küchentuch ab.", "Wiederhole den Vorgang, bis keine rötliche Färbung mehr im Tuch sichtbar ist."] },
            { "title": "2. Flüssigwaschmittel-Kur", "summary": "Trage flüssiges Feinwaschmittel auf, um die Gerbstoffe im Rotwein zu umschließen.", "steps": ["Trage ein farbloses, flüssiges Waschmittel direkt auf den feuchten Fleck auf.", "Lasse es für 15 Minuten einwirken.", "Spüle das Kleidungsstück danach gründlich unter lauwarmem Wasser aus."], "timer": 15 }
        ],
        "sensibel": [
            { "title": "1. Weißwein-Neutralisation", "summary": "Nutze Weißwein oder reinen Alkohol, um die roten Farbpigmente aufzulösen.", "steps": ["Gieße vorsichtig etwas klaren Weißwein oder reinen Alkohol auf den Fleck.", "Die Säure und der Alkohol lösen die Farbstoffe des Rotweins auf.", "Tupfe die Stelle sofort mit einem trockenen, weißen Tuch komplett trocken."] },
            { "title": "2. Trockene Stärke-Bindung", "summary": "Nutze Kartoffelmehl oder Speisestärke, um die Restfeuchtigkeit aufzusaugen.", "steps": ["Streue Speisestärke dick auf den noch feuchten Fleck.", "Lasse die Stärke für 20 Minuten die Flüssigkeit aus den empfindlichen Fasern ziehen.", "Bürste die getrocknete Stärke extrem vorsichtig mit einer weichen Bürste ab."], "timer": 20 }
        ]
    },
    "kaffee": {
        "warning": "Lasse den Fleck nicht eintrocknen. Die im Kaffee enthaltenen Gerbstoffe oxidieren schnell an der Luft und binden sich sonst fest an das Gewebe.",
        "robust": [
            { "title": "1. Lauwarme Rückspülung", "summary": "Spüle den frischen Fleck sofort von der Rückseite mit lauwarmem Wasser aus.", "steps": ["Drehe das Kleidungsstück sofort auf links.", "Halte den Fleck unter fließendes, lauwarmes Leitungswasser, bis das abfließende Wasser sauber ist."] },
            { "title": "2. Backpulver-Bindung", "summary": "Streue Backpulver auf, um die Gerbstoffe aktiv aus dem Gewebe zu ziehen.", "steps": ["Befeuchte die Stelle minimal mit Wasser, falls sie bereits angetrocknet ist.", "Streue eine deckende Schicht normales Backpulver direkt auf den Kaffeefleck.", "Lasse das Pulver für 15 Minuten einwirken, während es die Farbstoffe aufsaugt.", "Spüle das Pulver anschließend unter fließendem Wasser gründlich aus."], "timer": 15 }
        ],
        "sensibel": [
            { "title": "1. Isoliertes Feuchtabtupfen", "summary": "Nutze ein feuchtes Tuch und arbeite dich reibungsfrei von außen nach innen vor.", "steps": ["Nimm ein weiches, weißes Baumwolltuch zur Hand und befeuchte es mit lauwarmem Wasser.", "Tupfe den Kaffeefleck ohne Druck von den Außenrändern zur Mitte hin ab."] },
            { "title": "2. Flüssige Glycerin-Lockerung", "summary": "Nutze Glycerin, um bereits angetrocknete Kaffeepartikel schonend zu lockern.", "steps": ["Träufle einige Tropfen flüssiges Glycerin (aus der Apotheke) direkt auf den Fleck.", "Lasse die Flüssigkeit für 10 Minuten ruhen, damit sie die Faser durchdringt.", "Tupfe das Glycerin mitsamt dem gelösten Schmutz mit einem feuchten Tuch vorsichtig ab."], "timer": 10 }
        ]
    },
    "fett": {
        "warning": "Fettflecken niemals mit reinem Wasser behandeln. Wasser perlt an Fett ab und breitet den Fleck durch die Feuchtigkeit nur weiter aus.",
        "robust": [
            { "title": "1. Spülmittel-Fettlöser", "summary": "Nutze die konzentrierten Tenside von Handspülmittel, um das Fett aufzuspalten.", "steps": ["Gib einen Tropfen farbloses Spülmittel direkt auf den trockenen Fettfleck.", "Reibe es ganz sanft mit dem Finger ein, bis es den Fleck komplett bedeckt.", "Lasse es 10 Minuten einwirken und wasche es mit sehr warmem Wasser aus."], "timer": 10 }
        ],
        "sensibel": [
            { "title": "1. Löschpapier-Aufsaugung", "summary": "Nutze ein Bügeleisen und Löschpapier, um das Fett flüssig zu machen und zu binden.", "steps": ["Lege ein sauberes Löschpapier oder trockenes Küchenpapier unter und über den Fleck.", "Stelle dein Bügeleisen auf die für den Stoff maximal erlaubte, niedrige Hitze (ohne Dampf!).", "Platziere das Bügeleisen für jeweils 5 Sekunden auf dem Papier. Das Fett schmilzt und wandert in das Papier."] }
        ]
    },
    "gras": {
        "warning": "Grasflecken enthalten Gerbstoffe und Chlorophyll. Vermeide reines Wasser, da dieses die Farbpigmente tiefer in die Struktur presst.",
        "robust": [
            { "title": "1. Gallseifen-Einarbeitung", "summary": "Gallseife spaltet die organischen Verbindungen des Pflanzensaftes perfekt auf.", "steps": ["Reibe den Fleck mit angefeuchteter Gallseife gründlich ein.", "Lasse das Ganze für 15 Minuten einwirken.", "Wasche das Textil danach bei der höchsten für den Stoff zugelassenen Temperatur in der Maschine."], "timer": 15 }
        ],
        "sensibel": [
            { "title": "1. Zitronensäure-Tupfen", "summary": "Nutze milde Säure, um das grüne Chlorophyll materialschonend zu bleichen.", "steps": ["Träufle ein paar Tropfen frischen Zitronensaft auf ein weißes Baumwolltuch.", "Tupfe den Grasfleck vorsichtig ab.", "Spüle die Stelle direkt danach mit kaltem Wasser aus, um die Fasern zu schützen."] }
        ]
    },
    "tomate": {
        "warning": "Tomatensauce enthält Lycopin. Dieser Farbstoff ist fettlöslich und extrem hitzebeständig, reagiert jedoch stark auf UV-Licht.",
        "robust": [
            { "title": "1. Spülmittel-Vorwäsche", "summary": "Löse zuerst den Fettanteil der Sauce mit Spülmittel aus dem Stoff.", "steps": ["Trage farbloses Spülmittel auf den Fleck auf und reibe es sanft ein.", "Spüle den Fleck nach 10 Minuten mit kaltem Wasser gründlich aus.", "Lege das feuchte Kleidungsstück danach direkt in die pralle Sonne. UV-Strahlung zerstört das Lycopin restlos."], "timer": 10 }
        ],
        "sensibel": [
            { "title": "1. Weingeist-Behandlung", "summary": "Nutze hochprozentigen Alkohol, um den Farbstoff ohne Reibung herauszulösen.", "steps": ["Befeuchte ein Wattepad mit Weingeist oder reinem Isopropylalkohol.", "Tupfe den Fleck vorsichtig von außen nach innen ab.", "Lasse den Stoff an der frischen Luft (idealerweise im Tageslicht) trocknen."] }
        ]
    },
    "kuli": {
        "warning": "Niemals versuchen, Kugelschreiber mit Wasser und Seife auszureiben. Das verschmiert die lösungsmittelbasierte Tinte großflächig.",
        "robust": [
            { "title": "1. Alkohol-Lösung", "summary": "Alkohol bricht die Harze und Lösungsmittel der Kugelschreibertinte auf.", "steps": ["Sprühe reines Isopropylalkohol-Spray oder Haarspray (auf Alkoholbasis) auf den Fleck.", "Lasse es 5 Minuten einwirken.", "Tupfe die angelöste Tinte mit einem trockenen Küchentuch ab, bis nichts mehr abfärbt."], "timer": 5 }
        ],
        "sensibel": [
            { "title": "1. Essigessenz-Kur", "summary": "Nutze die schonende Reinigungskraft von Essig für hochempfindliche Gewebe.", "steps": ["Mische Essigessenz im Verhältnis 1:1 mit kaltem Wasser.", "Trage die Mischung mit einem Wattepad punktuell auf den Strich auf.", "Tupfe die Tinte vorsichtig ab und spüle mit kaltem Wasser nach."] }
        ]
    },
    "schokolade": {
        "warning": "Schokolade enthält sowohl Fette als auch Eiweiße. Nutze daher im ersten Schritt niemals heißes Wasser, da sonst das Eiweiß gerinnt.",
        "robust": [
            { "title": "1. Das Eisfach-Prinzip", "summary": "Lasse die Schokolade komplett erhärten, um sie mechanisch abzuwischen.", "steps": ["Lege das Kleidungsstück für 30 Minuten in das Eisfach.", "Kratze die gefrorene Schokolade vorsichtig mit einer Messderrückseite ab.", "Behandle Fett-Reste danach mit warmem Wasser und Spülmittel."], "timer": 30 }
        ],
        "sensibel": [
            { "title": "1. Kalte Spülmittel-Tupfung", "summary": "Löse die Schokolade sanft und schrittweise mit kaltem Tensidwasser.", "steps": ["Mische kaltes Wasser mit zwei Tropfen farblosem Spülmittel.", "Tupfe den Fleck mit einem weißen Tuch vorsichtig ab.", "Wiederhole den Vorgang geduldig, bis sich die Schokolade vollständig vom Stoff gelöst hat."] }
        ]
    },
    "wachs": {
        "warning": "Versuche niemals, flüssiges Wachs im nassen Zustand wegzureiben. Das verteilt das Wachs tief im Inneren des Gewebes.",
        "robust": [
            { "title": "1. Einfrieren und Brechen", "summary": "Mache das Wachs hart und brüchig, um es mechanisch vom Stoff zu trennen.", "steps": ["Lege das Textil in das Gefrierfach oder nutze ein Kältepack für 20 Minuten.", "Brich das harte Wachs vorsichtig mit den Fingern auf.", "Kneife und brösele die Reste einfach komplett aus dem Stoff heraus."], "timer": 20 }
        ],
        "sensibel": [
            { "title": "1. Löschpapier-Schmelze", "summary": "Nutze sanfte Wärme, um das Wachs kontrolliert aus der Faser zu saugen.", "steps": ["Lege Löschpapier über und unter den Wachsfleck.", "Nutze einen Haartrockner (Föhn) auf mittlerer Stufe und erwärme die Stelle.", "Das Wachs schmilzt und wird sofort vom Löschpapier aufgesaugt. Wechsle das Papier, wenn es voll ist."] }
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

// --- DROPDOWN INTERAKTION (EINGEDRÜCKTER STATE) ---
[stainSelect, materialSelect].forEach(select => {
    select.addEventListener('change', () => {
        if (select.value !== "") {
            select.classList.add('selected');
        } else {
            select.classList.remove('selected');
        }
    });
});

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
    themeColorMeta.setAttribute('content', theme === 'dark' ? '#1e1e24' : '#e0e0e0');
}

initTheme();

// --- ROUTING & ANLEITUNGS-MAPPING ---
filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const stain = stainSelect.value;
    const material = materialSelect.value;

    if (stain && material) {
        // Weist die Stoffe Kategorien zu (Robust vs. Sensibel)
        const category = ["wolle", "seide", "teppich"].includes(material) ? "sensibel" : "robust";
        renderResults(stain, category);
    }
});

backBtn.addEventListener('click', () => {
    resultView.classList.add('hidden');
    homeView.classList.remove('hidden');
    
    // Setzt den eingedrückten Zustand der Dropdowns zurück
    stainSelect.value = "";
    materialSelect.value = "";
    stainSelect.classList.remove('selected');
    materialSelect.classList.remove('selected');
});

function renderResults(stain, category) {
    const data = db[stain];
    const cards = data[category];

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
