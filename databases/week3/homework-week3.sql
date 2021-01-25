-- Data model
SET NAMES utf8mb4;
CREATE DATABASE Mealsharing;
USE Mealsharing;

CREATE TABLE `Meal` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `location` varchar(255),
  `when` datetime,
  `max_reservations` int,
  `price` decimal,
  `created_date` date
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Reservation` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `number_of_guests` INT NOT NULL,    
    `meal_id` INT NOT NULL,
    FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`),
    `created_date` DATE NOT NULL,
    `contact_phonenumber` VARCHAR(255),
    `contact_name` VARCHAR(255),
    `contact_email` VARCHAR(255)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `Review` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `description` text,
  `meal_id` int,
   FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`),
  `stars` int,
  `created_date` date
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Meal Queries 
-- Get all meals
SELECT 
    *
FROM
    Meal;

-- Add a new meal
INSERT INTO Meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
values('Marinated & Grilled','Vegetables, avocado, peanuts & spicy dressing','Vesterbro', '2021-02-01 14:00:00',9,50,'2021-01-25');

-- Get a meal with any id, fx 1
SELECT 
    *
FROM
    Meal
WHERE
    id = 1;
    
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal 
SET 
    title = 'Marinated & Grilled'
WHERE
    id = 1;
    
    
-- Delete a meal with any id, fx 2
DELETE FROM Meal 
WHERE
    id = 2; 
    
-- Reservation Queries     
-- Get all reservations
SELECT 
    *
FROM
    reservation;
-- Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(7,1,'2021-01-25',+4578787878,'Hansen','hns@mail.com');

-- Get a reservation with any id, fx 1
SELECT 
    *
FROM
    reservation
WHERE
    id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET 
    contact_name = 'Peter'
WHERE
    id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation 
WHERE
    id = 1;
    
-- Review Queries

-- Get all reviews
SELECT 
    *
FROM
    review;
-- Add a new review
INSERT INTO review (title,description, meal_id, stars, created_date)
values('Good','It was a nice meal',1,4,'2021-01-25');

-- Get a review with any id, fx 1
SELECT 
    *
FROM
    review
WHERE
    id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review 
SET 
    title = 'Greate Meal'
WHERE
    id = 1;

-- Delete a review with any id, fx 1
DELETE FROM review 
WHERE
    id = 1;
    
-- Additional queries
-- Now add a couple of different meals, reservations and reviews with different attributes. 
-- Add a new meals
INSERT INTO Meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
values('Rød grød med fløde','Vegetables, avocado, peanuts & spicy dressing','østerbro', '2021-03-13 14:00:00',8,50,'2021-01-26'),
('Green Mango & Grilled','Vegetables, lemongrass & spicy dressing','valby', '2021-02-12 14:00:00',7,60,'2021-01-24'),
('WOK’s Spring Rolls','Chicken, prawn & vegetables - sweet chili & soy sauce','køge', '2021-01-25 14:00:00',3,70,'2021-01-23'),
('WOK’s Veggie Spring Rolls','mealSliced vegetables - sweet chili & soy sauce','herlev', '2021-02-27 14:00:00',5,80,'2021-01-22'),
('Tempura King Prawns','Served with lemon - spicy mayo or wasabi dip','husum', '2021-02-15 14:00:00',10,90,'2021-01-21');

-- Add a new reservations
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(7,3,'2021-01-25', '+4578787878','Hansen','hns@mail.com'),
(3,	3, '2021-01-25',	'4578787878',	'Maja',	'maja@mail.com'),
(5,	5, '2021-01-21',	'4588787878',	'Ole',	'ole@mail.com'),
(8, 4,	'2021-01-23',	'4578788888',	'Peter',	'peter@mail.com'),
(2, 6, '2021-01-22',	'4578789998',	'Jen',	'jen@mail.com'),
(7, 5,	'2021-01-15',	'4578700008',	'Jansen',	'jns@mail.com');

-- Add a new reviews
INSERT INTO review (title,description, meal_id, stars, created_date)
values('Good','It was a nice meal',3,4,'2021-01-25'),
	('Good',	'It was a good meal'	,4,	4,	'2021-01-26'),
	('Delightful'	,'Meal was a delicious, host was nice. ',	4,	5	,'2021-02-24'),
	('Ok',	'It was a good meal but place was bit cozy', 4	,3,	'2021-01-23'),
	('Poor','It was a bad meal'	,6,	2	,'2021-01-21');

-- Functionality
-- Get meals that has a price smaller than a specific price fx 90
SELECT 
    *
FROM
    meal
WHERE
    price < 60;
    
-- Get meals that still has available reservations

SELECT 
    *
FROM
    meal
WHERE
    max_reservations > (SELECT 
            SUM(number_of_guests)
        FROM
            reservation
        WHERE
            meal_id = meal.id);
-- By join
	SELECT 
    *
FROM
    meal
        JOIN
    (SELECT 
        m.id AS id, SUM(r.number_of_guests) AS guests
    FROM
        meal m
    JOIN reservation r ON m.id = r.meal_id
    GROUP BY m.id) AS m_r ON meal.id = m_r.id
        AND meal.max_reservations > m_r.guests;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT 
    *
FROM
    meal
WHERE
    title LIKE '%Rød grød med%';
-- Get meals that has been created between two dates
SELECT 
    *
FROM
    meal
WHERE
    created_date BETWEEN '2021-01-23' AND '2021-01-26';
-- Get only specific number of meals fx return only 5 meals

SELECT 
    *
FROM
    meal
LIMIT 5;

-- Get the meals that have good reviews
SELECT 
    M.*
FROM
    meal M
        JOIN
    review R ON M.id = R.meal_id AND R.stars > 4;

-- Get reservations for a specific meal sorted by created_date
SELECT 
    *
FROM
    reservation
WHERE
    meal_id = 5
ORDER BY created_date;
-- Sort all meals by average number of stars in the reviews
SELECT 
    M.*
FROM
    meal M
        JOIN
    review R ON M.id = R.meal_id
GROUP BY R.meal_id
ORDER BY AVG(R.stars);