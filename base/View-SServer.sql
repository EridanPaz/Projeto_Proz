CREATE VIEW V_FILIAL(
  ID,
  NOME,
  IE,
  CNPJ
)
AS
SELECT FILIAL.ID,
       FILIAL.NOME,
       FILIAL.RG_IE,
       FILIAL.CPF_CNPJ
 FROM PESSOA FILIAL
WHERE FILIAL.ID_FK_PESSOA IS NULL;

CREATE VIEW V_PARTICIPANTE(
  ID,
  NOME,
  IE,
  CNPJ,
  ID_FILIAL,
  FILIAL_NOME
)
AS
SELECT PARTICIPANTE.ID,
       PARTICIPANTE.NOME,
       PARTICIPANTE.RG_IE,
       PARTICIPANTE.CPF_CNPJ,
       V_FILIAL.ID ID_FILIAL,
       V_FILIAL.NOME FILIAL_NOME
 FROM PESSOA PARTICIPANTE
INNER JOIN PESSOA_ATUA PA ON PA.ID_PESSOA = PARTICIPANTE.ID
INNER JOIN ATUACAO ON ATUACAO.ID = PA.ID_ATUACAO
INNER JOIN V_FILIAL ON V_FILIAL.ID = PARTICIPANTE.ID_FK_PESSOA;

CREATE VIEW V_USUARIO(
    ID,
    ID_FILIAL,
    NOME,
    RG_IE,
    CPF_CNPJ)
AS
SELECT USUARIO.ID,
       USUARIO.ID_FK_PESSOA,
       USUARIO.NOME,
       USUARIO.RG_IE,
       USUARIO.CPF_CNPJ
 FROM PESSOA USUARIO
INNER JOIN PESSOA_ATUA PA ON PA.ID_PESSOA = USUARIO.ID AND PA.ID_ATUACAO = 1;

CREATE VIEW V_CLIENTE(
    ID,
    ID_FILIAL,
    NOME,
    RG_IE,
    CPF_CNPJ)
AS
SELECT CLIENTE.ID,
       CLIENTE.ID_FK_PESSOA,
       CLIENTE.NOME,
       CLIENTE.RG_IE,
       CLIENTE.CPF_CNPJ
 FROM PESSOA CLIENTE
INNER JOIN PESSOA_ATUA PA ON PA.ID_PESSOA = CLIENTE.ID AND PA.ID_ATUACAO = 2;

CREATE VIEW V_FORNECEDOR(
    ID,
    ID_FILIAL,
    NOME,
    RG_IE,
    CPF_CNPJ)
AS
SELECT FORNECEDOR.ID,
       FORNECEDOR.ID_FK_PESSOA,
       FORNECEDOR.NOME,
       FORNECEDOR.RG_IE,
       FORNECEDOR.CPF_CNPJ
 FROM PESSOA FORNECEDOR
INNER JOIN PESSOA_ATUA PA ON PA.ID_PESSOA = FORNECEDOR.ID AND PA.ID_ATUACAO = 3;

CREATE VIEW V_VENDEDOR(
    ID,
    ID_FILIAL,
    NOME,
    RG_IE,
    CPF_CNPJ)
AS
SELECT VENDEDOR.ID,
       VENDEDOR.ID_FK_PESSOA,
       VENDEDOR.NOME,
       VENDEDOR.RG_IE,
       VENDEDOR.CPF_CNPJ
 FROM PESSOA VENDEDOR
INNER JOIN PESSOA_ATUA PA ON PA.ID_PESSOA = VENDEDOR.ID AND PA.ID_ATUACAO = 4;

CREATE VIEW V_COMPRADOR(
    ID,
    ID_FILIAL,
    NOME,
    RG_IE,
    CPF_CNPJ)
AS
SELECT COMPRADOR.ID,
       COMPRADOR.ID_FK_PESSOA,
       COMPRADOR.NOME,
       COMPRADOR.RG_IE,
       COMPRADOR.CPF_CNPJ
 FROM PESSOA COMPRADOR
INNER JOIN PESSOA_ATUA PA ON PA.ID_PESSOA = COMPRADOR.ID AND PA.ID_ATUACAO = 5;

CREATE VIEW V_ENTREGADOR(
    ID,
    ID_FILIAL,
    NOME,
    RG_IE,
    CPF_CNPJ)
AS
SELECT ENTREGADOR.ID,
       ENTREGADOR.ID_FK_PESSOA,
       ENTREGADOR.NOME,
       ENTREGADOR.RG_IE,
       ENTREGADOR.CPF_CNPJ
 FROM PESSOA ENTREGADOR
INNER JOIN PESSOA_ATUA PA ON PA.ID_PESSOA = ENTREGADOR.ID AND PA.ID_ATUACAO = 6;


CREATE VIEW V_PRODUTO(
    ID,
    NOME,
    ESTOQUE,
    ATIVO)
AS
SELECT PRODUTO.ID,
       PRODUTO.NOME,
       PRODUTO.ESTOOUE,
       PRODUTO.ATIVO
 FROM INSUMO_PRODUTO PRODUTO
WHERE PRODUTO.INSUMO_PRODUTO = 'P';

CREATE VIEW V_INSUMO(
    ID,
    NOME,
    ESTOQUE,
    ATIVO,
		QUANTIDADE,
		ID_PRODUTO)
AS
SELECT INSUMO.ID,
       INSUMO.NOME,
       INSUMO.ESTOOUE,
       INSUMO.ATIVO,
			 FT.QTDE_INSUMO,
			 FT.ID_PRODUTO
 FROM INSUMO_PRODUTO INSUMO
 JOIN FICHA_TECNICA FT ON FT.ID_INSUMO = INSUMO.ID
WHERE INSUMO.INSUMO_PRODUTO = 'I'; 
