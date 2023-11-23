-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: projetofyb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dados_paciente`
--

DROP TABLE IF EXISTS `dados_paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dados_paciente` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `nome_paciente` varchar(255) NOT NULL,
  `numero_contato` varchar(20) NOT NULL,
  `sexo` enum('feminino','masculino') NOT NULL,
  `nacionalidade` varchar(50) DEFAULT NULL,
  `sindrome` enum('sindrome_gripal','respiratoria_aguda_grave') NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  `horario_entrada` time DEFAULT NULL,
  `data_entrada` date DEFAULT NULL,
  `data_saida` date DEFAULT NULL,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dados_paciente`
--

LOCK TABLES `dados_paciente` WRITE;
/*!40000 ALTER TABLE `dados_paciente` DISABLE KEYS */;
INSERT INTO `dados_paciente` VALUES (1,'Amanda','51 998313254','masculino','brasileiro','respiratoria_aguda_grave',NULL,'08:07:00','2023-11-07','2023-11-14'),(2,'Leonardo','51 98928361','masculino','Brasileiro','respiratoria_aguda_grave','2023-11-13','10:52:00','2023-11-09','2023-11-09'),(3,'Betina','51999999999','masculino','Italiana','sindrome_gripal','2005-10-08','13:44:00','2023-10-17','2023-10-24'),(4,'josé','51 999999','masculino','brasil','sindrome_gripal','2023-11-09','10:47:00','2023-01-13','2023-11-07'),(5,'Amanda','51 9287372920','masculino','InglÊs','respiratoria_aguda_grave','2023-02-11','14:51:00','2023-11-23','2023-11-13'),(6,'Amanda','51 9287372920','masculino','InglÊs','respiratoria_aguda_grave','2023-02-11','14:51:00','2023-11-23','2023-11-13'),(7,'Amanda','51 9287372920','masculino','InglÊs','respiratoria_aguda_grave','2023-02-11','14:51:00','2023-11-23','2023-11-13'),(8,'Amanda','51 9287372920','masculino','InglÊs','respiratoria_aguda_grave','2023-02-11','14:51:00','2023-11-23','2023-11-13'),(9,'Amanda','51 9287372920','masculino','InglÊs','respiratoria_aguda_grave','2023-02-11','14:51:00','2023-11-23','2023-11-13'),(10,'Amanda','51 9287372920','masculino','InglÊs','respiratoria_aguda_grave','2023-02-11','14:51:00','2023-11-23','2023-11-13'),(11,'Malu','51 999999999','feminino','Brasileira','sindrome_gripal','2023-01-14','10:53:00','2023-03-14','2023-03-16'),(12,'Malu','51 999999999','feminino','Brasileira','sindrome_gripal','2023-01-14','10:53:00','2023-03-14','2023-03-16'),(13,'Betina','51 99999999999999','masculino','Inglês','respiratoria_aguda_grave','2023-11-09','18:47:00','2023-05-14','2023-11-14'),(14,'Amanda','51 99999999','masculino','Brasileira','respiratoria_aguda_grave','2023-11-13','17:37:00','2023-08-11','2023-11-01');
/*!40000 ALTER TABLE `dados_paciente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-23 16:23:56
