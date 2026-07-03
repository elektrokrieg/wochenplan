# Wochenplan – Elektro Krieg Meiningen

PWA für gemeinsame Mitarbeiterplanung. Alle Daten werden in diesem Repository gespeichert.

## Einrichtung (einmalig)

### 1. Repository vorbereiten
- Dieses Repo muss **öffentlich** sein (Settings → Change visibility → Public)
- Unter Settings → Pages → Source: **main branch / root** aktivieren

### 2. GitHub Token erstellen
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" → Note: "Wochenplan"
3. Berechtigung: **repo** (alles ankreuzen)
4. Token kopieren und sicher aufbewahren

### 3. App öffnen & konfigurieren
- App-URL: `https://DEIN-USERNAME.github.io/REPO-NAME/`
- Beim ersten Öffnen erscheint ein Konfigurationsdialog
- GitHub Benutzername, Repo-Name und Token eintragen
- **Der Token wird nur lokal im Browser gespeichert** (localStorage)

### 4. Kollegen einrichten
- Jedem Kollegen die App-URL schicken
- Jeder trägt einmalig seine eigenen GitHub-Zugangsdaten ein
- Danach sehen alle die gleichen Daten (Auto-Sync alle 60 Sekunden)

## Dateistruktur im Repo
```
stammdaten.json          ← Mitarbeiter & Projekte
wochenplan-stark-2026-KW01.json   ← KW-Daten Starkstrom
wochenplan-schwach-2026-KW01.json ← KW-Daten Schwachstrom
urlaub-2026-07.json      ← Urlaubsplan Juli 2026
```

## Funktionen
- ✅ Wochenplan Starkstrom (3 Aufträge pro Tag)
- ✅ Wochenplan Schwachstrom (separate MA-Liste)
- ✅ Urlaubsplan mit Feiertagen (Thüringen)
- ✅ Stammdaten online bearbeitbar
- ✅ Echtzeit-Sync über GitHub
- ✅ Offline-fähig (PWA)
- ✅ Auto-Sync alle 60 Sekunden
