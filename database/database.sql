--name database: mycompany
--DROP TABLE IF EXISTS PUBLIC.client;
--CREATE TABLE PUBLIC.client(
--    client_id SERIAL NOT NULL,
--    name VARCHAR(50),
--    last_name VARCHAR(100),
--    cell VARCHAR(10),
--    observations VARCHAR(300),
--    email VARCHAR(50),
--    created_date TIMESTAMP DEFAULT NOW(),
--    created_by INTEGER DEFAULT 1,
--    update_date TIMESTAMP DEFAULT NOW());

DROP TABLE IF EXISTS PUBLIC.client;

CREATE TABLE PUBLIC.client(
    client_id SERIAL NOT NULL,
    name VARCHAR(50),
    last_name VARCHAR(100),
    cell VARCHAR(10),
    observations VARCHAR(300),
    created_date TIMESTAMP DEFAULT NOW(),
    created_by INTEGER,
    update_date TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (client_id)
);

DROP TABLE IF EXISTS PUBLIC.raffle;

CREATE TABLE PUBLIC.raffle (
  raffle_id SERIAL NOT NULL,
  created_date TIMESTAMP DEFAULT NOW(),
  start_data TIMESTAMP,--add to model
  description VARCHAR(300),
  raffle_date TIMESTAMP NOT NULL,
  PRIMARY KEY (raffle_id));


DROP TABLE IF EXISTS PUBLIC.ticket;

CREATE TABLE PUBLIC.ticket (
  ticket_id SERIAL NOT NULL,
  raffle_id INT NOT NULL,
  client_id INT NOT NULL,
  PRIMARY KEY (ticket_id),
    FOREIGN KEY (raffle_id)
    REFERENCES PUBLIC.raffle (raffle_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    FOREIGN KEY (client_id)
    REFERENCES PUBLIC.client (client_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


DROP TABLE IF EXISTS PUBLIC.prize;

CREATE TABLE PUBLIC.prize (
  prize_id SERIAL NOT NULL,
  Product VARCHAR(100) NULL,
  raffle_id INT NOT NULL,
  PRIMARY KEY (prize_id),
    FOREIGN KEY (raffle_id)
    REFERENCES PUBLIC.raffle (raffle_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);