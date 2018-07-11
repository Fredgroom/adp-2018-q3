CREATE DATABASE boomtown;

CREATE USER boomtown WITH PASSWORD 'boomtown';

-- then exited, and re-ran psql:
-- psql -U boomtown -d boomtown
-- DROP TABLE "public"."items";

CREATE TABLE "public"."tags" (
    "id" serial PRIMARY KEY,
    "title" text NOT NULL
);

CREATE TABLE "public"."users" (
    "id" serial PRIMARY KEY,
    "email" text NOT NULL,
    "fullname" text NOT NULL,
    "bio" text
);

CREATE TABLE "public"."items" (
    "id" serial primary key,
    "title" text not null,
    "imageurl" text DEFAULT null,
    "description" text not null,
    "created" timestamp with time zone DEFAULT NOW(),
    "ownerid" integer REFERENCES users(id)
        ON DELETE CASCADE,
    "borrowerid" integer REFERENCES users(id)
        ON DELETE SET NULL
);

CREATE TABLE "public"."itemtags" (
    "itemid" integer references items (id)
        on delete no action,
    "tagid" integer references tags (id)
        on delete no action,
    unique (itemid, tagid)
);

INSERT INTO tags (title)
VALUES ('Household Items'), ('Tools'), ('Electronics'), ('Physical Media'), ('Sporting Goods'), ('Musical Instruments'), ('Recreational Equipment');

INSERT INTO items (title, imageurl, description)
Values (
    'Baseball', 
    'https://media.istockphoto.com/photos/baseball-in-the-infield-picture-id482805043', 
    'Lightly-used baseball for you and your friend to enjoy at your next ball tournament.'
), 
(
    'Purple Racing Bike',
    'https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/3AijacentBN9GedHCvcASxG/221465c4-75e3-4594-ab7c-08518e8df400.jpg/r0_0_3264_2448_w1200_h678_fmax.jpg',
    'Get exercise while having fun in the sun on this super-cool bike.'
), 
(
    'Flute',
    'https://cdn.pixabay.com/photo/2015/08/18/12/43/flute-893911_1280.jpg', 
    'Like-new flute to lend. Cmon, you know you want to play it...'
),
(
    'Puppy',
    'https://i.ytimg.com/vi/AZ2ZPmEfjvU/maxresdefault.jpg',
    'Furry chew machine'
);

Insert into itemtags (itemid, tagid)
VALUES (1, 1), 
(2, 1), (2, 5),
(3, 3), (3, 4),
(4, 1), (4, 5), (4, 7)
;


--How to incorporate the new `created` field:
-- log out of psql
-- start `psql` with the default settings
-- `DROP DATABASE boomtown`
-- `CREATE DATABASE boomtown`
-- log out of psql
-- start psql with user `boomtown` and db `boomtown` ( `psql -U boomtown -d boomtown` )
-- then run all the DDL and data insertion that you have in your `boomtown.sql` file

--all items with their tags:
SELECT  items.title as Item, tags.title as Tag
FROM    items, itemtags, tags
WHERE   items.id = itemtags.itemid
AND     itemtags.itemid = tags.id
;

--a specific item with its tags: 
SELECT  items.title as Item, tags.title as Tag
FROM    items, itemtags, tags
WHERE   items.id = 4
AND     items.id = itemtags.itemid
AND     itemtags.tagid = tags.id
;


--Write a query that returns the number of Items in the database.

    --Freddies attempt lots of help from Darragh
Select count (items) from items; 

--Mikes final
Select count (*) from items;
Select count (items.id) from items;

select avg (*) from items;

--Write a query that returns how many tags, on average, items have.
select count(tagid) from itemtags;
select count(id) from items;

select (count(tagid.itemtags)::numeric) / (count(id.items)::numeric);

SELECT avg(tagid) from itemtags;

SELECT CAST(count(tagid) AS DECIMAL) / CAST(count(id) AS DECIMAL)
From itemtags, items;

SELECT 
avg(
    count(tagid) 
)
From itemtags;

Select 
SELECT items.title 
FROM items;

SELECT items.title
FROM items
GROUP BY created
ORDER BY created;

SELECT tagid from itemtags, id from items, cast(tagid as float)/cast(id as float);