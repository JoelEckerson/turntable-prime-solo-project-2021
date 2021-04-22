
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
    "artist" VARCHAR (80) NOT NULL,
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
('Francoise Hardy', 'Tous Les Garcons Et Les Filles', 'Global', '1962', 'images/FrancoiseHardy.jpeg'),
('Astrud Gilberto', 'The Astrud Gilberto Album', 'Globa', '1965', 'images/AstrudGilberto.png'),
('Fleetwood Mac', 'Rumors', 'Rock', '1977', 'images/FleetwoodMacRumors.png'),
('Talking Heads', 'Speaking in Tongues', 'Rock', '1982', 'images/TalkingHeadsSpeakingTongues.png'),
('Talking Heads', '77', 'Rock', '1977', 'images/TalkingHeads77.jpeg'),
('Talking Heads', 'Fear of Music', 'Rock', '1979', 'images/TalkingHeadsFear.jpeg'),
('Thelonious Monk', 'Monk`s Dream', 'Jazz', '1963', 'images/TheloniousMonkDream.jpeg'),
('Thelonious Monk', 'Brilliant Corners', 'Jazz', '1957', 'images/TheloniousMonkBrilliantCorners.jpg'),
('Thelonious Monk', 'Straight, No Chaser', 'Jazz', '1967', 'images/TheloniousMonkStraight.jpeg'),
('Fela Kuti', 'Beasts of No Nation', 'Global', '1988', 'images/FelaBeasts.jpg'),
('John Coltrane', 'Blue Train', 'Jazz', '1958', 'images/ColtraneBlueTrain.jpeg'),
('John Coltrane', 'Soultrane', 'Jazz', '1958', 'images/ColtraneSoultrane.jpg'),
('John Coltrane', 'Giant Steps', 'Jazz', '1960', 'images/ColtraneGiantSteps.jpeg'),
('Miles Davis', 'Bitches Brew', 'Jazz', '1970', 'images/MilesDavisBrew.jpeg'),
('Miles Davis', '`Round About Midnight', 'Jazz', '1957', 'images/MilesDavisRound.jpg'),
('Dirty Beaches', 'Badlands', 'Alternative', '2011', 'images/DirtyBeachesBadlands.jpeg'),
('Boy Harsher', 'Lesser Man', 'Electronic', '2014', 'images/BoyHarsherLesser.jpeg'),
('Black Marble', 'It`s Immaterial', 'Electronic', '2016', 'images/BlackMarbleImmaterial.jpeg'),
('Black Marble', 'A Different Arrangement', 'Electronic', '2012', 'images/BlackMarbleDifferent.jpg'),
('Sonic Youth', 'Goo', 'Alternative', '1990', 'images/SonicYouthGoo.png'),
('Sonic Youth', 'Daydream Nation', 'Alternative', '1988', 'images/SonicYouthDaydream.jpg'),
('Sonic Youth', 'Dirty', 'Alternative', '1992', 'images/SonicYouthDirty.png'),
('Joy Division', 'Closer', 'Alternative', '1980', 'images/JoyDivisionCloser.jpeg'),
('Blouse', 'Blouse', 'Alternative', '2010', 'images/Blouse.jpeg'),
('Scott Walker', 'Scott 3', 'Rock', '1969', 'images/Scott3.jpg'),
('Alan Vega', 'Saturn Strip', 'Alternative', '1983', 'images/AlanVegaSaturn.jpg'),
('The Cure', 'Seventeen Seconds', 'Alternative', '1980', 'images/CureSeventeenSeconds.jpeg'),
('Galaxie 500', 'On Fire', 'Alternative', '1989', 'images/Galaxie500OnFire.png'),
('My Bloody Valentine', 'Loveless', 'Alternative', '1991', 'images/Loveless.jpeg'),
('My Bloody Valentine', 'Isn`t Anything', 'Alternative', '1989', 'images/IsntAnything.jpeg'),
('Slowdive', 'Souvlaki', 'Alternative', '1993', 'images/SlowdiveSouvlaki.jpg'),
('MF Doom', 'Operation Doomsday', 'Hip Hop', '2001', 'images/MFDoom.jpg'),
('Raekwon', 'Only Built 4 Cuban Linx', 'Hip Hop', '1995', 'images/RaekwonOnly.jpeg'),
('Wu-Tang Clan', 'Enter The Wu-Tang (36 Chambers)', 'Hip Hop', '1993', 'images/WuTang.jpeg'),
('Nas', 'Illmatic', 'Hip Hop', '1994', 'images/Illmatic.jpeg'),
('GZA', 'Liquid Swords', 'Hip Hop', '1995', 'images/GZA.jpeg'),
('Madvillian', 'Madvillainy', 'Hip Hop', '2004', 'images/Madvillainy.png'),
