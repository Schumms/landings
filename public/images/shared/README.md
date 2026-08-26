# Shared Assets — Wiederverwendbare Bilder

Dieser Ordner enthält Assets, die von **mehreren Landingpages** genutzt werden.
Beim Erstellen einer neuen Page zuerst hier nach passenden Bildern suchen,
bevor Platzhalter leer bleiben oder neue Bilder erfunden werden.

## Inhalt

### Speaker-Portraits
| Datei | Person |
|-------|--------|
| `susanne-busshart.jpg` | Susanne Busshart (Geschäftsführerin) |
| `simon-busshart.jpg` | Simon Busshart |
| `kiki-radicke.jpg` | Kiki Radicke |
| `jessica-turner.jpg` | Jessica Turner |

### Generische Hero-Bilder
| Datei | Verwendung |
|-------|------------|
| `hero-default.jpg` | Neutraler Default für alle Page-Typen |
| `event-hero-default.jpg` | Event-/Townhall-Stimmungsbild |
| `leadmagnet-hero-default.jpg` | Modernes Büro — passt für New Work, hybride Arbeit |

### Location/Preview
| Datei | Verwendung |
|-------|------------|
| `event-location-default.jpg` | Eventfläche Schumms Wiesbaden (innen/außen) |

## Workflow bei neuen Pages

1. **User hat eigene Bilder** → nutzen (`public/pages/[slug]/`)
2. **User hat keine Bilder** → zuerst hier in `shared/` suchen
3. **Nichts passendes** → transparent kommunizieren, kein erfundenes Bild einsetzen

## Neue Assets hinzufügen

Wenn ein Asset in **3+ Pages** referenziert wird, gehört es hierher.
Kopieren und im Original-Ordner als Symlink oder Duplikat belassen
(wegen Abwärtskompatibilität).
