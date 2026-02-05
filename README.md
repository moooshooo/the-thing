# The Thing
Är en film och serie sida, när du vill få information om dom 20 populäraste filmer och serier enligt TMDB.com

Denna sida riktad till dom som söker snabb information när en film och serie har för information så som årtal och betyg den har fått

## Arkitekture / Mappstruktur
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
Routing i denna sida startar från Home och via menyn högst upp kan du navigera dig mellan serier och filmer med hjälp av < NavLinks > i en separat fil för att hantera Routing och en separat komponent som hanterar Navbar

## Komponents
ItemCard: Är en återanvändbar komponent som strukturerar varje film och serie. Som visar en films/serie: bild, titel/namn, årtal, betyg och typ = movie/tv (film eller serie).

Footer: Är en komponent som följer med i alla sidor, i den finns kort information om skaparna och länk till vår repository

Navbar: Denna komponent har alla menyer 

## Hooks
Vi skapade en custom hook för att hålla oss till DRY-regeln (Don't Repeat Yourself) eftersom vi hämtar samma data för både filmer och serier men skiljer dom beroende på vilken kategori dom tillhör. 
Detta gör vi efter vi har mappat i ShowPages/FilmPage genom props döpt till "Type" som kan antinven vara "movie"/"tv": 
< ItemCard item={movie} type="movie" />

## Tester
Vi använde oss av Cypress för att testa navigationen till sidorna.
vi la till en class namn till både serier ( ShowItem ) och filmer ( MovieItem ) innuti "maping" för att kontrollera att APIn  laddas upp.

## Trade-offs och reflektion
Denna projeckt drabbades tyvärr av fler dördröjningar. som gjorde att leveransen dröjde.
Vi landade väldigt snabbt på något gemensamt. En video sida där vi kunde få information om filmer och tv-serirer.

Vi gick fram och tillbaka mellan JSX och TSX när tiden närmade sig.
Att vi landade på TSX var att vi ville säkerhetsställa att vi visste vad som hämtades från TMDB, jsx gav lite problem när vi använde version 2 jämfört med version 3. (V2 använder API nyckel, V3 använder TMDBs token åtkomst)

En tradeof som var väldigt tydligt var valet mellan JSX och TSX, det självklara valet blev TSX, även med sitt stricka "typing" så gynnar den ökning av potentiella problem och fel.
När vi gick till att göra denna projekt till JSX så blev det snabbt många saker som inte kändes bra och antalet fel kunde bli fel om vi inte "typade" vad vi skulle förvänta oss.

## Ai användning
För error hantering i lokala states använde jag AI för att kunna få lite mer insyn i hantering av dessa.
JS statment "Try", "Catch" och "Finally" gav ett lärande moment hur en kunde hantera dessa meddelnade.

Ai hjälpte mig att felsköka problemen med typing som TMDB hade.
TMDB har "namn" för serier och "title" för filmer.
det möjligtgjorde ett snabb hantering av problemet istället för att läsa invecklad dokumentation hos TMDB

# Installera denna sida
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
```javascript
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

## Kör Tester
Vi har installerat Cypress och skrivit några tester för navigering och säkertställa att APIn hämtats.

4 tester kontroller navigering av sidorna
/login
/home 
/filmer + API
/serier + API
/about

```bash
npm run test
```

### Final note
This projekt is a demosite for a schoolprojekt
Kurs 2 - Ramverk & Komponentbaserad utveckling

By: Alexander & M.Leon
Git repon: https://github.com/moooshooo/the-thing.git 

Copy it's your right! 2026©