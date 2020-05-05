DROP FUNCTION IF EXISTS  PUBLIC.raffle_Add(TIMESTAMP);
CREATE OR REPLACE FUNCTION PUBLIC.raffle_Add(
    IN raffle_dateIN TIMESTAMP,
    OUT raffle_idOUT INTEGER)
RETURNS SETOF INTEGER AS
$BODY$
DECLARE raffle_idx INTEGER;
BEGIN
    INSERT INTO PUBLIC.raffle (raffle_date)
    VALUES (raffle_dateIN)
    RETURNING raffle_id INTO raffle_idx;
    RETURN QUERY
    SELECT raffle_idx
RETURN;
END;
$BODY$
    LANGUAGE plpgsql VOLATILE
    COST 100;


SELECT raffle_Add('2017-05-07 21:50:02'::timestamp);
SELECT raffle_Add('2018-07-30 19:10:25'::timestamp);
SELECT raffle_Add('2019-08-30 10:09:35'::timestamp);
SELECT raffle_Add('2020-09-30 11:12:25'::timestamp);
ALTER FUNCTION PUBLIC.raffle_Add(TIMESTAMP)
OWNER TO postgres;


