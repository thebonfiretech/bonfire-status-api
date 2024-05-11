
# Bonfire Status API

Backend elaborado para suprir necessidades de monitoramento dos demais serviços do Bonfire, como apis, websites, microserviços, entre outros. Faz o processamento completo de todos os dados dos demais sistemas e fornece os mesmos para nosso website. 

## Acesse o sistema 
[status.thebonfire.tech](https://status.thebonfire.tech/)

## Funcionalidades

- Atualizaçao em tempo real da estabilidade de todos nossos sistemas.
- Monitoramento geral a cada 5 minutos.
- Historico de estabilidade dos sistemas.
- Atualizaçao em tempo real dentro do banco de dados.
- Gerenciamento de sistemas a ser monitorados.

## Ferramentas utilizadas
- express-rate-limit
- express
- mongodb
- axios
- gulog
- helmet
- morgan
- chalk

## Acesso repositorio frontend
[bonfire-status](https://github.com/thebonfiretech/bonfire-status.git)

## Rodando localmente

Clone o projeto

```bash
	git clone https://github.com/thebonfiretech/bonfire-status-api.git
```

Entre no diretório do projeto

```bash
	cd bonfire-status-api
```

Instale as dependências

```bash
	npm install
```

Inicie o servidor

```bash
	npm run dev
```


## Deploy

Para fazer o deploy desse projeto rode

```bash
	npm run build
```