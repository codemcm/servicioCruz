/*
* Company: Universe Code
* Author: Laura Duran
* Edited by: Martin Cruz
* Created date: 2020-05-09
* Edited date: 2020-05-09
*/
--DATABASE NAME: mycompany

DROP FUNCTION IF EXISTS PUBLIC.clientDelete(INTEGER,INTEGER);
CREATE OR REPLACE FUNCTION PUBLIC.clientDelete(
    IN client_idIN INTEGER,
    IN update_byIN INTEGER)
    RETURNS VOID AS
    $BODY$
    BEGIN 
    UPDATE client SET active='FALSE', updated_by= update_byIN WHERE client_id = client_idIN;
    RETURN;
    END;
    $BODY$
    LANGUAGE plpgsql VOLATILE
    COST 100;

ALTER FUNCTION PUBLIC.clientDelete(INTEGER,INTEGER)
OWNER TO postgres;

--SELECT PUBLIC.clientDelete(1,2);