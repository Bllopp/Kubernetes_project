IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'db_project' AND table_name = 'users') THEN
    CREATE TABLE `users` (
        `userId` int NOT NULL AUTO_INCREMENT,
        `username` varchar(45) DEFAULT NULL,
        `password` varchar(45) DEFAULT NULL,
        PRIMARY KEY (`userId`) 
        ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


    INSERT INTO `db_project`.`users`
    (`userId`, 
    `username`,
    `password`) 
    VALUES
    (
    'user1',
    'password1'),
    (
    `user2`,
    `password`
    );

END IF;

IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'db_project' AND table_name = 'tasks') THEN
    CREATE TABLE `tasks` (
    `idtasks` int NOT NULL AUTO_INCREMENT,
    `name` varchar(45) DEFAULT NULL,
    `status` tinyint DEFAULT NULL,
    `userId` int DEFAULT NULL,
    PRIMARY KEY (`idtasks`),
    KEY `userId_idx` (`userId`),
    CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
        ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

END IF;
