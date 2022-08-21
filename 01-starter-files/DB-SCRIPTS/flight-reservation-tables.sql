CREATE  DATABASE FLIGHT_RESERVATION;

USE FLIGHT_RESERVATION;

CREATE TABLE FLIGHT(
	ID INT NOT NULL AUTO_INCREMENT,
    FLIGHT_NUMBER VARCHAR(20) NOT NULL,
    OPERATING_AIRLINES VARCHAR(20) NOT NULL,
    DEPARTURE_CITY VARCHAR(20) NOT NULL,
    ARRIVAL_CITY VARCHAR(20) NOT NULL,
    DATE_OF_DEPARTURE DATE NOT NULL,
    ESTIMATED_DEPARTURE_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(ID)
);

CREATE TABLE PASSENGER(
	ID INT NOT NULL AUTO_INCREMENT,
    FIRST_NAME VARCHAR(20),
    LAST_NAME VARCHAR(20),
    MIDDLE_NAME VARCHAR(20),
    EMAIL VARCHAR(40),
    PHONE VARCHAR(10),
    PRIMARY KEY(ID)
);

CREATE TABLE RESERVATION(
	ID INT NOT NULL AUTO_INCREMENT,
    CHECKED_IN TINYINT(1),
    NUMBER_OF_BAGS INT,
    PASSENGER_ID INT,
    FLIGHT_ID INT,
    CREATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(ID),
    FOREIGN KEY(PASSENGER_ID) REFERENCES PASSENGER(ID) ON DELETE CASCADE,
    FOREIGN KEY (FLIGHT_ID) REFERENCES FLIGHT(ID)
)


