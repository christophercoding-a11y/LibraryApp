DROP DATABASE IF EXISTS librarydb;
CREATE DATABASE librarydb;
USE librarydb;

CREATE TABLE format (
    format_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    format VARCHAR(20) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_format PRIMARY KEY (format_id)
);

CREATE TABLE qty (
    qty_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    qty TINYINT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_qty PRIMARY KEY (qty_id)
);



CREATE TABLE genre (
    genre_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    genre VARCHAR(20),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_genre PRIMARY KEY (genre_id)
);

CREATE TABLE publisher (
    publisher_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    publisher VARCHAR(30),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_publisher PRIMARY KEY (publisher_id)
);


CREATE TABLE author (
    author_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    author VARCHAR(20),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_author PRIMARY KEY (author_id)
);

CREATE TABLE book (
    book_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    publisher_id TINYINT UNSIGNED NOT NULL,
    copyright_year YEAR,
    edition ENUM ('1st edition', '2nd edition', '3rd edition', '4th edition') DEFAULT '1st edition',
    edition_year YEAR,
    binding ENUM ('paperback', 'hardback', 'e-book') DEFAULT 'paperback',
    rating ENUM ('1','2','3','4','5') DEFAULT '1'
    language ENUM  ('english', 'japanese', 'korean') DEFAULT 'english',
    num_pages TINYINT NOT NULL,
    cover_image MEDIUMTEXT,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_book PRIMARY KEY (book_id),
    CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES publisher (publisher_id),
    CONSTRAINT fk_publisher FOREIGN KEY (publisher_id) REFERENCES publisher (publisher_id)
)

CREATE TABLE book_to_genre (
    book_id SMALLINT UNSIGNED NOT NULL,
    genre_id TINYINT UNSIGNED NOT NULL
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_book_bg FOREIGN KEY (book_id) REFERENCES book (book_id),
    CONSTRAINT fk_genre_bg FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
)




