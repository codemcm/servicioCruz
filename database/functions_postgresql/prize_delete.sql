/*
* Company: Universe Code
* Author: Laura Duran
* Edited by: Martin Cruz
* Created date: 2020-05-09
* Edited date: 2020-05-09
*/
--DATABASE NAME: mycompany

DROP FUNCTION IF EXISTS PUBLIC.prizeDelete(INTEGER,INTEGER);
CREATE OR REPLACE FUNCTION PUBLIC.prizeDelete(
    IN prize_idIN INTEGER,
    IN update_byIN INTEGER)
    RETURNS VOID AS
    $BODY$
    BEGIN 
    UPDATE prize SET active='FALSE', updated_by= update_byIN WHERE prize_id = prize_idIN;
    RETURN;
    END;
    $BODY$
    LANGUAGE plpgsql VOLATILE
    COST 100;

ALTER FUNCTION PUBLIC.prizeDelete(INTEGER,INTEGER)
OWNER TO postgres;

--SELECT PUBLIC.prizeDelete(1,2);