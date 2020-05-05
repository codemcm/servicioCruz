DROP FUNCTION IF EXISTS  PUBLIC.prizeAdd(VARCHAR(100), INTEGER);
CREATE OR REPLACE FUNCTION PUBLIC.prizeAdd(
    IN productIN VARCHAR(50),
    IN raffle_idIN INTEGER,
    OUT prize_idOUT INTEGER)
RETURNS SETOF INTEGER AS
$BODY$
DECLARE prize_idx INTEGER;
BEGIN
    INSERT INTO PUBLIC.prize (product, raffle_id)
    VALUES (productIN, raffle_idIN)
    RETURNING prize_id INTO prize_idx;
    RETURN QUERY
    SELECT prize_idx
RETURN;
END;
$BODY$
    LANGUAGE plpgsql VOLATILE
    COST 100;


SELECT prizeAdd('aceite',1);
SELECT prizeAdd('playera',2);
SELECT prizeAdd('cambio de aceite',3);
SELECT prizeAdd('filtro',4);



ALTER FUNCTION PUBLIC.prizeAdd(VARCHAR(100), INTEGER)
OWNER TO postgres;



