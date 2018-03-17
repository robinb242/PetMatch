### Schema

DROP DATABASE IF EXISTS `petMatchDB`;
CREATE DATABASE `petMatchDB`;



CREATE TABLE animal_traits (

	id int NOT NULL AUTO_INCREMENT,
	animal varchar(255) NOT NULL,
	trait_kids BOOLEAN NOT NULL,
	trait_active BOOLEAN NOT NULL,
	trait_security BOOLEAN NOT NULL,
	trait_independent BOOLEAN NOT NULL,
	trait_cuddly BOOLEAN NOT NULL,
	trait_space BOOLEAN NOT NULL,
	trait_size integer not null check (phone_number between 1 and 5),
	trait_affection integer not null check (phone_number between 1 and 5),
	trait_clean integer not null check (phone_number between 1 and 5),
	trait_unconvertional BOOLEAN NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);





CREATE TABLE user_answers(

	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	user_zip int(5), NOT NULL,
	trait_kids BOOLEAN NOT NULL,
	trait_active BOOLEAN NOT NULL,
	trait_security BOOLEAN NOT NULL,
	trait_independent BOOLEAN NOT NULL,
	trait_cuddly BOOLEAN NOT NULL,
	trait_space BOOLEAN NOT NULL,
	trait_size integer not null check (phone_number between 1 and 5),
	trait_affection integer not null check (phone_number between 1 and 5),
	trait_clean integer not null check (phone_number between 1 and 5),
	trait_unconvertional BOOLEAN NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE pet_suggestions (
 id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	suggestionOne varchar(255) NOT NULL,
	suggestionTwo varchar(255) NOT NULL,
);

CREATE TABLE site_evaluation{
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	siteRanking int,
	
);
