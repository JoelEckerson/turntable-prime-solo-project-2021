
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

-- Create a table to hold the main 
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
('Black Sabbath', 'Sabbath Bloody Sabbath', 'Rock', '1973', 'images/SabbathBloodySabbath.png'),
('Black Sabbath', 'Master of Reality', 'Rock', '1971', 'images/MasterOfReality.jpeg'),
('Broadcast', 'Tender Buttons', 'Alternative', '2005', 'images/TenderButtons.jpg'),
('Total Control', 'Henge Beat', 'Punk', '2011', 'images/HengeBeat.png'),
('Jesus & Mary Chain', 'Psychocandy', 'Alternative', '1985', 'images/Psychocandy.jpeg'),
('Thee Oh Sees', 'Help', 'Alternative', '2009', 'images/TheeOhSeesHelp.jpeg'),
('Oh Sees', 'Orc', 'Alternative', '2017', 'images/Orc.jpeg'),
('Thee Oh Sees', 'Mutilator Defeated At Last', 'Alternative', '2015', 'images/Mutilator.jpeg'),
('OSees', 'Metamorphosed', 'Alternative', '2020', 'images/Metamorphosed.jpeg'),
('The OhSees', 'Sucks Blood', 'Alternative', '2007', 'images/SucksBlood.jpeg'),
('The OhSees', 'The Master`s Bedroom Is Worth Spending a Night In', 'Alternative', '2008', 'images/MastersBedroom.jpeg'),
('Thee Oh Sees', 'Dog Poison', 'Alternative', '2009', 'images/DogPoison.jpg'),
('Thee Oh Sees', 'Castlemania', 'Alternative', '2011', 'images/Castlemania.jpeg'),
('Thee Oh Sees', 'Floating Coffin', 'Alternative', '2013', 'images/FloatingCoffin.jpeg'),
('Oh Sees', 'Smote Reverser', 'Alternative', '2018', 'images/Smote.jpeg'),
('OSees', 'Protean Threat', 'Alternative', '2020', 'images/ProteanThreat.jpeg'),
('Thee Oh Sees', 'Putrifiers II', 'Alternative', '2012', 'images/Putrifiers.jpeg'),
('Thee Oh Sees', 'Carrion Crawler / The Dream', 'Alternative', '2011', 'images/Carrion.jpeg'),
('Cocteau Twins', 'Heaven or Las Vegas', 'Alternative', '1990', 'images/HeavenOr.jpeg'),
('Wire', 'Pink Flag', 'Punk', '1977', 'images/PinkFlag.jpeg'),
('Naomi Punk', 'The Feeling', 'Punk', '2012', 'images/NaomiPunk.jpg'),
