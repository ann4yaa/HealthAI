CREATE TABLE diseases (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    severity ENUM('Low','Medium','High','Critical') DEFAULT 'Medium',
    description TEXT,
    causes TEXT,
    symptoms TEXT,
    diagnosis_method TEXT,
    treatment TEXT,
    prevention TEXT,
    recovery_time VARCHAR(50),
    is_contagious BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);