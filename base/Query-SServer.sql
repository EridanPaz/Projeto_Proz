-- Vis�o das Filiais
SELECT *
  FROM V_FILIAL

-- Vis�o de PRODUTO e INSUMO
SELECT PRODUTO.ID CODIGO_PRODUTO,
			 PRODUTO.NOME,
			 PRODUTO.ESTOQUE,
			 PRODUTO.ATIVO PRODUTO_ATIVO,
			 INSUMO.ID CODIGO_INSUMO,
			 INSUMO.NOME,
			 INSUMO.QUANTIDADE "QTDE NECESS�RIA",
			 INSUMO.ESTOQUE,
			 INSUMO.ATIVO
  FROM V_PRODUTO PRODUTO
	JOIN V_INSUMO INSUMO ON INSUMO.ID_PRODUTO = PRODUTO.ID

-- Vis�o de CLIENTE e sua FILIAL
SELECT CLIENTE.ID CODIGO_CLIENTE,
			 CLIENTE.CPF_CNPJ,
			 CLIENTE.NOME,
			 FILIAL.ID CODIGO_FILIAL,
			 FILIAL.NOME FILIAL
  FROM V_CLIENTE CLIENTE
	JOIN V_FILIAL FILIAL ON FILIAL.ID = CLIENTE.ID_FILIAL

-- Vis�o de FORNECEDOR e sua FILIAL
SELECT FORNECEDOR.ID CODIGO_FORNECEDOR,
			 FORNECEDOR.CPF_CNPJ,
			 FORNECEDOR.NOME,
			 FILIAL.ID CODIGO_FILIAL,
			 FILIAL.NOME FILIAL
  FROM V_FORNECEDOR FORNECEDOR
	JOIN V_FILIAL FILIAL ON FILIAL.ID = FORNECEDOR.ID_FILIAL

-- Vis�o de PEDIDO, PEDIDO_ITEM, FILIAL, PRODUTO, FORNECEDOR e USU�RIO
SELECT PEDIDO.DATA_PEDIDO,
	    FILIAL.ID "C�DIGO DA FILIAL",
			FILIAL.NOME NOME_FILIAL,
			INSUMO.NOME INSUMO,
			ITEM.QTDE_PRODUTO,
			ITEM.PRECO_ITEM,
			ITEM.TOTAL_ITEM,
			ITEM.VALOR_DESCONTO,
			ITEM.VALOR_ACRESCIMO,
			ITEM.TOTAL_GERAL_ITEM,
			FORNECEDOR.ID "C�DIGO DO FORNECEDOR",
      FORNECEDOR.NOME NOME_FORNECEDOR,
			CASE
			WHEN USUARIO.NOME IS NULL THEN	
				'USU�RIO N�O INFORMADO'
			ELSE
				USUARIO.NOME
			END USUARIO,
			CASE 
			WHEN PEDIDO.ENTRADA_SAIDA = 'E' THEN
				'ENTRADA'
			ELSE
				'SAIDA'
			END ENTRADA_SAIDA,
			PEDIDO.TOTAL_ITEM,
			PEDIDO.TOTAL_DESCONTO,
			PEDIDO.TOTAL_ACRESCIMO,
			PEDIDO.VALOR_FRETE,
			PEDIDO.TOTAL_PEDIDO
FROM PEDIDO
JOIN PEDIDO_ITEM ITEM ON ITEM.ID_PEDIDO = PEDIDO.ID
JOIN INSUMO_PRODUTO INSUMO ON INSUMO.ID = ITEM.ID_INSUMO_PRODUTO
JOIN V_FILIAL FILIAL ON FILIAL.ID = PEDIDO.ID_FILIAL
JOIN V_FORNECEDOR FORNECEDOR ON FORNECEDOR.ID = PEDIDO.ID_REMETENTE
LEFT JOIN V_USUARIO USUARIO ON USUARIO.ID = PEDIDO.ID_USUARIO