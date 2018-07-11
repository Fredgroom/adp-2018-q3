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
    "ownerid" integer REFERENCES users(id),
    "borrowerid" integer REFERENCES users(id)
);

INSERT INTO tags (title)
VALUES ('Household Items'), ('Tools'), ('Electronics'), ('Physical Media'), ('Sporting Goods'), ('Musical Instruments'), ('Recreational Equipment');

INSERT INTO items (title, imageurl, description)
Values (
    'Baseball', 
    '#', 
    'Lightly-used baseball for you and your friend to enjoy at your next ball tournament.'
), 
(
    'Purple Racing Bike',
    '#',
    'Get exercise while having fun in the sun on this super-cool bike.'
), 
(
    'Flute',
    '#', 
    'Like-new flute to lend. Cmon, you know you want to play it...'
);

Insert into itemtags (itemid, tagid)
values (1, 1), 
(2, 1), (2, 5),
(3, 3), (3, 4),
(4, 1), (4, 5), (4, 7);