CREATE TABLE cabLocations
(
  id int(11) NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  cab_id int
  (11) not null, 
  latitude varchar
  (50) NOT NULL,
  longitude varchar
  (50) NOT NULL,
  created_at datetime default CURRENT_TIMESTAMP NOT NULL
);