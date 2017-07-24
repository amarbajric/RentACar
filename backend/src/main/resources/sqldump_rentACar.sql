-- MySQL dump 10.13  Distrib 5.7.15, for Win64 (x86_64)
--
-- Host: 10.25.2.109    Database: IMA14_lagger_2
-- ------------------------------------------------------
-- Server version	5.6.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) NOT NULL,
  `model` varchar(45) NOT NULL,
  `kilometres` bigint(20) NOT NULL,
  `color` varchar(45) NOT NULL,
  `seat_number` int(10) DEFAULT NULL,
  `construction_year` int(10) NOT NULL,
  `gas_type` varchar(45) NOT NULL,
  `transmission` varchar(45) NOT NULL,
  `horse_power` int(11) NOT NULL,
  `version` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` (`id`, `brand`, `model`, `kilometres`, `color`, `seat_number`, `construction_year`, `gas_type`, `transmission`, `horse_power`, `version`) VALUES (1,'VW','Sharan',50000,'silver',5,2010,'Diesel','manual',110,0),(2,'BMW','3',40000,'blue',4,2008,'Diesel','automatic',150,0),(3,'Opel','Astra',150000,'green',4,2004,'Diesel','manual',90,0),(4,'Mercedes','Sprinter',40000,'black',7,2014,'Benzin','automatic',170,0),(5,'Toyota','Primus',30000,'white',4,2013,'Diesel','automatic',105,0),(6,'Audi','A4',107000,'black',5,2012,'Diesel','manual',140,0);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `address` varchar(45) NOT NULL,
  `phone_number` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `driver_license_number` varchar(55) DEFAULT NULL,
  `password` varchar(500) NOT NULL,
  `version` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` (`id`, `first_name`, `last_name`, `address`, `phone_number`, `email`, `birth_date`, `driver_license_number`, `password`, `version`) VALUES (1,'Amar','Bajric','Linuxweg 4','06604077935','amar.bajric@gmail.com','1997-03-02','123-456-789','$2a$10$fuPrFzgTYOTRNSC8xfOIoe1PhaFHlbxfwMK2YgmAPU9b9l40N7chC',0),(2,'Christian','Lagger','Mintgasse 77','06603569752','christian.lagger@gmail.com','1994-04-16','332-567-463','$2a$10$fuPrFzgTYOTRNSC8xfOIoe1PhaFHlbxfwMK2YgmAPU9b9l40N7chC',0),(3,'Jonas','Dudelsack','Mintweg 69','06604032391','jonas.dudelsack@gmx.com','1999-05-22','125-985-221','$2a$10$zZ2T9FLT/7zs6qCDrbLvPeJTP41v3NCKZ1009ceyQa8qzUdthwYj6',0),(4,'Martha','Leblos','Bergweg 5','06643115607','martha.leblos@hotmail.com','1971-11-09','198-556-720','$2a$10$ZsUS3nD2nTSrprMYFiAbH.Y2IxAFN.dJU7fShdPYLzuj6h5fLDueu',0);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rented_car`
--

DROP TABLE IF EXISTS `rented_car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rented_car` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `car_id` bigint(20) NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  `lease_time` int(30) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKabloy3si9qdtnlqa20ya71txk` (`car_id`),
  KEY `FK7bgmyyp3uyo4knrfhyjrq62td` (`customer_id`),
  CONSTRAINT `FK7bgmyyp3uyo4knrfhyjrq62td` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `FKabloy3si9qdtnlqa20ya71txk` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rented_car`
--

LOCK TABLES `rented_car` WRITE;
/*!40000 ALTER TABLE `rented_car` DISABLE KEYS */;
INSERT INTO `rented_car` (`id`, `version`, `car_id`, `customer_id`, `lease_time`) VALUES (1,0,2,1,4);
/*!40000 ALTER TABLE `rented_car` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-14 15:30:17
