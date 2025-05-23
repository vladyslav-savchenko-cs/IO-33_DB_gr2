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