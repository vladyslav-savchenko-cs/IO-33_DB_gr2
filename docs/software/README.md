# Реалізація інформаційного та програмного забезпечення

``` sql
CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS role_permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE,
    UNIQUE KEY (role_id, permission_id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    INDEX (post_id)
);

CREATE TABLE IF NOT EXISTS attachments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  post_id INT NOT NULL,
  filename VARCHAR(255) NOT NULL,
  path VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE IF NOT EXISTS datasets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  query TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS access_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  action VARCHAR(255) NOT NULL,
  entity VARCHAR(255) NOT NULL,
  entity_id INT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO roles (name) VALUES ('user'), ('admin')
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT INTO permissions (name) VALUES 
    ('update_own_post'),
    ('update_any_post'),
    ('delete_own_post'),
    ('delete_any_post'),
    ('modify_own_user'),
    ('create_user'),
    ('modify_any_user'),
    ('delete_any_comment'),
    ('delete_own_comment'),
    ('create_dataset'),
    ('read_dataset'),
    ('update_dataset'),
    ('delete_dataset');

INSERT INTO role_permissions (role_id, permission_id) VALUES
    ((SELECT id FROM roles WHERE name = 'user'), 
     (SELECT id FROM permissions WHERE name = 'update_own_post')),
    ((SELECT id FROM roles WHERE name = 'user'), 
     (SELECT id FROM permissions WHERE name = 'delete_own_post')),
    ((SELECT id FROM roles WHERE name = 'user'), 
     (SELECT id FROM permissions WHERE name = 'modify_own_user')),
    ((SELECT id FROM roles WHERE name = 'user'), 
     (SELECT id FROM permissions WHERE name = 'delete_own_comment')),
    ((SELECT id FROM roles WHERE name = 'admin'), 
     (SELECT id FROM permissions WHERE name = 'update_any_post')),
    ((SELECT id FROM roles WHERE name = 'admin'), 
     (SELECT id FROM permissions WHERE name = 'delete_any_post')),
    ((SELECT id FROM roles WHERE name = 'admin'), 
     (SELECT id FROM permissions WHERE name = 'create_user')),
    ((SELECT id FROM roles WHERE name = 'admin'), 
     (SELECT id FROM permissions WHERE name = 'modify_any_user')),
    ((SELECT id FROM roles WHERE name = 'admin'), 
     (SELECT id FROM permissions WHERE name = 'create_dataset')),
    ((SELECT id FROM roles WHERE name = 'admin'), 
     (SELECT id FROM permissions WHERE name = 'read_dataset')),
    ((SELECT id FROM roles WHERE name = 'admin'), 
     (SELECT id FROM permissions WHERE name = 'update_dataset')),
    ((SELECT id FROM roles WHERE name = 'admin'), 
     (SELECT id FROM permissions WHERE name = 'delete_dataset')),
    ((SELECT id FROM roles WHERE name = 'admin'), 
     (SELECT id FROM permissions WHERE name = 'delete_any_comment'));

INSERT INTO users (username, password, role_id)
VALUES 
    ('admin', '$2b$10$KXEzU9G5yEo9JY06f/VY9uKT.eNl/yf5Y3LKumUDjFA72If5h84Pa', (SELECT id FROM roles WHERE name = 'admin'))
ON DUPLICATE KEY UPDATE username = username;

INSERT INTO users (username, password, role_id)
VALUES 
    ('user1', '$2b$10$abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij', (SELECT id FROM roles WHERE name = 'user')),
    ('user2', '$2b$10$mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuv', (SELECT id FROM roles WHERE name = 'user')),
    ('den47k', '$2b$10$94vaHhbhX7nmTQ3k3Vb9TuoflCbweRXRTs74Y7.RUscEnpmZzSPfi', (SELECT id FROM roles WHERE name = 'admin'))
ON DUPLICATE KEY UPDATE 
    password = VALUES(password),
    role_id = VALUES(role_id);

INSERT INTO posts (title, content, user_id)
VALUES 
    ('First Post', 'This is the first post content.', 2),
    ('Admin Announcement', 'This is an announcement from the admin.', 1),
    ('Empty Content', '', 2),
    ('Special Characters', '¡¿@#$%^&*()_+=-[]{}|;:"<>,.?/~`', 3)
ON DUPLICATE KEY UPDATE content = VALUES(content), user_id = VALUES(user_id);
```