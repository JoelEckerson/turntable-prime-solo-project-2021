
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

INSERT INTO "album" ("artist", "album", "genre", "year", "image_url")
VALUES ('Miles Davis', 'Kind of Blue', 'Jazz', '1959', 'images/MilesDavisKindofBlue.jpeg'),
('Charles Mingus', 'Mingus Ah Um', 'Jazz', '1959', 'images/CharlesMingusMingusAhUm.jpeg'),
('Hiroshi Yoshimura', 'Green', 'Electronic', '1982', 'images/HiroshiYoshimuraGreen.jpeg'),
('Gary Numan', 'The Pleasure Principal', 'Electronic', '1979', 'images/GaryNumanPleasurePrincipal.jpeg'),
('Sepehr', 'Shaytoon', 'Electronic', '2020', 'images/SepehrShaytoon'),
('Francoise Hardy', 'Tous Les Garcons Et Les Filles', 'Global', '1962', 'images/FrancoiseHardy.jpeg');