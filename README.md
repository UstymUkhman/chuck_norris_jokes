# chuck_norris_jokes

* Get random Chuck Norris jokes app based on api.chucknorris.io

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.io/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.io/docs/cookbook)

For help getting started with Flutter, view our 
[online documentation](https://flutter.io/docs), which offers tutorials, 
samples, guidance on mobile development, and a full API reference.

## Data

Actually, we've got the following entities: movies, actors, users, runs, stats.

---

### Movie
The Movie's mongo document is:
```JSON
{
    "_id" : "tt0000574",
    "adult" : false,
    "backdrop_path" : "https://image.tmdb.org/t/p/w500/eBirOOZcyx7l0ddYsmiZtxMJDAG.jpg",
    "budget" : 0,
    "genres" : [ 
        {
            "id" : 36,
            "name" : "History"
        }, 
        {
            "id" : 28,
            "name" : "Action"
        }, 
        {
            "id" : 18,
            "name" : "Drama"
        }, 
        {
            "id" : 80,
            "name" : "Crime"
        }
    ],
    "original_language" : "en",
    "original_title" : "The Story of the Kelly Gang",
    "overview" : "Just as Fritz Lang’s Metropolis (1927) is testimony to German silent film art, The Story of the Kelly Gang (1906) symbolises both the birth of the Australian film industry and the emergence of an Australian identity. Even more significantly it heralds the emergence of the feature film format.  The Story of the Kelly Gang, directed by Charles Tait in 1906, is the first full-length narrative feature film produced anywhere in the world.  Only fragments of the original production of more than one hour are known to exist and are preserved at the National Film and Sound Archive, Canberra. (unesco.org)",
    "popularity" : 0.866,
    "poster_path" : "https://image.tmdb.org/t/p/w500/lwG7UdO5zjUOrSFK7kjZLXn3wXY.jpg",
    "release_date" : -1988668800,
    "revenue" : 0,
    "runtime" : 60,
    "spoken_languages" : [ 
        {
            "iso_639_1" : "xx",
            "name" : "No Language"
        }
    ],
    "tagline" : "The Most Sensational, The Most Thrilling and Interesting LIVING PICTURES EVER TAKEN.",
    "title" : "The Story of the Kelly Gang",
    "vote_average" : 5.5,
    "vote_count" : 8,
    "api_id" : 20105,
    "actors" : [ 
        {
            "name" : "Bella Cola",
            "id" : "nm0170118"
        }, 
        {
            "name" : "Sam Crewes",
            "id" : "nm0187697"
        }, 
        {
            "name" : "Vera Linden",
            "id" : "nm0511649"
        }, 
        {
            "name" : "Reg Perry",
            "id" : "nm0675260"
        }, 
        {
            "name" : "E.J. Tait",
            "id" : "nm0846886"
        }
    ]
}
```
---

### Actors (People)
The Actors' mongo document:
```JSON
{
    "_id" : "nm5000160",
    "name" : "Vishagan Vanangamudi",
    "profession" : [ 
        "actor"
    ],
    "knownForTitles" : [ 
        "tt2354117", 
        "tt4147764", 
        "tt4104302", 
        "tt4147762"
    ],
    "api_id" : 1739098,
    "known_for_department" : "Acting",
    "image" : "https://image.tmdb.org/t/p/w500/tQAhGkDHSIqT8QUcq9sUlFA6guV.jpg",
    "popularity" : 0.6,
    "updatedate" : 1548100880
}
```

### Users
---
### Runs
---
### Stats
---

