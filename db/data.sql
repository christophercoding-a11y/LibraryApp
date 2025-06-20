INSERT INTO format (format)
VALUES ('physical');

INSERT INTO format (format)
VALUES
('e-book'),
('audio');



INSERT INTO genre (genre)
VALUES ('fantasy');

INSERT INTO genre (genre)
VALUES
('superhero');
INSERT INTO genre (genre)
VALUES
('mystery');
INSERT INTO genre (genre)
VALUES
('psychological thriller');
INSERT INTO genre (genre)
VALUES
('horror');
INSERT INTO genre (genre)
VALUES
('children literature');
INSERT INTO genre (genre)
VALUES
('comedy');
INSERT INTO genre (genre)
VALUES
('action');
INSERT INTO genre (genre)
VALUES
('dark fantasy');
INSERT INTO genre (genre)
VALUES
('adventure');
INSERT INTO genre (genre)
VALUES
('supernatural');
INSERT INTO genre (genre)
VALUES
('shonen');
INSERT INTO genre (genre)
VALUES
('historical');
INSERT INTO genre (genre)
VALUES
('martial arts');

INSERT INTO publisher (publisher)
VALUES ('bloomsbury');


INSERT INTO publisher (publisher)
VALUES
('dc comics'),
('shueisha'),
('scholastic'),
('random house'),
('skybound entertainment'),
('amulet books'),
('hakusensha'),
('naver webtoon'),
('vic medium'),
('harper and brothers');

INSERT INTO author (author)
VALUES ('jk. rowling');

INSERT INTO author (author)
VALUES
('scott snyder'),
('tsugumi ohba'),
('r.l stine'),
('dr seuss'),
('robert kirkman'),
('jeff kinney'),
('kentaro miura'),
('lee jong'),
('takekiko iuninoue'),
('geoff johns'),
('e.b. white');
INSERT INTO author (author)
VALUES
('brent bristol');

INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty,
    cover_image
)
VALUES (
    "harry potter and the philosopher's stone",
    1,
    1,
    1997,
    '1st edition',
    1999,
    'hardback',
    '5',
    'english',
    223,
    20,
    'harry_porter.jpeg'
);


INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('absolute batman',	2, 2, 2024, '1st edition', 2024, 'paperback', 5, 'english', 176, 10, 'batman.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('deathnote', 3, 3, 2003, '1st edition', 2003,'hardback', 5, 'japanese', 200, 12, 'deathnote.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('goosebumps welcome to the deadhouse', 4, 4, 1992, '1st edition', 1992, 'paperback', 5, 'english', 123, 18, 'goosebumps.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('cat in the hat', 5, 5, 1957, '1st edition', 1957, 'hardback', 5, 'english', 61, 45, 'cat.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('invincible', 6, 6, 2005, '4th edition', 2023,'paperback', 3, 'english', 144, 22, 'invincible.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('diary of the wimpy kid', 7, 7, 2007, '1st edition', 2007, 'paperback', 3, 'english', 244, 14, 'wimpykid.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('berserk', 8, 8, 1986, '1st edition', 2003, 'paperback', 4, 'japanese', 224, 20, 'berserk.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('green eggs and ham', 5, 5, 1960, '1st edition', 1960,	'hardback',	5,	'english', 62, 11, 'greeneggs.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('tower of god', 9, 9, 2010,'2nd edition', 2023, 'e-book', 2, 'korean', 272, 8, 'towergod.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('ordeal', 13, 9, 2021, '1st edition', 2021, 'e-book', 3, 'english', 90, 11, 'ordeal.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('harry potter and the prisoner of azkaban', 1, 1, 1999, '1st edition', 1999, 'hardback', 4,'english', 435, 27, 'harry_porter2.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('vagabond', 10, 10, 1998, '3rd edition', 2008,	'paperback', 3, 'japanese', 728, 14, 'vagabond.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
('absolute superman', 11, 2, 2024, '1st edition', 2024, 'hardback', 5, 'english', 664, 28, 'superman.jpeg');
INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    qty, 
    cover_image
)
values
("charlotte's web", 12, 11, 1952, '4th edition', 2001, 'hardback',  5, 'english', 184, 16, "charlotte's_web.jpeg");


INSERT INTO book_to_genre (book_id, genre_id)
values (1, 1), (1, 10);

INSERT INTO book_to_genre (book_id, genre_id)
values
(2, 2), (2, 8),
(3,3), (3, 4),
(4, 5 ), (4, 6),
(5, 6),
(6, 2), (6, 8),
(7, 6), (7, 7),
(8, 5), (8, 9), (8, 8), (8, 10),
(9, 6),
(10, 1), (10, 8), (10, 10), (10, 14),
(11, 2), (11, 8), (11, 14), (11, 12),
(12, 1), (12, 10),
(13, 13), (13, 14), (13, 12),
(14, 2), (14, 8),
(15, 6);

INSERT INTO book_to_format (book_id, format_id)
values(1, 1), (1, 3);

INSERT INTO book_to_format (book_id, format_id)
values(2, 1);

INSERT INTO book_to_format (book_id, format_id)
values(3, 1), (3, 2);

INSERT INTO book_to_format (book_id, format_id)
values(4, 1), (4, 2);

INSERT INTO book_to_format (book_id, format_id)
values(5, 1), (5, 3);

INSERT INTO book_to_format (book_id, format_id)
values(6, 1), (6, 3);

INSERT INTO book_to_format (book_id, format_id)
values(7, 1);

INSERT INTO book_to_format (book_id, format_id)
values(8, 1), (8, 2);

INSERT INTO book_to_format (book_id, format_id)
values(9, 1), (9, 3);

INSERT INTO book_to_format (book_id, format_id)
values(10, 3);

INSERT INTO book_to_format (book_id, format_id)
values(11, 3);

INSERT INTO book_to_format (book_id, format_id)
values(12, 1), (12, 3);

INSERT INTO book_to_format (book_id, format_id)
values(13, 1), (13, 3);

INSERT INTO book_to_format (book_id, format_id)
values(14, 1);

INSERT INTO book_to_format (book_id, format_id)
values(15, 1), (15, 3);

update author set img_url = 'jk_rowling.jpeg' where author_id = 1;
update author set img_url = 'scott_snyder.jpeg' where author_id = 2;
update author set img_url = 'tsugumi_ohba.jpeg' where author_id = 3;
update author set img_url = 'rl_stine.jpeg' where author_id = 4;
update author set img_url = 'dr_seuss.jpeg' where author_id = 5;
update author set img_url = 'robert_kirkman.jpeg' where author_id = 6;
update author set img_url = 'jeff_kinney.jpeg' where author_id = 7;
update author set img_url = 'kentaro_miura.jpeg' where author_id = 8;
update author set img_url = 'lee_jong.jpeg' where author_id = 9;
update author set img_url = 'takekiko_luninoue.jpeg' where author_id = 10;
update author set img_url = 'geoff_johns.jpeg' where author_id = 11;
update author set img_url = 'eb_white.jpeg' where author_id = 12;
update author set img_url = 'brent_bristol.jpeg' where author_id = 13;

update publisher set img_url = 'bloomsbury.png' where publisher_id = 1;
update publisher set img_url = 'dc_comic.png' where publisher_id = 2;
update publisher set img_url = 'shueisha.png' where publisher_id = 3;
update publisher set img_url = 'scholastic.png' where publisher_id = 4;
update publisher set img_url = 'random_house.png' where publisher_id = 5;
update publisher set img_url = 'skybound_entertainment.png' where publisher_id = 6;
update publisher set img_url = 'amulet_books.png' where publisher_id = 7;
update publisher set img_url = 'hakusensha.png' where publisher_id = 8;
update publisher set img_url = 'naver_webtoon.png' where publisher_id = 9;
update publisher set img_url = 'viz_media.png' where publisher_id = 10;
update publisher set img_url = 'harper_brothers.png' where publisher_id = 11;

update book set cover_image = 'grinch.jpeg' where book_id = 17;

update book set cover_image = 'harry_porter4.jpeg' where book_id = 18;

update book set cover_image = 'goosebumps2.jpeg' where book_id = 21;

update book set cover_image = 'batmanlaughs.jpeg' where book_id = 22;

insert into book_to_genre(book_id, genre_id) values (16, 1), (16, 10);

insert into book_to_format(book_id, format_id) values (16, 1), (16, 3);

insert into book_to_genre(book_id, genre_id) values (17, 6);

insert into book_to_format(book_id, format_id) values (17, 1), (17, 3);

insert into book_to_genre(book_id, genre_id) values (18, 1), (18, 10);


insert into book_to_format(book_id, format_id) values (18, 1), (18, 3);

insert into book_to_genre(book_id, genre_id) values (22, 2), (22, 8);


insert into book_to_format(book_id, format_id) values (22, 1)

insert into book_to_genre(book_id, genre_id) values (21, 5), (21, 6);


insert into book_to_format(book_id, format_id) values (21, 1), (21, 2)


update book set cover_image = 'wimpykid2.jpeg' where book_id = 28;

update book set cover_image = 'swan.jpeg' where book_id = 29;

insert into book_to_genre(book_id, genre_id) values (28, 6), (28, 7);

insert into book_to_format(book_id, format_id) values (28, 1);

insert into book_to_genre(book_id, genre_id) values (29, 6);

insert into book_to_format(book_id, format_id) values (29, 1), (29, 3);

delete from book_to_genre
where book_id = 28;

UPDATE book
SET title = 'Diary of a Wimpy Kid: Rodrick Rules'
WHERE book_id = 28;


UPDATE publisher
SET publisher = 'Viz Media'
WHERE publisher = 'Vic Medium';

UPDATE author
SET author = 'JK. Rowling'
WHERE author = 'Jk. Rowling';