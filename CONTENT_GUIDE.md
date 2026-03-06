# 🚀 Content Guide: So füllst du dein Portfolio mit deinen Inhalten

Dieser Guide hilft dir dabei, die Platzhalter durch deine eigenen Projekte, Fotos und Videos zu ersetzen.

---

## 📂 1. Vorbereitung der Assets (Bilder & Videos)

Alle deine Dateien sollten im Ordner `assets/` liegen. Damit alles perfekt aussieht, achte auf folgende Benennungen:

| Inhalt | Empfohlener Dateiname | Format | Tipp |
| :--- | :--- | :--- | :--- |
| **Profilbild** | `portrait_about.jpg` | JPG/PNG | Quadratisch (1:1) wirkt am besten. |
| **Projekt-Cover** | `project_1.jpg`, `project_mockup.jpg` | JPG/PNG | Nutze Mockups (z.B. Device-Screenshots). |
| **Fotografie** | `nature_photo.jpg`, `architecture_photo.jpg` etc. | JPG | Hohe Qualität, aber fürs Web komprimiert. |
| **Videos** | `experiment_1.mp4` | MP4 | Kurz, ohne Ton für automatische Wiedergabe. |

---

## ✍️ 2. Texte anpassen (`index.html`)

Öffne die `index.html` in deinem Editor. Suche nach folgenden Bereichen (nutze `Strg+F` oder `Cmd+F`):

- **Hero-Titel**: Suche nach `<h1>`. Hier steht dein Name und Slogan.
- **Über Mich**: Suche nach `<p class="about-bio-highlight">`. Dort kannst du deinen Werdegang und Ansatz anpassen.
- **Projekt-Titel**: Suche nach `<h3>` innerhalb von `.project-card`. Ändere Name, Kategorie und Beschreibung.

---

## 🖼️ 3. Fotogalerien füllen

Für jede Kategorie (Architektur, Natur, Reisen, Sport) gibt es eine eigene Datei (z.B. `photography-architecture.html`).

1. Öffne die entsprechende Datei.
2. Suche den Bereich `<div class="photo-masonry">`.
3. Kopiere einfach einen bestehenden Block und ändere den `src`-Pfad zu deinem neuen Bild:
   ```html
   <div class="photo-card">
       <img src="assets/DEIN_BILD.jpg" alt="Beschreibung">
   </div>
   ```

---

## 📽️ 4. Experimente-Videos einfügen

Möchtest du statt der Platzhalter deine Videos in der `index.html` zeigen? 

1. Suche den Bereich `#experiments`.
2. Ersetze das `<img>` oder den `<canvas>` durch diesen Code:
   ```html
   <div class="exp-card reveal">
       <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;">
           <source src="assets/dein-video.mp4" type="video/mp4">
       </video>
       <div class="exp-overlay">
           <h5>Projektname</h5>
           <p>Kurzbeschreibung</p>
       </div>
   </div>
   ```

---

## 📄 5. Neue Projekt-Detailseiten erstellen

Wenn du ein zweites Projekt (wie das "Gewalt gegen Frauen" Projekt) anlegen willst:

1. Mache eine Kopie der Datei `project-gewalt.html`.
2. Benenne sie um (z.B. `project-neurohealth.html`).
3. Ändere die Texte, Bilder und den PDF-Link in der neuen Datei.
4. **WICHTIG**: Gehe zurück in die `index.html` und setze den Link bei der entsprechenden Projekt-Box:
   ```html
   <a href="project-neurohealth.html#project-neurohealth" id="project-neurohealth" class="project-card"> ... </a>
   ```

---

### 💡 Profi-Tipp für Figma Frames:
Die Frames im Projekt-Detail sind auf **Hochformat** ausgelegt. Wenn du deine Frames aus Figma exportierst, achte darauf, dass sie eine Breite von ca. **1200px** haben (Retina-Qualität). Die Webseite skaliert sie dann automatisch passend.

Viel Spaß beim Befüllen! Gib mir Bescheid, wenn du bei einem speziellen Bereich Hilfe brauchst. 🎨
