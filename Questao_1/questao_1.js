/*

ATIVIDADE 1

cli_nome    compra_id    total
Campos	        4	     109.50
Floriano	    1	     21.00
Prudente	    2	     178.45
Prudente	    3	     50.70

*********************************************************************************

ATIVIDADE 2

id	nome	   sobreNome	  cpf	           dataCadastro	         id	  idCliente	     data
1	Deodoro	   da Fonseca	07466119352	 2015-10-06 14:48:40.863	NULL	NULL	  NULL
2	Floriano   Peixoto	    71128551446	 2015-10-06 14:48:40.877	1	    2	      2015-10-06 14:57:11.980
3	Prudente   de Morais	06582154184	 2015-10-06 14:48:40.877	2 	    3	      2015-10-06 14:57:17.647
3	Prudente   de Morais	06582154184	 2015-10-06 14:48:40.877	3	    3	      2015-10-06 14:57:22.043
4	Campos	   Sales	    06024637691	 2015-10-06 14:48:40.997	4	    4	      2015-10-06 14:57:30.817

*********************************************************************************

ATIVIDADE 3

Alternatina certa: I 2 row(s) affected


*********************************************************************************

ATIVIDADE 4

   SELECT cli.id as cli_id,
	      cli.nome as cli_nome,
	      ISNULL(COUNT(com.id), 0) as compras
     FROM CLIENTE as cli
LEFT JOIN COMPRA as com
       ON com.idCliente = cli.id
 GROUP BY cli.id, cli.nome
 ORDER BY cli_id


*/

