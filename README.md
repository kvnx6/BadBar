# 🌊 Badbar

### *Heute schon badbar?*

Klicke auf einen beliebigen Ort der Weltkarte und Badbar sagt dir sofort, ob dort heute Badewetter ist. Mit Live-Daten zu Luft, Wasser, Wind, Regen und Sonne.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![Open-Meteo](https://img.shields.io/badge/Open--Meteo-1E88C8?style=for-the-badge)

---

**BadBar Link:** [BadBar](https://inf-293-25g-25g293user4.iet-gibb.net/Teil3/badbar)

---

## Features

- **Interaktive Weltkarte** mit Leaflet und OpenStreetMap, ohne API-Key
- **Klick auf jeden Ort der Welt** und die Wetterdaten werden live geladen
- **Badeampel** mit drei Stufen: Badbar · Eher frisch · Nicht badbar
- **Live-Werte:** Lufttemperatur, Wind, Niederschlag, UV-Index und Wassertemperatur (an Meeren, 🔜 Seen und Flüsse)
- **Ortssuche**, damit die Karte direkt zu einem Ort springt
- **Tabelle** mit allen Messwerten und der Bewertung
- **Responsiv:** Hamburger Menü und gestapeltes Layout auf dem Handy
- **Kontaktformular** mit Validierung
- **Bildergalerie** mit Strandbad Impressionen
- **Fehlerbehandlung**, falls Daten nicht geladen werden können

---

## So funktioniert die Badeampel

| Ergebnis | Bedingung |
|---|---|
| **Badbar** | Luft über 24 °C, Wasser über 20 °C, Wind unter 30 km/h, kein Regen |
| **Eher frisch** | Luft 18–24 °C oder Wasser 16–20 °C oder stärkerer Wind |
| **Nicht badbar** | darunter, bei Regen oder Wellen über 2 m |

> **Hinweis:** Die Wassertemperatur liefert die Marine-API nur für Meere und Ozeane. Bei Seen und im Landesinneren zeigt Badbar «keine Daten» an und bewertet nur nach Luft, Wind und Regen.

---

## Technik

| Bereich | Verwendet |
|---|---|
| Framework | [Angular](https://angular.dev) mit TypeScript |
| Design | HTML5, CSS3 (Flexbox, Grid, Media Queries) |
| Daten abrufen | Angular `HttpClient` |
| Formular | Angular Reactive Forms mit Validatoren |
| Navigation | Angular Router |
| Karte | [Leaflet](https://leafletjs.com) mit [OpenStreetMap](https://www.openstreetmap.org) |
| Wetterdaten | [Open-Meteo Forecast API](https://open-meteo.com/en/docs) |
| Wassertemperatur | [Open-Meteo Marine API](https://open-meteo.com/en/docs/marine-weather-api) |
| Ortssuche | [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) |
| Schriften | Poppins und Open Sans (Google Fonts) |

---

## Design

| Farbe | Vorschau | Hex | Bedeutung |
|---|---|---|---|
| Seeblau | ![#1E88C8](https://img.shields.io/badge/-%20%20%20%20%20%20%20%20-1E88C8?style=flat-square) | `#1E88C8` | Wasser, Frische |
| Sand | ![#F2E3C6](https://img.shields.io/badge/-%20%20%20%20%20%20%20%20-F2E3C6?style=flat-square) | `#F2E3C6` | Strand, Wärme |
| Koralle | ![#FF6B57](https://img.shields.io/badge/-%20%20%20%20%20%20%20%20-FF6B57?style=flat-square) | `#FF6B57` | Sommerenergie, Buttons |
| Weiss | ![#FFFFFF](https://img.shields.io/badge/-%20%20%20%20%20%20%20%20-FFFFFF?style=flat-square) | `#FFFFFF` | Klarheit, Luft |

---

## Projektstruktur

```
src/app/
├── components/
├── pages/
│   ├── home/
│   ├── badewetter/
│   ├── badetipps/
│   ├── community-images/
│   ├── kontakt/
│   └── impressum/
├── services/
│   └── wetter.service.ts   # API-Abrufe (Open-Meteo)
├── stores/
│   └── wetter.store.ts   # Damit die Daten über mehrere Komponente verfügar sind
├── app.routes.ts
└── app.component.ts
```

## Build und Veröffentlichung

```bash
ng build --base-href ./ --configuration production
```

Der fertige Build liegt im Ordner `dist/`. Dessen Inhalt wird auf den Webserver hochgeladen.

---

## Datenquellen und Lizenzen

- Wetterdaten von [Open-Meteo.com](https://open-meteo.com), lizenziert unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Die Nutzung ist für nicht-kommerzielle Projekte gedacht.
- Kartendaten © [OpenStreetMap](https://www.openstreetmap.org/copyright)-Mitwirkende

---

## Autor

**Kevin**, Schulprojekt «Eigene Website» (Teil 3)
GitHub: [@kvnx6](https://github.com/kvnx6)

---
