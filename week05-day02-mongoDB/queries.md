How many people are humans from Tatooine?
> db.characters.find({"homeworld.name": "Tatooine", "species.name": "Human"}).count();

list humans from tatooine.
> db.characters.find({"homeworld.name": "Tatooine", "species.name": "Human"}).pretty();


How many people appear in The Empire Strikes Back?
> db.characters.find({"films": "The Empire Strikes Back"}).count();

How many people are taller than than 170cm?
> db.characters.find({"height": {$gt: 170}}).count();


How many people fly some form of X-Wing?
> db.characters.find({"starships.name": "X-wing"}).count();


Return the names and masses of humans, ordered in descending order by known mass. Skip the first two results and limit your results to only four people.
> db.characters.find({"species.name":"Human"}).skip(2).limit(4).sort({"mass": -1}).pretty();

