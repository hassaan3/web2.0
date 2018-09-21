CREATE DATABASE  IF NOT EXISTS webapp;

USE webapp;

CREATE TABLE IF NOT EXISTS `lottery_information` (
	`ID` bigint(20) unsigned not null auto_increment,
    `Email` varchar(50) default null,
    `Amount` decimal(20,0) not null,
    PRIMARY KEY(`ID`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

    