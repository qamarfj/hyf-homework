--Find out how many tasks are in the task table
SELECT 
    COUNT(*) as 'Total Task'
FROM
    Task;
/*Find out how many tasks in the task table do not have a valid due date*/
SELECT 
    COUNT(*) as 'unvalid due date tasks'
FROM
    Task
WHERE
    due_date IS NULL;
/*Find all the tasks that are marked as done*/
SELECT 
    *
FROM
    task
        JOIN
    status ON task.status_id = status.id
WHERE
    name = 'Done';
/*Find all the tasks that are not marked as done*/
SELECT 
    *
FROM
    task
        JOIN
    status ON task.status_id = status.id
WHERE
    name != 'Done';
/*Get all the tasks, sorted with the most recently created first*/
SELECT 
    *
FROM
    Task
ORDER BY created DESC;
/*Get the single most recently created task*/
SELECT 
    *
FROM
    Task
ORDER BY created DESC
LIMIT 1;
/*Get the title and due date of all tasks where the title or description contains 'database'*/

SELECT 
    title, due_date
FROM
    task
WHERE
    title LIKE '%database%'
        OR description like '%database%';

/*Get the title and status (as text) of all tasks*/
SELECT 
    title, s.name AS status
FROM
    task t
        JOIN
    status s ON t.status_id = s.id;
    
    /*Get the name of each status, along with a count of how many tasks have that status*/
SELECT 
    s.name, COUNT(*) AS total
FROM
    status s
        JOIN
    task t ON s.id = t.status_id
GROUP BY name;
/*Get the names of all statuses, sorted by the status with most tasks first*/
SELECT 
    s.name
FROM
    status s
        JOIN
    task t ON s.id = t.status_id
GROUP BY name
ORDER BY COUNT(*) DESC;




