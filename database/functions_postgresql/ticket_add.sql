DROP FUNCTION IF EXISTS  PUBLIC.ticketAdd(INTEGER,INTEGER);
CREATE OR REPLACE FUNCTION PUBLIC.ticketAdd(
    IN raffle_idIN INTEGER,
    IN client_idIN INTEGER,
    OUT ticket_idOUT INTEGER)
RETURNS SETOF INTEGER AS
$BODY$
DECLARE ticket_idx INTEGER;
BEGIN
    INSERT INTO PUBLIC.ticket (raffle_id, client_id)
    VALUES (raffle_idIN, client_idIN)
    RETURNING ticket_id INTO ticket_idx;
    RETURN QUERY
    SELECT ticket_idx
RETURN;
END;
$BODY$
    LANGUAGE plpgsql VOLATILE
    COST 100;


SELECT ticketAdd(1,1);
SELECT ticketAdd(2,1);
SELECT ticketAdd(3,1);
SELECT ticketAdd(4,1);
SELECT ticketAdd(1,2);
SELECT ticketAdd(2,2);
SELECT ticketAdd(3,2);
SELECT ticketAdd(4,2);


ALTER FUNCTION PUBLIC.ticketAdd(INTEGER,INTEGER)
OWNER TO postgres;


