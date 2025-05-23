INSERT INTO users (username, password, role_id)
VALUES 
    ('user1', '$2b$10$H2mTNoMyu.VAmSEqgf12d.OGDeaMjACr8Pt4FqFwL5OEqC1mP1yp6', (SELECT id FROM roles WHERE name = 'user')),
    ('user2', '$2b$10$H2mTNoMyu.VAmSEqgf12d.OGDeaMjACr8Pt4FqFwL5OEqC1mP1yp6', (SELECT id FROM roles WHERE name = 'user'))
ON DUPLICATE KEY UPDATE 
    password = VALUES(password),
    role_id = VALUES(role_id);
