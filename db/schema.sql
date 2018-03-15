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
	trait_large BOOLEAN NOT NULL,
	trait_medium BOOLEAN NOT NULL,
	trait_small BOOLEAN NOT NULL,
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
	trait_large BOOLEAN NOT NULL,
	trait_medium BOOLEAN NOT NULL,
	trait_small BOOLEAN NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);

