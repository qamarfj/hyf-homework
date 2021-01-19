/*Part 1: Working with tasks
Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id*/

INSERT INTO task 
(title, description, created, updated, due_date, status_id, user_id) 
VALUES('Do homewok','Title says it all.', NOW(),NOW(),'2021-02-01 15:00:00', 1,1);

-- Change the title of a task
UPDATE task 
SET 
    title = 'Shopping'
WHERE
    id = 35;
    
-- Change a task due date
UPDATE task 
SET 
    due_date = '2021-03-01 12:20:00'
WHERE
    id = 36;
    
-- Change a task status
UPDATE task 
SET 
    status_id = 2
WHERE
    id = 36;
    
-- Mark a task as complete
UPDATE task 
SET 
    status_id = (SELECT 
            id
        FROM
            status
        WHERE
            name = 'Done')
WHERE
    id = 36;
    
-- Delete a task
DELETE FROM task 
WHERE
    id = 37;