/*
* Company: Universe Code
* Author: Laura Duran
* Edited by: Martin Cruz
* Created date: 2020-05-09
* Edited date: 2020-05-09
*/
--DATABASE NAME: mycompany

DROP FUNCTION IF EXISTS PUBLIC.raffleDelete(INTEGER,INTEGER);
CREATE OR REPLACE FUNCTION PUBLIC.raffleDelete(
    IN raffle_idIN INTEGER,
    IN update_byIN INTEGER)
    RETURNS VOID AS
    $BODY$
    BEGIN 
    UPDATE raffle SET active='FALSE', updated_by= update_byIN WHERE raffle_id = raffle_idIN;
    RETURN;
    END;
    $BODY$
    LANGUAGE plpgsql VOLATILE
    COST 100;

ALTER FUNCTION PUBLIC.raffleDelete(INTEGER,INTEGER)
OWNER TO postgres;

--SELECT PUBLIC.raffleDelete(1,2);