/*
Part 3: More queries
You should do these queries on the database hyf_lesson2, which we created last class. You can find the data here if you need to create the DB again.
*/
USE hyf_lesson2;
-- Get all the tasks assigned to users whose email ends in @spotify.com by subquery

SELECT 
    *
FROM
    task
WHERE
    id IN (SELECT 
            task_id
        FROM
            user_task
        WHERE
            user_id IN (SELECT 
                    id
                FROM
                    user
                WHERE
                    email LIKE '%@spotify.com'));
                    
-- Get all the tasks assigned to users whose email ends in @spotify.com by join

SELECT 
    t.*
FROM
    task AS t
        JOIN
    user_task AS ut ON t.id = ut.task_id
        JOIN
    user AS u ON u.id = ut.user_id
WHERE
    u.email LIKE '%@spotify.com';
	
-- Get all the tasks for 'Donald Duck' with status 'Not started'                    
SELECT 
    *
FROM
    task
WHERE
    status_id IN (SELECT 
            id
        FROM
            status
        WHERE
            name LIKE 'Not started')
        AND id IN (SELECT 
            task_id
        FROM
            user_task
        WHERE
            user_id IN (SELECT 
                    id
                FROM
                    user
                WHERE
                    name LIKE 'Donald Duck'));
-- Get all the tasks for 'Donald Duck' with status 'Not started' by join                   
SELECT 
    t.*
FROM
    task AS t
        JOIN
    status AS s ON t.status_id = s.id
        JOIN
    user_task AS ut ON ut.task_id = t.id
        JOIN
    user AS u ON u.id = ut.user_id
WHERE
    s.name LIKE 'Not started'
        AND u.name LIKE 'Donald Duck';
		
-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)                    
SELECT 
    *
FROM
    task
WHERE
    MONTH(created) = 09
        AND id IN (SELECT 
            task_id
        FROM
            user_task
        WHERE
            user_id IN (SELECT 
                    id
                FROM
                    user
                WHERE
                    name LIKE 'Maryrose Meadows'));
					
-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)  by join                   
SELECT 
    t.*
FROM
    task AS t
        JOIN
    status AS s ON t.status_id = s.id
        JOIN
    user_task AS ut ON ut.task_id = t.id
        JOIN
    user AS u ON u.id = ut.user_id
WHERE
     MONTH(t.created) = 09
        AND u.name LIKE 'Maryrose Meadows';

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT 
    MONTH(created) AS month_number, COUNT(*) AS Total
FROM
    task
GROUP BY month_number;
    