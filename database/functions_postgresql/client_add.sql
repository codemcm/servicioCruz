DROP FUNCTION IF EXISTS  PUBLIC.clientAdd(VARCHAR(50), VARCHAR(100), VARCHAR(10), VARCHAR(300),INTEGER);
CREATE OR REPLACE FUNCTION PUBLIC.clientAdd(
    IN nameIN VARCHAR(50),
    IN last_nameIN VARCHAR(50),
    IN cellIN VARCHAR(50),
    IN observationsIN VARCHAR(50),
    IN created_byIN INTEGER,
    OUT client_idOUT INTEGER)
RETURNS SETOF INTEGER AS
$BODY$
DECLARE client_idx INTEGER;
BEGIN
    INSERT INTO PUBLIC.client (name, last_name, cell, observations,created_by)
    VALUES (nameIN, last_nameIN, cellIN, observationsIN,created_byIN)
    RETURNING client_id INTO client_idx;
    RETURN QUERY
    SELECT client_idx
RETURN;
END;
$BODY$
    LANGUAGE plpgsql VOLATILE
    COST 100;

ALTER FUNCTION PUBLIC.clientAdd(VARCHAR(50), VARCHAR(100), VARCHAR(10), VARCHAR(300),INTEGER)
OWNER TO postgres;
--SELECT clientAdd('laura','duran','2371001703','XD',1);
--SELECT clientAdd('Martin','Cruz','2213494657','XD2',1);

