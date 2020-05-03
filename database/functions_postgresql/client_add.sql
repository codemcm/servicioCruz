DROP FUNCTION IF EXISTS  PUBLIC.clientAdd(VARCHAR(50), VARCHAR(100), VARCHAR(10), VARCHAR(300),TIMESTAMP,INTEGER ,TIMESTAMP );
CREATE OR REPLACE FUNCTION PUBLIC.clientAdd(
    IN nameIN VARCHAR(50),
    IN last_nameIN VARCHAR(50),
    IN cellIN VARCHAR(50),
    IN observationsIN VARCHAR(50),
    OUT client_idOUT INTEGER)
RETURNS SETOF INTEGER AS
$BODY$
DECLARE client_idx INTEGER;
BEGIN
    INSERT INTO PUBLIC.client (name, last_name, cell, observations )
    VALUES (nameIN, last_nameIN, cellIN, observationsIN)
    RETURNING client_id INTO client_idx;
    RETURN QUERY
    SELECT client_idx
RETURN;
END;
$BODY$
    LANGUAGE plpgsql VOLATILE
    COST 100;


SELECT clientAdd('laura','duran','2371001703','XD');


ALTER FUNCTION PUBLIC.clientAdd(VARCHAR(50), VARCHAR(100), VARCHAR(10), VARCHAR(300),TIMESTAMP,INTEGER ,TIMESTAMP )
OWNER TO postgres;



