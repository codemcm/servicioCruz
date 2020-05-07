DROP FUNCTION IF EXISTS  PUBLIC.raffle_Add(VARCHAR(300),TIMESTAMP,TIMESTAMP,INTEGER);
CREATE OR REPLACE FUNCTION PUBLIC.raffle_Add(
    IN descriptionIN VARCHAR(300),
    IN start_dataIN TIMESTAMP,
    IN raffle_dateIN TIMESTAMP,
    IN created_byIN INTEGER,
    OUT raffle_idOUT INTEGER)
RETURNS SETOF INTEGER AS
$BODY$
DECLARE raffle_idx INTEGER;
BEGIN
    INSERT INTO PUBLIC.raffle (description,start_data,raffle_date,created_by)
    VALUES (descriptionIN,start_dataIN,raffle_dateIN,created_byIN)
    RETURNING raffle_id INTO raffle_idx;
    RETURN QUERY
    SELECT raffle_idx
RETURN;
END;
$BODY$
    LANGUAGE plpgsql VOLATILE
    COST 100;


SELECT raffle_Add('rifa aceites','2017-05-07 21:50:02'::timestamp,'2017-05-07 21:50:02'::timestamp,1);
SELECT raffle_Add('rifa playeras','2017-05-07 21:50:02'::timestamp,'2017-05-07 21:50:02'::timestamp,1);
SELECT raffle_Add('rifa gorras','2017-05-07 21:50:02'::timestamp,'2017-05-07 21:50:02'::timestamp,1);
SELECT raffle_Add('rifa alineación','2017-05-07 21:50:02'::timestamp,'2017-05-07 21:50:02'::timestamp,1);

ALTER FUNCTION PUBLIC.raffle_Add(VARCHAR(300),TIMESTAMP,TIMESTAMP,INTEGER)
OWNER TO postgres;


