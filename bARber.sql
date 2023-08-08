CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL,
    location TEXT NOT NULL,
    phone INT NOT NULL,
    gender ENUM('Male', 'Female', 'Unisex') NOT NULL
);

CREATE TABLE Appointments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    client_name VARCHAR(256) NOT NULL,
    client_phone INT NOT NULL,
    time DATETIME NOT NULL,
    body TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
