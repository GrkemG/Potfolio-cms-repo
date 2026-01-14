# Personal Portfolio CMS – Examensarbete
Frontend är byggd med React och TypeScript. För styling används Tailwind CSS som byggs via PostCSS. Konfigurationen hanteras automatiskt av Create React App och kräver inga manuella justeringar i produktionsfasen.

# Portfolio CMS – Examensarbete

Detta projekt är ett examensarbete inom webbutveckling med fokus på
frontend, backend och API-kommunikation.  
Applikationen är en portfolio med ett tillhörande CMS (adminpanel)
där projekt kan hanteras.

---

## 📌 Syfte

Syftet med projektet är att:
- Visa teknisk kompetens inom modern webbutveckling
- Bygga en fullstack-applikation med frontend + backend
- Uppfylla kursens krav för examensarbete

---

## 🧱 Teknikstack

### Frontend
- React
- TypeScript
- React Router
- Tailwind CSS
- PostCSS

### Backend
- Node.js
- Express
- REST API
- JSON-baserad datalagring

### Verktyg
- Git & GitHub
- npm
- VS Code

---

## 🖥️ Funktionalitet

### Publik del
- Startsida (Hero, About, Projects, Contact)
- Projekt visas dynamiskt från backend
- Responsiv design

### Admin (CMS)
- Lista projekt
- Skapa nya projekt
- Ta bort projekt
- Dashboard-liknande vy

---

## 🔐 Användarhantering

Admin-funktionalitet är separerad från publik del.
(vidareutveckling kan inkludera autentisering)

---

## 🌐 API

Projektet använder ett egendesignat REST API.

### Endpoints (exempel)

GET  


## Platform Requirements & Limitations
- PHP 8.0+
- MySQL 8.0+
- Modern browsers: Chrome, Firefox, Edge
- Node.js 18+ for frontend

## How to Run the Project
1. Clone the repository
2. Import the database schema
3. Configure database credentials
4. Start backend server
5. Start frontend with:
   ```bash
   npm install
   npm start

## The admin site and projects is done
- Admin sidan klar knappar som lägga till och ta bort funkar




## ✅ Uppfyllda obligatoriska moment

Nedan listas vilka obligatoriska moment från kursen som detta projekt uppfyller:

### 1. Egendesignat REST API
Projektet innehåller ett egendesignat REST API byggt med Node.js och Express.
API:t används för att läsa, skapa och ta bort projekt via standardiserade HTTP-metoder (GET, POST, DELETE).
Frontend kommunicerar med backend via JSON.

### 2. Egendesignad databas
Projektet använder en egendesignad datalagring i form av JSON-filer.
Strukturen är tydligt definierad och används av backend för CRUD-operationer.
Detta uppfyller kravet på egen datamodell.

### 3. Användarhantering (CMS / Admin)
Projektet innehåller en admin-del (CMS) där innehåll kan hanteras.
Adminpanelen gör det möjligt att:
- Visa projekt
- Skapa nya projekt
- Ta bort befintliga projekt

Admin-delen är separerad från den publika delen av applikationen.

### 4. Frontend utan omladdning
Frontend är byggd i React och uppdateras dynamiskt utan omladdning av sidan.
Data hämtas och skrivs via API-anrop med fetch och JSON.

### 5. Routing och snygga URL:er
Projektet använder React Router för routing på klientsidan.
Navigation sker utan sidomladdning och följer SPA-principer.

### 6. Responsiv frontend
Frontend är responsiv och anpassad för olika skärmstorlekar.
Tailwind CSS används för layout, grid och responsiv design.

---

## 🎯 Sammanfattning

Projektet uppfyller fler än tre obligatoriska moment enligt kurskraven
och innehåller både frontend, backend och API-kommunikation av hög kvalitet.

## 
“Projects-sektionen är helt datadriven från backend. Varje projekt renderas dynamiskt med titel, beskrivning och teknikstack.”