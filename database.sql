
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR (50),
    "email" VARCHAR (50),
    "bio" VARCHAR (1000)
);

CREATE TABLE "album" (
    "id" SERIAL PRIMARY KEY,
    "artist" VARCHAR (80) UNIQUE NOT NULL,
    "album" VARCHAR (1000) NOT NULL,
    "genre" VARCHAR (50) NOT NULL,
    "year" VARCHAR (50),
    "image_url" VARCHAR (1000)
);

CREATE TABLE "wantlist" (
    "id" SERIAL PRIMARY KEY,
    "album_id" INT REFERENCES "album" NOT NULL,
    "user_id" INT REFERENCES "user" NOT NULL,
    "comments" VARCHAR (1000),
    "rating" VARCHAR (10)
);

CREATE TABLE "collection" (
    "id" SERIAL PRIMARY KEY,
    "album_id" INT REFERENCES "album" NOT NULL,
    "user_id" INT REFERENCES "user" NOT NULL,
    "comments" VARCHAR (1000),
    "rating" VARCHAR (10)
);