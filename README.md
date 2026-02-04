# The Thing
A movie projekt for getting information of the most popular shows and movies.

## What can you find here?
If you are after quick acess quickinformation avout the top 20 most popular movies and series.

## Arkitecture

```
|
|- assets
|-- local images for this site
| 
|- components
|-- Footer
|-- ItemCard
|-- Navbar
|
|- hooks
|-- useTmdb: is a reusable hook to fetch the API
|
|- Pages
|-- AboutPage
|-- FilmPage
|-- HomePage
|-- ShowPage
|
|- routes
|-- AppRoutes
|
|- services
|-- api : We have the axios logic living here
|
|- types
|-- tmdb : some intresting types for TMDB
```

## Routes
Starts at HomePage and follow forward to others sides via the component NavBar using Navlinks

## Components
ItemCard: is a reusable component to show a show or a movie som it can be reuse.

Footer: have som information with a link to our repository

Navbar: is a component that holds the routes to other pages in this site


### Final note
This projekt is a demosite for a schoolprojekt
Kurs 2 - Ramverk & Komponentbaserad utveckling
By: Alexander & M.Leon

Copy it's your right! 2026©