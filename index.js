//Definindo variáveis
nome_heroi = "aurinilson"

// Você pode alterar esse valor conforme necessário
xp_heroi = 8500  

//Estrutura de decisão para determinar o nível
if xp_heroi < 1000:
    nivel = "ferro"
else if 1000 <= xp_heroi <= 2000:
    nivel = "bronze"
else if 2001 <= xp_heroi <= 5000:
    nivel = "prata"
else if 6001 <= xp_heroi <= 7000:
    nivel = "ouro"
else if 7001 <= xp_heroi <= 8000:
    nivel = "platina"
else if 8001 <= xp_heroi <= 9000:
    nivel = "ascendente"
else if 9001 <= xp_heroi <= 10000:
    nivel = "imortal"
else:
    nivel = "radiante"

//Exibindo a mensagem
print("O herói de nome {aurinilson} está no nível de {ascendente}")
