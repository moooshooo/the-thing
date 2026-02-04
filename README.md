# The Thing
Är en film och serie sida, när du vill få information om dom 20 populäraste filmer och serier enligt TMDB.com

Denna sida riktad till dom som söker snabb information när en film och serie har för information så som årtal och betyg den har fått

## Arkitecture
```
src/
├── assets/         # Här lagras bilder några bilder
├── components/
|   ├── Footer      # Vår footer som följer under flera sidor
|   ├── ItemCard    # Här visar vi namn/titel årtal och betyg
|   └── Navbar      # Menyn är uppsatt här
|   
├── hooks/
|   └── useTmdb     # Vi använder en customHook för att fetcha  APIn
|   
├── Pages/
|   ├── AboutPage   # Information om denna sida
|   ├── FilmPage    # Alla filmer listade
|   ├── HomePage    # Välkomssidan
|   └── ShowPage    # Alla serier listade
|   
├── routes/
|   └── AppRoutes   # För att hålla det lite clean från app.tsx flyttades alla routes hit
|   
├── services
|   └── api         # Här lever vår logic för Axios
|   
├── types
    └── tmdb        # types för TMDB
```

## Routes
Starts at HomePage and follow forward to others sides via the component NavBar using Navlinks

## Components
ItemCard: is a reusable component to show a show or a movie som it can be reuse.

Footer: have som information with a link to our repository

Navbar: is a component that holds the routes to other pages in this site


## Testa

### Vad behövs
- Node.js (v18 eller högre)
- npm or yarn package manager

### Installation

1. Clone denna repository:
```bash
git clone https://github.com/moooshooo/the-thing.git
```

2. Install dependencies:
```bash
npm install
```

3. Skapa filen `.env` i roten av ditt projekt

***Skapa du 4 variabler:***
```bash
VITE_BASE_URL=https://api.themoviedb.org/3
VITE_IMAGE_BASE_URL=https://image.tmdb.org/t/p
VITE_API_TOKEN=Token-från-TMDBs-sida
VITE_API_KEY=API-nyeckeln-från-TMDBs-sida
```

**För att få en API Key & token**: 
- Filen `.env` finns inte med i repon av säkerhetsskätt och du måste skapa en själv. 

- Du kan skaffa API nyckeln och token via TMDBs hemsida. Besök [TMDBs ](https://www.themoviedb.org/) och skapa ett konto för att få tillgång till 


### Kör lokalt

**Dev läge:**
```bash
npm run dev
```
Appen kommer finnas `http://localhost:5XXX`

**Build för prod:**
```bash
npm run build
```


### Final note
This projekt is a demosite for a schoolprojekt
Kurs 2 - Ramverk & Komponentbaserad utveckling

By: Alexander & M.Leon

Copy it's your right! 2026©