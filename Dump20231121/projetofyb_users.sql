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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_email` varchar(120) NOT NULL,
  `user_password` varchar(120) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'teste@teste.com','123'),(3,'teste2@teste.com','123'),(5,'',''),(6,'teste@testeteste.com','123'),(7,'amanda@teste.com','12345'),(9,'amandalindex@gmail.com','12345'),(10,'bb@gmail.com','$2b$10$meiZnDy4VNaLCnIPcaobVOgrhOsiRCDgCxdPtaOSoxN/jcfnmBmH.'),(11,'gremio@net.com','$2b$10$ivYbaIJt9f.ejF9QJyyf/.mRawI4VKhpUsRx0mr1ck6FSg/7u3OGW'),(12,'fiori@gmail.com','$2b$10$8E2WIWPyA8EyU2Hesg0paejrzIwlgx7pgpLIvh3BSFma5tj/QLlVq'),(13,'arthur@gmail.com','$2b$10$8.Xema4T8OS0K3uV4NcI9.n6mpXq/CyC9HVQczWnrUrEbzVhPOoUy'),(15,'sor@teste.com','$2b$10$.DU8z3CVEzMjPdGf6kUq1ug7RpcQ3FjjCI8OWD/tqn8F/FC7iPSJG'),(16,'caralho@gmail.com','$2b$10$X6Y9zd6pQnWWs9eS8qTxAeUGRBfzU69tmhmgxLFJdw.8KeuJ8iyly');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-21 11:44:01
