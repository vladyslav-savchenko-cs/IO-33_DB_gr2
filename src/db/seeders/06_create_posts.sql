INSERT INTO posts (title, content, user_id)
VALUES 
    ('First Post', 'This is the first post content.', (SELECT id FROM users WHERE username = 'user1')),
    ('Admin Announcement', 'This is an announcement from the admin.', (SELECT id FROM users WHERE username = 'admin')),
    ('Empty Content', '', (SELECT id FROM users WHERE username = 'user1'))
ON DUPLICATE KEY UPDATE 
    content = VALUES(content), 
    user_id = VALUES(user_id);
