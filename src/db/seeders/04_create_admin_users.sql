INSERT INTO users (username, password, role_id)
VALUES 
    ('admin', '$2b$10$H2mTNoMyu.VAmSEqgf12d.OGDeaMjACr8Pt4FqFwL5OEqC1mP1yp6', (SELECT id FROM roles WHERE name = 'admin'))
ON DUPLICATE KEY UPDATE username = username;
