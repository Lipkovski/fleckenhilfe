// Vollständige, erweiterte Datenbasis (3-4 Lösungen pro Kombination, sortiert nach Effektivität)
const db = {
    "blut": {
        "warning": "Nutze auf keinen Fall warmes oder heißes Wasser. Das Eiweiß im Blut gerinnt ab circa 42 °C, verbindet sich untrennbar mit den Fasern des Stoffes und fixiert den Fleck dauerhaft.",
        "robust": [
            { "title": "1. Eiskalte Rückspülung (Beste Methode)", "summary": "Spüle den frischen Fleck sofort unter fließendem, eiskaltem Wasser von der Rückseite aus.", "steps": ["Drehe das Kleidungsstück sofort auf links.", "Halte die Stelle unter einen starken Strahl fließenden, eiskalten Leitungswassers.", "Lege das Textil anschließend für 30 Minuten in eine Schüssel mit klarem, kalten Wasser.", "Achte darauf, währenddessen nicht auf dem Fleck zu reiben."], "timer": 30 },
            { "title": "2. Einweichen in Kochsalzlösung", "summary": "Behandle den Fleck mit einer kalten Salzlösung, um angetrocknete Eiweiße aufzuharken.", "steps": ["Löse zwei gehäufte Esslöffel feines Speisesalz in einem Liter kaltem Wasser auf.", "Tauche den Fleckenbereich komplett in diese Salzlösung ein.", "Lasse das Gewebe für exakt 15 Minuten einweichen.", "Spüle die Lösung danach mit klarem, kalten Wasser vollständig aus."], "timer": 15 },
            { "title": "3. Gallseife einarbeiten", "summary": "Trage flüssige Gallseife direkt auf und wasche das Gewebe danach in der Maschine.", "steps": ["Feuchte den Fleck leicht mit kaltem Wasser an.", "Trage flüssige Gallseife unverdünnt direkt auf den Fleck auf.", "Massiere die Seife vorsichtig mit den Fingerspitzen von außen nach innen ein.", "Lasse die Seife 10 Minuten einwirken und gib das Kleidungsstück danach in die Waschmaschine."], "timer": 10 },
            { "title": "4. Backpulver-Paste (Für hartnäckige Reste)", "summary": "Nutze Backpulver, um festsitzende Pigmente chemisch aus der Faser zu lösen.", "steps": ["Mische Backpulver mit wenigen Tropfen kaltem Wasser zu einer dicken Paste.", "Trage die Paste flach auf den Fleck auf.", "Lasse sie 20 Minuten einwirken.", "Spüle die Reste mit eiskaltem Wasser gründlich aus."], "timer": 20 }
        ],
        "sensibel": [
            { "title": "1. Trockentupfung mit weißem Tuch (Beste Methode)", "summary": "Tupfe den Fleck ohne Druck ab. Reiben zerstört die empfindliche Faserstruktur sofort.", "steps": ["Nutze ein sauberes, rein weißes, absolut fusselfreies Baumwolltuch.", "Feuchte eine Ecke des Tuches leicht mit eiskaltem Wasser an.", "Tupfe den Fleck vorsichtig von den Rändern hin zur Mitte ab. Reibe niemals.", "Drücke direkt danach ein trockenes Stück des Tuches auf die Stelle, um Feuchtigkeit aufzusaugen."] },
            { "title": "2. Wattepad und reiner Alkohol", "summary": "Nutze reinen Alkohol, um die Eiweißstrukturen materialschonend zu trennen.", "steps": ["Tränke ein sauberes Wattepad mit reinem Isopropylalkohol aus der Apotheke.", "Tupfe den Fleck sanft ab. Der Alkohol spaltet das Blut, ohne die Faser aufzuquellen.", "Wechsle das Wattepad sofort, sobald es Farbe aufnimmt.", "Tupfe die Stelle am Ende mit einem feuchten, kalten Tuch nach."] },
            { "title": "3. Sanfte Speisestärke-Bindung", "summary": "Nutze feuchte Stärke, um das Blut ohne Reibung aus der Faser zu ziehen.", "steps": ["Mische Speisestärke mit etwas kaltem Wasser zu einem dicken Brei.", "Trage den Brei vorsichtig auf den Fleck auf.", "Lasse ihn 20 Minuten einwirken, bis er angetrocknet ist.", "Bürste die Reste extrem vorsichtig mit einer weichen Bürste ab."], "timer": 20 }
        ]
    },
    "rotwein": {
        "warning": "Verwende kein Salz auf empfindlichen Stoffen. Salz entzieht zwar Feuchtigkeit, kann aber bei manchen Geweben die Farbstoffe wie eine Beize permanent fixieren.",
        "robust": [
            { "title": "1. Mineralwasser-Sprühen (Beste Methode)", "summary": "Nutze sprudelndes Mineralwasser, um die Farbstoffe aus den Fasern zu drücken.", "steps": ["Gieße sofort kohlensäurehaltiges Mineralwasser reichlich über den Fleck.", "Tupfe die Flüssigkeit parallel mit einem sauberen, weißen Küchentuch ab.", "Wiederhole den Vorgang, bis keine rötliche Färbung mehr im Tuch sichtbar ist."] },
            { "title": "2. Flüssigwaschmittel-Kur", "summary": "Trage flüssiges Feinwaschmittel auf, um die Gerbstoffe im Rotwein zu umschließen.", "steps": ["Trage ein farbloses, flüssiges Waschmittel direkt auf den feuchten Fleck auf.", "Lasse es für 15 Minuten einwirken.", "Spüle das Kleidungsstück danach gründlich unter lauwarmem Wasser aus."], "timer": 15 },
            { "title": "3. Glasreiniger-Methode", "summary": "Farbloser Glasreiniger bricht die Farbpigmente von Rotwein extrem schnell auf.", "steps": ["Sprühe den Fleck großzügig mit farblosem Glasreiniger ein.", "Lasse ihn 5 Minuten lang einziehen.", "Tupfe die Stelle mit einem trockenen Küchentuch gründlich aus.", "Gib das Textil danach sofort in die normale Wäsche."], "timer": 5 },
            { "title": "4. Weißwein-Säurebad", "summary": "Die im Weißwein enthaltene Säure neutralisiert die Farbstoffe des Rotweins.", "steps": ["Gieße etwas klaren Weißwein direkt über den Fleck.", "Lasse ihn 10 Minuten einwirken.", "Spüle die Stelle mit klarem, lauwarmem Wasser komplett aus."], "timer": 10 }
        ],
        "sensibel": [
            { "title": "1. Weißwein-Tupfung (Beste Methode)", "summary": "Nutze klaren Weißwein, um die roten Farbpigmente materialschonend zu lösen.", "steps": ["Gieße vorsichtig eine kleine Menge klaren Weißwein auf den Fleck.", "Tupfe den Bereich sofort mit einem trockenen, weißen Baumwolltuch ab.", "Wiederhole den Vorgang ohne Druck, bis der Fleck verblasst ist."] },
            { "title": "2. Trockene Stärke-Bindung", "summary": "Nutze Kartoffelmehl oder Speisestärke, um die Restfeuchtigkeit aufzusaugen.", "steps": ["Streue Speisestärke dick auf den noch feuchten Fleck.", "Lasse die Stärke für 20 Minuten die Flüssigkeit aus den empfindlichen Fasern ziehen.", "Bürste die getrocknete Stärke extrem vorsichtig mit einer weichen Bürste ab."], "timer": 20 },
            { "title": "3. Babypuder-Aufsaugung", "summary": "Babypuder zieht die Feuchtigkeit besonders sanft und faserschonend aus dem Stoff.", "steps": ["Streue eine dicke Schicht Babypuder auf den Rotweinfleck.", "Lasse das Puder 15 Minuten einwirken.", "Schüttle das Kleidungsstück vorsichtig aus oder sauge die Reste mit niedriger Stufe ab."], "timer": 15 }
        ]
    },
    "kaffee": {
        "warning": "Lasse den Fleck nicht eintrocknen. Die im Kaffee enthaltenen Gerbstoffe oxidieren schnell an der Luft und binden sich sonst fest an das Gewebe.",
        "robust": [
            { "title": "1. Lauwarme Rückspülung (Beste Methode)", "summary": "Spüle den frischen Fleck sofort von der Rückseite mit lauwarmem Wasser aus.", "steps": ["Drehe das Kleidungsstück sofort auf links.", "Halte den Fleck unter fließendes, lauwarmes Leitungswasser, bis das abfließende Wasser sauber ist."] },
            { "title": "2. Backpulver-Bindung", "summary": "Streue Backpulver auf, um die Gerbstoffe aktiv aus dem Gewebe zu ziehen.", "steps": ["Befeuchte die Stelle minimal mit Wasser, falls sie bereits angetrocknet ist.", "Streue eine deckende Schicht normales Backpulver direkt auf den Kaffeefleck.", "Lasse das Pulver für 15 Minuten einwirken, während es die Farbstoffe aufsaugt.", "Spüle das Pulver anschließend unter fließendem Wasser gründlich aus."], "timer": 15 },
            { "title": "3. Tensid-Reinigung mit Spülmittel", "summary": "Nutze farbloses Spülmittel, um verbliebene Fette und Gerbstoffe aufzulösen.", "steps": ["Gib einige Tropfen eines komplett farblosen Handspülmittels direkt auf den Fleck.", "Verreibe das Spülmittel vorsichtig mit den Fingern, bis sich ein minimaler Schaum bildet.", "Lasse das Ganze 5 Minuten einwirken und wasche das Textil danach mit warmem Wasser aus."], "timer": 5 }
        ],
        "sensibel": [
            { "title": "1. Vorsichtiges Feuchtabtupfen (Beste Methode)", "summary": "Nutze ein feuchtes Tuch und arbeite dich reibungsfrei von außen nach innen vor.", "steps": ["Nimm ein weiches, weißes Baumwolltuch zur Hand und befeuchte es mit lauwarmem Wasser.", "Tupfe den Kaffeefleck ohne Druck von den Außenrändern zur Mitte hin ab."] },
            { "title": "2. Flüssige Glycerin-Lockerung", "summary": "Nutze Glycerin, um bereits angetrocknete Kaffeepartikel schonend zu lockern.", "steps": ["Träufle einige Tropfen flüssiges Glycerin (aus der Apotheke) direkt auf den Fleck.", "Lasse die Flüssigkeit für 10 Minuten ruhen, damit sie die Faser durchdringt.", "Tupfe das Glycerin mitsamt dem gelösten Schmutz mit einem feuchten Tuch vorsichtig ab."], "timer": 10 },
            { "title": "3. Reiner Alkohol-Tupfen", "summary": "Entferne hartnäckige Kaffeerückstände punktuell mit reinem Alkohol.", "steps": ["Gib eine kleine Menge reinen Alkohol auf ein sauberes, trockenes Tuchstück.", "Tupfe den Fleck sanft ab, bis die braunen Pigmente vollständig in das Reinigungstuch übergegangen sind.", "Drücke ein trockenes Tuch nach, um die Feuchtigkeit sofort aus der Faser zu ziehen."] }
        ]
    },
    "fett": {
        "warning": "Fettflecken niemals mit reinem Wasser behandeln. Wasser perlt an Fett ab und breitet den Fleck durch die Feuchtigkeit nur weiter aus.",
        "robust": [
            { "title": "1. Spülmittel-Fettlöser (Beste Methode)", "summary": "Nutze die konzentrierten Tenside von Handspülmittel, um das Fett aufzuspalten.", "steps": ["Gib einen Tropfen farbloses Spülmittel direkt auf den trockenen Fettfleck.", "Reibe es ganz sanft mit dem Finger ein, bis es den Fleck komplett bedeckt.", "Lasse es 10 Minuten einwirken und wasche es mit sehr warmem Wasser aus."], "timer": 10 },
            { "title": "2. Backpulver-Aufsaugung", "summary": "Backpulver zieht frisches, flüssiges Fett mechanisch aus dem Stoff heraus.", "steps": ["Streue reichlich Backpulver auf den frischen Fettfleck.", "Lasse das Pulver für 20 Minuten ruhen, bis es das Fett aufgesaugt hat.", "Schüttle das Pulver ab und wasche das Kleidungsstück normal."], "timer": 20 },
            { "title": "3. Flüssige Gallseife", "summary": "Nutze die starken Enzyme der Gallseife, um hartnäckige Ölstrukturen zu spalten.", "steps": ["Trage flüssige Gallseife unverdünnt auf den Fleck auf.", "Lasse sie 15 Minuten lang einwirken.", "Spüle das Kleidungsstück mit heißem Wasser gründlich aus."], "timer": 15 }
        ],
        "sensibel": [
            { "title": "1. Löschpapier-Schmelze (Beste Methode)", "summary": "Nutze ein Bügeleisen und Löschpapier, um das Fett flüssig zu machen und zu binden.", "steps": ["Lege ein sauberes Löschpapier oder trockenes Küchenpapier unter und über den Fleck.", "Stelle dein Bügeleisen auf die für den Stoff maximal erlaubte, niedrige Hitze (ohne Dampf).", "Platziere das Bügeleisen für jeweils 5 Sekunden auf dem Papier. Das Fett schmilzt und wandert in das Papier."] },
            { "title": "2. Babypuder-Bindung", "summary": "Babypuder saugt Fett absolut faserschonend und ohne Hitze aus dem Stoff.", "steps": ["Streue eine dicke Schicht Babypuder oder Talkumpuder auf den Fettfleck.", "Lasse das Puder für 30 Minuten einwirken.", "Bürste das Puder extrem vorsichtig mit einer weichen Bürste ab."], "timer": 30 },
            { "title": "3. Trockenshampoo-Methode", "summary": "Die feinen Partikel im Trockenshampoo binden Fett in empfindlichen Woll- und Seidenfasern.", "steps": ["Sprühe den Fettfleck großzügig mit herkömmlichem Trockenshampoo ein.", "Lasse das Spray 10 Minuten lang vollständig trocknen.", "Bürste die Pulverrückstände ganz sanft aus."], "timer": 10 }
        ]
    },
    "gras": {
        "warning": "Grasflecken enthalten Gerbstoffe und Chlorophyll. Vermeide reines Wasser, da dieses die Farbpigmente tiefer in die Struktur presst.",
        "robust": [
            { "title": "1. Gallseifen-Einarbeitung (Beste Methode)", "summary": "Gallseife spaltet die organischen Verbindungen des Pflanzensaftes perfekt auf.", "steps": ["Reibe den Fleck mit angefeuchteter Gallseife gründlich ein.", "Lasse das Ganze für 15 Minuten einwirken.", "Wasche das Textil danach bei der höchsten für den Stoff zugelassenen Temperatur in der Maschine."], "timer": 15 },
            { "title": "2. Spiritus / Reiner Alkohol", "summary": "Alkohol löst chlorophyllbasierte Pigmente exzellent aus robusten Textilien.", "steps": ["Gib etwas reinen Alkohol oder Spiritus auf ein sauberes Tuch.", "Tupfe den Grasfleck damit kräftig ab.", "Wasche das Kleidungsstück anschließend direkt in der Waschmaschine."], "timer": 10 },
            { "title": "3. Essigessenz-Spülung", "summary": "Die Säure im Essig spaltet die grünen Pflanzenfarbstoffe wirksam auf.", "steps": ["Träufle unverdünnte Essigessenz direkt auf den Grasfleck.", "Lasse sie für 15 Minuten einwirken.", "Spüle die Stelle gründlich mit lauwarmem Wasser aus."], "timer": 15 }
        ],
        "sensibel": [
            { "title": "1. Zitronensäure-Tupfen (Beste Methode)", "summary": "Nutze milde Säure, um das grüne Chlorophyll materialschonend zu bleichen.", "steps": ["Träufle ein paar Tropfen frischen Zitronensaft auf ein weißes Baumwolltuch.", "Tupfe den Grasfleck vorsichtig ab.", "Spüle die Stelle direkt danach mit kaltem Wasser aus, um die Fasern zu schützen."] },
            { "title": "2. Flüssige Glycerin-Kur", "summary": "Glycerin schützt die empfindliche Faser und weicht die Farbstoffe sanft auf.", "steps": ["Trage flüssiges Glycerin direkt auf den Grasfleck auf.", "Lasse es für 15 Minuten einwirken.", "Tupfe die Reste vorsichtig mit einem lauwarmen, feuchten Tuch ab."], "timer": 15 },
            { "title": "3. Weingeist-Tupfen", "summary": "Hochprozentiger Alkohol bricht Pigmente, ohne Wolle oder Seide chemisch anzugreifen.", "steps": ["Befeuchte ein Wattepad mit reinem Weingeist.", "Tupfe den Fleck ohne Druck ab, bis keine grüne Farbe mehr abgegeben wird.", "Lasse den Stoff flach an der Luft trocknen."] }
        ]
    },
    "tomate": {
        "warning": "Tomatensauce enthält Lycopin. Dieser Farbstoff ist fettlöslich und extrem hitzebeständig, reagiert jedoch stark auf UV-Licht.",
        "robust": [
            { "title": "1. Spülmittel und UV-Licht (Beste Methode)", "summary": "Löse zuerst den Fettanteil der Sauce mit Spülmittel aus dem Stoff.", "steps": ["Trage farbloses Spülmittel auf den Fleck auf und reibe es sanft ein.", "Spüle den Fleck nach 10 Minuten mit kaltem Wasser gründlich aus.", "Lege das feuchte Kleidungsstück danach direkt in die pralle Sonne. UV-Strahlung zerstört das Lycopin restlos."], "timer": 10 },
            { "title": "2. Essig-Wasser-Mischung", "summary": "Die Säure im Essig hilft, den organischen Farbstoff der Tomate aufzuspalten.", "steps": ["Mische Essigessenz und Wasser im Verhältnis 1:1.", "Weiche den Fleck für 15 Minuten in dieser Mischung ein.", "Spüle das Gewebe danach unter kaltem Wasser aus."], "timer": 15 },
            { "title": "3. Gallseife für Fettsaucen", "summary": "Löse den Fett- und Proteingehalt von Tomatensaucen mit Enzymen.", "steps": ["Feuchte die Stelle an und reibe sie mit Gallseife ein.", "Lasse die Seife 10 Minuten lang einwirken.", "Wasche das Kleidungsstück wie gewohnt in der Maschine."], "timer": 10 }
        ],
        "sensibel": [
            { "title": "1. Weingeist-Behandlung (Beste Methode)", "summary": "Nutze hochprozentigen Alkohol, um den Farbstoff ohne Reibung herauszulösen.", "steps": ["Befeuchte ein Wattepad mit Weingeist oder reinem Isopropylalkohol.", "Tupfe den Fleck vorsichtig von außen nach innen ab.", "Lasse den Stoff an der frischen Luft (idealerweise im Tageslicht) trocknen."] },
            { "title": "2. Mineralwasser-Sauerstoff", "summary": "Nutze sprudelndes Wasser als schnelle erste Soforthilfe, um die Kruste anzuheben.", "steps": ["Gieße stark sprudelndes Mineralwasser über den Fleck.", "Tupfe die Sauce vorsichtig mit einem trockenen, weißen Tuch ab.", "Wiederhole dies, um ein tiefes Einziehen in die Wolle oder Seide zu verhindern."] },
            { "title": "3. Seifenfreie Shampoolösung", "summary": "pH-neutrale Tenside lockern die Tomatensauce absolut faserschonend.", "steps": ["Mische ein paar Tropfen mildes Babyshampoo mit kaltem Wasser.", "Trage die Lösung mit einem weichen Tuch auf den Fleck auf.", "Lasse sie 10 Minuten einwirken und tupfe sie mit klarem Wasser ab."], "timer": 10 }
        ]
    },
    "kuli": {
        "warning": "Niemals versuchen, Kugelschreiber mit Wasser und Seife auszureiben. Das verschmiert die lösungsmittelbasierte Tinte großflächig.",
        "robust": [
            { "title": "1. Alkohol- oder Haarspray-Lösung (Beste Methode)", "summary": "Alkohol bricht die Harze und Lösungsmittel der Kugelschreibertinte auf.", "steps": ["Sprühe reines Isopropylalkohol-Spray oder Haarspray (auf Alkoholbasis) auf den Fleck.", "Lasse es 5 Minuten einwirken.", "Tupfe die angelöste Tinte mit einem trockenen Küchentuch ab, bis nichts mehr abfärbt."], "timer": 5 },
            { "title": "2. Zitronensaft-Konzentrat", "summary": "Die konzentrierte Säure löst die chemischen Bindungen der Tinte auf.", "steps": ["Träufle reinen Zitronensaft direkt auf den Kugelschreiberstrich.", "Lasse den Saft 10 Minuten lang einwirken.", "Spüle die Stelle gründlich mit lauwarmem Wasser aus."], "timer": 10 },
            { "title": "3. Das saure Milchbad", "summary": "Die natürliche Milchsäure bindet Tintenpigmente erstaunlich gut aus Baumwolle.", "steps": ["Lege den betroffenen Stoffbereich in eine Schale mit kalter Milch oder Molke.", "Lasse das Textil für 30 Minuten darin einweichen.", "Wasche das Kleidungsstück anschließend ganz normal in der Waschmaschine."], "timer": 30 }
        ],
        "sensibel": [
            { "title": "1. Essigessenz-Kur (Beste Methode)", "summary": "Nutze die schonende Reinigungskraft von Essig für hochempfindliche Gewebe.", "steps": ["Mische Essigessenz im Verhältnis 1:1 mit kaltem Wasser.", "Trage die Mischung mit einem Wattepad punktuell auf den Strich auf.", "Tupfe die Tinte vorsichtig ab und spüle mit kaltem Wasser nach."] },
            { "title": "2. Reiner Weingeist", "summary": "Weingeist enthält keine Zusätze und verdunstet absolut rückstandslos auf Wolle und Seide.", "steps": ["Tränke ein sauberes Wattepad mit reinem Weingeist.", "Tupfe den Kugelschreiberstrich ohne jeglichen Druck ab.", "Erneuere das Wattepad regelmäßig, um ein Verschmieren zu verhindern."] },
            { "title": "3. Franzbranntwein-Tupfung", "summary": "Die Alkoholkomponente im Franzbranntwein bricht die Tinte schonend auf.", "steps": ["Trage etwas Franzbranntwein auf ein weiches Tuch auf.", "Tupfe den Fleck für 5 Minuten vorsichtig ab.", "Wische die Stelle mit einem sauberen, feuchten Tuch gründlich nach."], "timer": 5 }
        ]
    },
    "schokolade": {
        "warning": "Schokolade enthält sowohl Fette als auch Eiweiße. Nutze daher im ersten Schritt niemals heißes Wasser, da sonst das Eiweiß gerinnt.",
        "robust": [
            { "title": "1. Das Eisfach-Prinzip (Beste Methode)", "summary": "Lasse die Schokolade komplett erhärten, um sie mechanisch abzuwischen.", "steps": ["Lege das Kleidungsstück für 30 Minuten in das Eisfach.", "Kratze die gefrorene Schokolade vorsichtig mit einer Löffelkante ab.", "Behandle verbliebene Fett-Reste danach mit warmem Wasser und Spülmittel."], "timer": 30 },
            { "title": "2. Spülmittel-Warmwasser", "summary": "Löse die Schokoladenfette und Kakaoöle direkt mit warmen Tensiden auf.", "steps": ["Trage farbloses Spülmittel auf den Fleck auf.", "Weiche das Kleidungsstück für 10 Minuten in warmem Wasser ein.", "Reibe den Fleck vorsichtig unter Wasser aus."], "timer": 10 },
            { "title": "3. Flüssigwaschmittel-Kur", "summary": "Enzymatisches Flüssigwaschmittel spaltet Milchproteine und Fette gezielt auf.", "steps": ["Gib etwas flüssiges Vollwaschmittel direkt auf den Fleck.", "Lasse es für 15 Minuten einwirken.", "Wasche das Textil bei der maximal erlaubten Temperatur in der Maschine."], "timer": 15 }
        ],
        "sensibel": [
            { "title": "1. Kalte Spülmittel-Tupfung (Beste Methode)", "summary": "Löse die Schokolade sanft und schrittweise mit kaltem Tensidwasser.", "steps": ["Mische kaltes Wasser mit zwei Tropfen farblosem Spülmittel.", "Tupfe den Fleck mit einem weißen Tuch vorsichtig ab.", "Wiederhole den Vorgang geduldig, bis sich die Schokolade vollständig vom Stoff gelöst hat."] },
            { "title": "2. Babypuder für Fettrückstände", "summary": "Babypuder zieht das Schokoladenfett ohne mechanische Belastung aus der Faser.", "steps": ["Streue Babypuder dick auf den Schokoladenfleck.", "Lasse das Puder 20 Minuten lang arbeiten.", "Bürste das Pulver mit einer ultraweichen Bürste sanft ab."], "timer": 20 },
            { "title": "3. Lauwarme Milch-Tupfung", "summary": "Milchproteine lösen die Kakaobestandteile rein mechanisch-chemisch auf.", "steps": ["Feuchte ein weißes Tuch mit lauwarmem Wasser und etwas Kuhmilch an.", "Tupfe den Fleck für 10 Minuten vorsichtig ab.", "Spüle die Stelle danach sofort mit klarem, kaltem Wasser aus."], "timer": 10 }
        ]
    },
    "wachs": {
        "warning": "Versuche niemals, flüssiges Wachs im nassen Zustand wegzureiben. Das verteilt das Wachs tief im Inneren des Gewebes.",
        "robust": [
            { "title": "1. Einfrieren und Brechen (Beste Methode)", "summary": "Mache das Wachs hart und brüchig, um es mechanisch vom Stoff zu trennen.", "steps": ["Lege das Textil in das Gefrierfach oder nutze ein Kältepack für 20 Minuten.", "Brich das harte Wachs vorsichtig mit den Fingern auf.", "Kneife und brösele die Reste einfach komplett aus dem Stoff heraus."], "timer": 20 },
            { "title": "2. Löschpapier-Bügelmethode", "summary": "Nutze Hitze, um das Wachs flüssig zu machen und direkt im Papier aufzusaugen.", "steps": ["Platziere ein Löschpapier unter und über dem Wachsfleck.", "Bügele mit mittlerer Hitze (ohne Dampf) über das Papier.", "Das Wachs schmilzt und zieht sofort in das Papier ein."] },
            { "title": "3. Waschbenzin für Farbrückstände", "summary": "Löse den verbliebenen Fett- und Farbschleier von farbigen Kerzen auf.", "steps": ["Gib etwas Waschbenzin auf ein sauberes Tuch.", "Reibe die verbliebenen Wachsreste vorsichtig ab.", "Lasse die Stelle für 5 Minuten auslüften, bevor du sie wäschst."], "timer": 5 }
        ],
        "sensibel": [
            { "title": "1. Föhn- und Löschpapier-Methode (Beste Methode)", "summary": "Nutze sanfte Wärme, um das Wachs kontrolliert aus der Faser zu saugen.", "steps": ["Lege Löschpapier über und unter den Wachsfleck.", "Nutze einen Haartrockner (Föhn) auf mittlerer Stufe und erwärme die Stelle.", "Das Wachs schmilzt und wird schonend vom Löschpapier aufgesaugt."] },
            { "title": "2. Kältepack und Absaugen", "summary": "Erhärtet Wachs auf Teppichen und Polstern, um es rückstandsfrei abzuheben.", "steps": ["Lege ein Kältepack für 15 Minuten fest auf den Wachsfleck.", "Kratze das hart gewordene Wachs vorsichtig mit einer stumpfen Messerkante ab.", "Sauge die losen Brösel direkt mit dem Staubsauger auf."], "timer": 15 },
            { "title": "3. Reiner Alkohol für Farbschleier", "summary": "Entfernt den farbigen Wachsschimmer rückstandslos aus empfindlichen Stoffen.", "steps": ["Tränke ein Wattepad mit reinem Alkohol.", "Tupfe die farbigen Wachsrückstände für 5 Minuten sanft ab.", "Wische mit einem leicht feuchten Tuch nach."], "timer": 5 }
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
        const category = ["wolle", "seide", "teppich"].includes(material) ? "sensibel" : "robust";
        renderResults(stain, category);
    }
});

backBtn.addEventListener('click', () => {
    resultView.classList.add('hidden');
    homeView.classList.remove('hidden');
    
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
}// Vollständige, erweiterte Datenbasis (3-4 Lösungen pro Kombination, sortiert nach Effektivität)
const db = {
    "blut": {
        "warning": "Nutze auf keinen Fall warmes oder heißes Wasser. Das Eiweiß im Blut gerinnt ab circa 42 °C, verbindet sich untrennbar mit den Fasern des Stoffes und fixiert den Fleck dauerhaft.",
        "robust": [
            { "title": "1. Eiskalte Rückspülung (Beste Methode)", "summary": "Spüle den frischen Fleck sofort unter fließendem, eiskaltem Wasser von der Rückseite aus.", "steps": ["Drehe das Kleidungsstück sofort auf links.", "Halte die Stelle unter einen starken Strahl fließenden, eiskalten Leitungswassers.", "Lege das Textil anschließend für 30 Minuten in eine Schüssel mit klarem, kalten Wasser.", "Achte darauf, währenddessen nicht auf dem Fleck zu reiben."], "timer": 30 },
            { "title": "2. Einweichen in Kochsalzlösung", "summary": "Behandle den Fleck mit einer kalten Salzlösung, um angetrocknete Eiweiße aufzuharken.", "steps": ["Löse zwei gehäufte Esslöffel feines Speisesalz in einem Liter kaltem Wasser auf.", "Tauche den Fleckenbereich komplett in diese Salzlösung ein.", "Lasse das Gewebe für exakt 15 Minuten einweichen.", "Spüle die Lösung danach mit klarem, kalten Wasser vollständig aus."], "timer": 15 },
            { "title": "3. Gallseife einarbeiten", "summary": "Trage flüssige Gallseife direkt auf und wasche das Gewebe danach in der Maschine.", "steps": ["Feuchte den Fleck leicht mit kaltem Wasser an.", "Trage flüssige Gallseife unverdünnt direkt auf den Fleck auf.", "Massiere die Seife vorsichtig mit den Fingerspitzen von außen nach innen ein.", "Lasse die Seife 10 Minuten einwirken und gib das Kleidungsstück danach in die Waschmaschine."], "timer": 10 },
            { "title": "4. Backpulver-Paste (Für hartnäckige Reste)", "summary": "Nutze Backpulver, um festsitzende Pigmente chemisch aus der Faser zu lösen.", "steps": ["Mische Backpulver mit wenigen Tropfen kaltem Wasser zu einer dicken Paste.", "Trage die Paste flach auf den Fleck auf.", "Lasse sie 20 Minuten einwirken.", "Spüle die Reste mit eiskaltem Wasser gründlich aus."], "timer": 20 }
        ],
        "sensibel": [
            { "title": "1. Trockentupfung mit weißem Tuch (Beste Methode)", "summary": "Tupfe den Fleck ohne Druck ab. Reiben zerstört die empfindliche Faserstruktur sofort.", "steps": ["Nutze ein sauberes, rein weißes, absolut fusselfreies Baumwolltuch.", "Feuchte eine Ecke des Tuches leicht mit eiskaltem Wasser an.", "Tupfe den Fleck vorsichtig von den Rändern hin zur Mitte ab. Reibe niemals.", "Drücke direkt danach ein trockenes Stück des Tuches auf die Stelle, um Feuchtigkeit aufzusaugen."] },
            { "title": "2. Wattepad und reiner Alkohol", "summary": "Nutze reinen Alkohol, um die Eiweißstrukturen materialschonend zu trennen.", "steps": ["Tränke ein sauberes Wattepad mit reinem Isopropylalkohol aus der Apotheke.", "Tupfe den Fleck sanft ab. Der Alkohol spaltet das Blut, ohne die Faser aufzuquellen.", "Wechsle das Wattepad sofort, sobald es Farbe aufnimmt.", "Tupfe die Stelle am Ende mit einem feuchten, kalten Tuch nach."] },
            { "title": "3. Sanfte Speisestärke-Bindung", "summary": "Nutze feuchte Stärke, um das Blut ohne Reibung aus der Faser zu ziehen.", "steps": ["Mische Speisestärke mit etwas kaltem Wasser zu einem dicken Brei.", "Trage den Brei vorsichtig auf den Fleck auf.", "Lasse ihn 20 Minuten einwirken, bis er angetrocknet ist.", "Bürste die Reste extrem vorsichtig mit einer weichen Bürste ab."], "timer": 20 }
        ]
    },
    "rotwein": {
        "warning": "Verwende kein Salz auf empfindlichen Stoffen. Salz entzieht zwar Feuchtigkeit, kann aber bei manchen Geweben die Farbstoffe wie eine Beize permanent fixieren.",
        "robust": [
            { "title": "1. Mineralwasser-Sprühen (Beste Methode)", "summary": "Nutze sprudelndes Mineralwasser, um die Farbstoffe aus den Fasern zu drücken.", "steps": ["Gieße sofort kohlensäurehaltiges Mineralwasser reichlich über den Fleck.", "Tupfe die Flüssigkeit parallel mit einem sauberen, weißen Küchentuch ab.", "Wiederhole den Vorgang, bis keine rötliche Färbung mehr im Tuch sichtbar ist."] },
            { "title": "2. Flüssigwaschmittel-Kur", "summary": "Trage flüssiges Feinwaschmittel auf, um die Gerbstoffe im Rotwein zu umschließen.", "steps": ["Trage ein farbloses, flüssiges Waschmittel direkt auf den feuchten Fleck auf.", "Lasse es für 15 Minuten einwirken.", "Spüle das Kleidungsstück danach gründlich unter lauwarmem Wasser aus."], "timer": 15 },
            { "title": "3. Glasreiniger-Methode", "summary": "Farbloser Glasreiniger bricht die Farbpigmente von Rotwein extrem schnell auf.", "steps": ["Sprühe den Fleck großzügig mit farblosem Glasreiniger ein.", "Lasse ihn 5 Minuten lang einziehen.", "Tupfe die Stelle mit einem trockenen Küchentuch gründlich aus.", "Gib das Textil danach sofort in die normale Wäsche."], "timer": 5 },
            { "title": "4. Weißwein-Säurebad", "summary": "Die im Weißwein enthaltene Säure neutralisiert die Farbstoffe des Rotweins.", "steps": ["Gieße etwas klaren Weißwein direkt über den Fleck.", "Lasse ihn 10 Minuten einwirken.", "Spüle die Stelle mit klarem, lauwarmem Wasser komplett aus."], "timer": 10 }
        ],
        "sensibel": [
            { "title": "1. Weißwein-Tupfung (Beste Methode)", "summary": "Nutze klaren Weißwein, um die roten Farbpigmente materialschonend zu lösen.", "steps": ["Gieße vorsichtig eine kleine Menge klaren Weißwein auf den Fleck.", "Tupfe den Bereich sofort mit einem trockenen, weißen Baumwolltuch ab.", "Wiederhole den Vorgang ohne Druck, bis der Fleck verblasst ist."] },
            { "title": "2. Trockene Stärke-Bindung", "summary": "Nutze Kartoffelmehl oder Speisestärke, um die Restfeuchtigkeit aufzusaugen.", "steps": ["Streue Speisestärke dick auf den noch feuchten Fleck.", "Lasse die Stärke für 20 Minuten die Flüssigkeit aus den empfindlichen Fasern ziehen.", "Bürste die getrocknete Stärke extrem vorsichtig mit einer weichen Bürste ab."], "timer": 20 },
            { "title": "3. Babypuder-Aufsaugung", "summary": "Babypuder zieht die Feuchtigkeit besonders sanft und faserschonend aus dem Stoff.", "steps": ["Streue eine dicke Schicht Babypuder auf den Rotweinfleck.", "Lasse das Puder 15 Minuten einwirken.", "Schüttle das Kleidungsstück vorsichtig aus oder sauge die Reste mit niedriger Stufe ab."], "timer": 15 }
        ]
    },
    "kaffee": {
        "warning": "Lasse den Fleck nicht eintrocknen. Die im Kaffee enthaltenen Gerbstoffe oxidieren schnell an der Luft und binden sich sonst fest an das Gewebe.",
        "robust": [
            { "title": "1. Lauwarme Rückspülung (Beste Methode)", "summary": "Spüle den frischen Fleck sofort von der Rückseite mit lauwarmem Wasser aus.", "steps": ["Drehe das Kleidungsstück sofort auf links.", "Halte den Fleck unter fließendes, lauwarmes Leitungswasser, bis das abfließende Wasser sauber ist."] },
            { "title": "2. Backpulver-Bindung", "summary": "Streue Backpulver auf, um die Gerbstoffe aktiv aus dem Gewebe zu ziehen.", "steps": ["Befeuchte die Stelle minimal mit Wasser, falls sie bereits angetrocknet ist.", "Streue eine deckende Schicht normales Backpulver direkt auf den Kaffeefleck.", "Lasse das Pulver für 15 Minuten einwirken, während es die Farbstoffe aufsaugt.", "Spüle das Pulver anschließend unter fließendem Wasser gründlich aus."], "timer": 15 },
            { "title": "3. Tensid-Reinigung mit Spülmittel", "summary": "Nutze farbloses Spülmittel, um verbliebene Fette und Gerbstoffe aufzulösen.", "steps": ["Gib einige Tropfen eines komplett farblosen Handspülmittels direkt auf den Fleck.", "Verreibe das Spülmittel vorsichtig mit den Fingern, bis sich ein minimaler Schaum bildet.", "Lasse das Ganze 5 Minuten einwirken und wasche das Textil danach mit warmem Wasser aus."], "timer": 5 }
        ],
        "sensibel": [
            { "title": "1. Vorsichtiges Feuchtabtupfen (Beste Methode)", "summary": "Nutze ein feuchtes Tuch und arbeite dich reibungsfrei von außen nach innen vor.", "steps": ["Nimm ein weiches, weißes Baumwolltuch zur Hand und befeuchte es mit lauwarmem Wasser.", "Tupfe den Kaffeefleck ohne Druck von den Außenrändern zur Mitte hin ab."] },
            { "title": "2. Flüssige Glycerin-Lockerung", "summary": "Nutze Glycerin, um bereits angetrocknete Kaffeepartikel schonend zu lockern.", "steps": ["Träufle einige Tropfen flüssiges Glycerin (aus der Apotheke) direkt auf den Fleck.", "Lasse die Flüssigkeit für 10 Minuten ruhen, damit sie die Faser durchdringt.", "Tupfe das Glycerin mitsamt dem gelösten Schmutz mit einem feuchten Tuch vorsichtig ab."], "timer": 10 },
            { "title": "3. Reiner Alkohol-Tupfen", "summary": "Entferne hartnäckige Kaffeerückstände punktuell mit reinem Alkohol.", "steps": ["Gib eine kleine Menge reinen Alkohol auf ein sauberes, trockenes Tuchstück.", "Tupfe den Fleck sanft ab, bis die braunen Pigmente vollständig in das Reinigungstuch übergegangen sind.", "Drücke ein trockenes Tuch nach, um die Feuchtigkeit sofort aus der Faser zu ziehen."] }
        ]
    },
    "fett": {
        "warning": "Fettflecken niemals mit reinem Wasser behandeln. Wasser perlt an Fett ab und breitet den Fleck durch die Feuchtigkeit nur weiter aus.",
        "robust": [
            { "title": "1. Spülmittel-Fettlöser (Beste Methode)", "summary": "Nutze die konzentrierten Tenside von Handspülmittel, um das Fett aufzuspalten.", "steps": ["Gib einen Tropfen farbloses Spülmittel direkt auf den trockenen Fettfleck.", "Reibe es ganz sanft mit dem Finger ein, bis es den Fleck komplett bedeckt.", "Lasse es 10 Minuten einwirken und wasche es mit sehr warmem Wasser aus."], "timer": 10 },
            { "title": "2. Backpulver-Aufsaugung", "summary": "Backpulver zieht frisches, flüssiges Fett mechanisch aus dem Stoff heraus.", "steps": ["Streue reichlich Backpulver auf den frischen Fettfleck.", "Lasse das Pulver für 20 Minuten ruhen, bis es das Fett aufgesaugt hat.", "Schüttle das Pulver ab und wasche das Kleidungsstück normal."], "timer": 20 },
            { "title": "3. Flüssige Gallseife", "summary": "Nutze die starken Enzyme der Gallseife, um hartnäckige Ölstrukturen zu spalten.", "steps": ["Trage flüssige Gallseife unverdünnt auf den Fleck auf.", "Lasse sie 15 Minuten lang einwirken.", "Spüle das Kleidungsstück mit heißem Wasser gründlich aus."], "timer": 15 }
        ],
        "sensibel": [
            { "title": "1. Löschpapier-Schmelze (Beste Methode)", "summary": "Nutze ein Bügeleisen und Löschpapier, um das Fett flüssig zu machen und zu binden.", "steps": ["Lege ein sauberes Löschpapier oder trockenes Küchenpapier unter und über den Fleck.", "Stelle dein Bügeleisen auf die für den Stoff maximal erlaubte, niedrige Hitze (ohne Dampf).", "Platziere das Bügeleisen für jeweils 5 Sekunden auf dem Papier. Das Fett schmilzt und wandert in das Papier."] },
            { "title": "2. Babypuder-Bindung", "summary": "Babypuder saugt Fett absolut faserschonend und ohne Hitze aus dem Stoff.", "steps": ["Streue eine dicke Schicht Babypuder oder Talkumpuder auf den Fettfleck.", "Lasse das Puder für 30 Minuten einwirken.", "Bürste das Puder extrem vorsichtig mit einer weichen Bürste ab."], "timer": 30 },
            { "title": "3. Trockenshampoo-Methode", "summary": "Die feinen Partikel im Trockenshampoo binden Fett in empfindlichen Woll- und Seidenfasern.", "steps": ["Sprühe den Fettfleck großzügig mit herkömmlichem Trockenshampoo ein.", "Lasse das Spray 10 Minuten lang vollständig trocknen.", "Bürste die Pulverrückstände ganz sanft aus."], "timer": 10 }
        ]
    },
    "gras": {
        "warning": "Grasflecken enthalten Gerbstoffe und Chlorophyll. Vermeide reines Wasser, da dieses die Farbpigmente tiefer in die Struktur presst.",
        "robust": [
            { "title": "1. Gallseifen-Einarbeitung (Beste Methode)", "summary": "Gallseife spaltet die organischen Verbindungen des Pflanzensaftes perfekt auf.", "steps": ["Reibe den Fleck mit angefeuchteter Gallseife gründlich ein.", "Lasse das Ganze für 15 Minuten einwirken.", "Wasche das Textil danach bei der höchsten für den Stoff zugelassenen Temperatur in der Maschine."], "timer": 15 },
            { "title": "2. Spiritus / Reiner Alkohol", "summary": "Alkohol löst chlorophyllbasierte Pigmente exzellent aus robusten Textilien.", "steps": ["Gib etwas reinen Alkohol oder Spiritus auf ein sauberes Tuch.", "Tupfe den Grasfleck damit kräftig ab.", "Wasche das Kleidungsstück anschließend direkt in der Waschmaschine."], "timer": 10 },
            { "title": "3. Essigessenz-Spülung", "summary": "Die Säure im Essig spaltet die grünen Pflanzenfarbstoffe wirksam auf.", "steps": ["Träufle unverdünnte Essigessenz direkt auf den Grasfleck.", "Lasse sie für 15 Minuten einwirken.", "Spüle die Stelle gründlich mit lauwarmem Wasser aus."], "timer": 15 }
        ],
        "sensibel": [
            { "title": "1. Zitronensäure-Tupfen (Beste Methode)", "summary": "Nutze milde Säure, um das grüne Chlorophyll materialschonend zu bleichen.", "steps": ["Träufle ein paar Tropfen frischen Zitronensaft auf ein weißes Baumwolltuch.", "Tupfe den Grasfleck vorsichtig ab.", "Spüle die Stelle direkt danach mit kaltem Wasser aus, um die Fasern zu schützen."] },
            { "title": "2. Flüssige Glycerin-Kur", "summary": "Glycerin schützt die empfindliche Faser und weicht die Farbstoffe sanft auf.", "steps": ["Trage flüssiges Glycerin direkt auf den Grasfleck auf.", "Lasse es für 15 Minuten einwirken.", "Tupfe die Reste vorsichtig mit einem lauwarmen, feuchten Tuch ab."], "timer": 15 },
            { "title": "3. Weingeist-Tupfen", "summary": "Hochprozentiger Alkohol bricht Pigmente, ohne Wolle oder Seide chemisch anzugreifen.", "steps": ["Befeuchte ein Wattepad mit reinem Weingeist.", "Tupfe den Fleck ohne Druck ab, bis keine grüne Farbe mehr abgegeben wird.", "Lasse den Stoff flach an der Luft trocknen."] }
        ]
    },
    "tomate": {
        "warning": "Tomatensauce enthält Lycopin. Dieser Farbstoff ist fettlöslich und extrem hitzebeständig, reagiert jedoch stark auf UV-Licht.",
        "robust": [
            { "title": "1. Spülmittel und UV-Licht (Beste Methode)", "summary": "Löse zuerst den Fettanteil der Sauce mit Spülmittel aus dem Stoff.", "steps": ["Trage farbloses Spülmittel auf den Fleck auf und reibe es sanft ein.", "Spüle den Fleck nach 10 Minuten mit kaltem Wasser gründlich aus.", "Lege das feuchte Kleidungsstück danach direkt in die pralle Sonne. UV-Strahlung zerstört das Lycopin restlos."], "timer": 10 },
            { "title": "2. Essig-Wasser-Mischung", "summary": "Die Säure im Essig hilft, den organischen Farbstoff der Tomate aufzuspalten.", "steps": ["Mische Essigessenz und Wasser im Verhältnis 1:1.", "Weiche den Fleck für 15 Minuten in dieser Mischung ein.", "Spüle das Gewebe danach unter kaltem Wasser aus."], "timer": 15 },
            { "title": "3. Gallseife für Fettsaucen", "summary": "Löse den Fett- und Proteingehalt von Tomatensaucen mit Enzymen.", "steps": ["Feuchte die Stelle an und reibe sie mit Gallseife ein.", "Lasse die Seife 10 Minuten lang einwirken.", "Wasche das Kleidungsstück wie gewohnt in der Maschine."], "timer": 10 }
        ],
        "sensibel": [
            { "title": "1. Weingeist-Behandlung (Beste Methode)", "summary": "Nutze hochprozentigen Alkohol, um den Farbstoff ohne Reibung herauszulösen.", "steps": ["Befeuchte ein Wattepad mit Weingeist oder reinem Isopropylalkohol.", "Tupfe den Fleck vorsichtig von außen nach innen ab.", "Lasse den Stoff an der frischen Luft (idealerweise im Tageslicht) trocknen."] },
            { "title": "2. Mineralwasser-Sauerstoff", "summary": "Nutze sprudelndes Wasser als schnelle erste Soforthilfe, um die Kruste anzuheben.", "steps": ["Gieße stark sprudelndes Mineralwasser über den Fleck.", "Tupfe die Sauce vorsichtig mit einem trockenen, weißen Tuch ab.", "Wiederhole dies, um ein tiefes Einziehen in die Wolle oder Seide zu verhindern."] },
            { "title": "3. Seifenfreie Shampoolösung", "summary": "pH-neutrale Tenside lockern die Tomatensauce absolut faserschonend.", "steps": ["Mische ein paar Tropfen mildes Babyshampoo mit kaltem Wasser.", "Trage die Lösung mit einem weichen Tuch auf den Fleck auf.", "Lasse sie 10 Minuten einwirken und tupfe sie mit klarem Wasser ab."], "timer": 10 }
        ]
    },
    "kuli": {
        "warning": "Niemals versuchen, Kugelschreiber mit Wasser und Seife auszureiben. Das verschmiert die lösungsmittelbasierte Tinte großflächig.",
        "robust": [
            { "title": "1. Alkohol- oder Haarspray-Lösung (Beste Methode)", "summary": "Alkohol bricht die Harze und Lösungsmittel der Kugelschreibertinte auf.", "steps": ["Sprühe reines Isopropylalkohol-Spray oder Haarspray (auf Alkoholbasis) auf den Fleck.", "Lasse es 5 Minuten einwirken.", "Tupfe die angelöste Tinte mit einem trockenen Küchentuch ab, bis nichts mehr abfärbt."], "timer": 5 },
            { "title": "2. Zitronensaft-Konzentrat", "summary": "Die konzentrierte Säure löst die chemischen Bindungen der Tinte auf.", "steps": ["Träufle reinen Zitronensaft direkt auf den Kugelschreiberstrich.", "Lasse den Saft 10 Minuten lang einwirken.", "Spüle die Stelle gründlich mit lauwarmem Wasser aus."], "timer": 10 },
            { "title": "3. Das saure Milchbad", "summary": "Die natürliche Milchsäure bindet Tintenpigmente erstaunlich gut aus Baumwolle.", "steps": ["Lege den betroffenen Stoffbereich in eine Schale mit kalter Milch oder Molke.", "Lasse das Textil für 30 Minuten darin einweichen.", "Wasche das Kleidungsstück anschließend ganz normal in der Waschmaschine."], "timer": 30 }
        ],
        "sensibel": [
            { "title": "1. Essigessenz-Kur (Beste Methode)", "summary": "Nutze die schonende Reinigungskraft von Essig für hochempfindliche Gewebe.", "steps": ["Mische Essigessenz im Verhältnis 1:1 mit kaltem Wasser.", "Trage die Mischung mit einem Wattepad punktuell auf den Strich auf.", "Tupfe die Tinte vorsichtig ab und spüle mit kaltem Wasser nach."] },
            { "title": "2. Reiner Weingeist", "summary": "Weingeist enthält keine Zusätze und verdunstet absolut rückstandslos auf Wolle und Seide.", "steps": ["Tränke ein sauberes Wattepad mit reinem Weingeist.", "Tupfe den Kugelschreiberstrich ohne jeglichen Druck ab.", "Erneuere das Wattepad regelmäßig, um ein Verschmieren zu verhindern."] },
            { "title": "3. Franzbranntwein-Tupfung", "summary": "Die Alkoholkomponente im Franzbranntwein bricht die Tinte schonend auf.", "steps": ["Trage etwas Franzbranntwein auf ein weiches Tuch auf.", "Tupfe den Fleck für 5 Minuten vorsichtig ab.", "Wische die Stelle mit einem sauberen, feuchten Tuch gründlich nach."], "timer": 5 }
        ]
    },
    "schokolade": {
        "warning": "Schokolade enthält sowohl Fette als auch Eiweiße. Nutze daher im ersten Schritt niemals heißes Wasser, da sonst das Eiweiß gerinnt.",
        "robust": [
            { "title": "1. Das Eisfach-Prinzip (Beste Methode)", "summary": "Lasse die Schokolade komplett erhärten, um sie mechanisch abzuwischen.", "steps": ["Lege das Kleidungsstück für 30 Minuten in das Eisfach.", "Kratze die gefrorene Schokolade vorsichtig mit einer Löffelkante ab.", "Behandle verbliebene Fett-Reste danach mit warmem Wasser und Spülmittel."], "timer": 30 },
            { "title": "2. Spülmittel-Warmwasser", "summary": "Löse die Schokoladenfette und Kakaoöle direkt mit warmen Tensiden auf.", "steps": ["Trage farbloses Spülmittel auf den Fleck auf.", "Weiche das Kleidungsstück für 10 Minuten in warmem Wasser ein.", "Reibe den Fleck vorsichtig unter Wasser aus."], "timer": 10 },
            { "title": "3. Flüssigwaschmittel-Kur", "summary": "Enzymatisches Flüssigwaschmittel spaltet Milchproteine und Fette gezielt auf.", "steps": ["Gib etwas flüssiges Vollwaschmittel direkt auf den Fleck.", "Lasse es für 15 Minuten einwirken.", "Wasche das Textil bei der maximal erlaubten Temperatur in der Maschine."], "timer": 15 }
        ],
        "sensibel": [
            { "title": "1. Kalte Spülmittel-Tupfung (Beste Methode)", "summary": "Löse die Schokolade sanft und schrittweise mit kaltem Tensidwasser.", "steps": ["Mische kaltes Wasser mit zwei Tropfen farblosem Spülmittel.", "Tupfe den Fleck mit einem weißen Tuch vorsichtig ab.", "Wiederhole den Vorgang geduldig, bis sich die Schokolade vollständig vom Stoff gelöst hat."] },
            { "title": "2. Babypuder für Fettrückstände", "summary": "Babypuder zieht das Schokoladenfett ohne mechanische Belastung aus der Faser.", "steps": ["Streue Babypuder dick auf den Schokoladenfleck.", "Lasse das Puder 20 Minuten lang arbeiten.", "Bürste das Pulver mit einer ultraweichen Bürste sanft ab."], "timer": 20 },
            { "title": "3. Lauwarme Milch-Tupfung", "summary": "Milchproteine lösen die Kakaobestandteile rein mechanisch-chemisch auf.", "steps": ["Feuchte ein weißes Tuch mit lauwarmem Wasser und etwas Kuhmilch an.", "Tupfe den Fleck für 10 Minuten vorsichtig ab.", "Spüle die Stelle danach sofort mit klarem, kaltem Wasser aus."], "timer": 10 }
        ]
    },
    "wachs": {
        "warning": "Versuche niemals, flüssiges Wachs im nassen Zustand wegzureiben. Das verteilt das Wachs tief im Inneren des Gewebes.",
        "robust": [
            { "title": "1. Einfrieren und Brechen (Beste Methode)", "summary": "Mache das Wachs hart und brüchig, um es mechanisch vom Stoff zu trennen.", "steps": ["Lege das Textil in das Gefrierfach oder nutze ein Kältepack für 20 Minuten.", "Brich das harte Wachs vorsichtig mit den Fingern auf.", "Kneife und brösele die Reste einfach komplett aus dem Stoff heraus."], "timer": 20 },
            { "title": "2. Löschpapier-Bügelmethode", "summary": "Nutze Hitze, um das Wachs flüssig zu machen und direkt im Papier aufzusaugen.", "steps": ["Platziere ein Löschpapier unter und über dem Wachsfleck.", "Bügele mit mittlerer Hitze (ohne Dampf) über das Papier.", "Das Wachs schmilzt und zieht sofort in das Papier ein."] },
            { "title": "3. Waschbenzin für Farbrückstände", "summary": "Löse den verbliebenen Fett- und Farbschleier von farbigen Kerzen auf.", "steps": ["Gib etwas Waschbenzin auf ein sauberes Tuch.", "Reibe die verbliebenen Wachsreste vorsichtig ab.", "Lasse die Stelle für 5 Minuten auslüften, bevor du sie wäschst."], "timer": 5 }
        ],
        "sensibel": [
            { "title": "1. Föhn- und Löschpapier-Methode (Beste Methode)", "summary": "Nutze sanfte Wärme, um das Wachs kontrolliert aus der Faser zu saugen.", "steps": ["Lege Löschpapier über und unter den Wachsfleck.", "Nutze einen Haartrockner (Föhn) auf mittlerer Stufe und erwärme die Stelle.", "Das Wachs schmilzt und wird schonend vom Löschpapier aufgesaugt."] },
            { "title": "2. Kältepack und Absaugen", "summary": "Erhärtet Wachs auf Teppichen und Polstern, um es rückstandsfrei abzuheben.", "steps": ["Lege ein Kältepack für 15 Minuten fest auf den Wachsfleck.", "Kratze das hart gewordene Wachs vorsichtig mit einer stumpfen Messerkante ab.", "Sauge die losen Brösel direkt mit dem Staubsauger auf."], "timer": 15 },
            { "title": "3. Reiner Alkohol für Farbschleier", "summary": "Entfernt den farbigen Wachsschimmer rückstandslos aus empfindlichen Stoffen.", "steps": ["Tränke ein Wattepad mit reinem Alkohol.", "Tupfe die farbigen Wachsrückstände für 5 Minuten sanft ab.", "Wische mit einem leicht feuchten Tuch nach."], "timer": 5 }
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
        const category = ["wolle", "seide", "teppich"].includes(material) ? "sensibel" : "robust";
        renderResults(stain, category);
    }
});

backBtn.addEventListener('click', () => {
    resultView.classList.add('hidden');
    homeView.classList.remove('hidden');
    
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
