# Projeto NEMO - Análise de Poluição em Rios com Azure Computer Vision

Este projeto utiliza o poder da Inteligência Artificial, através do Azure Computer Vision, para analisar imagens de rios e identificar a presença de poluentes. O objetivo é auxiliar na  monitoração e preservação dos nossos recursos hídricos.

## Funcionalidades:

* **Análise de imagens:** Através da API do Azure Computer Vision, o sistema identifica e classifica diferentes tipos de poluentes em imagens de rios, como garrafas plásticas, sacolas, e outros detritos.
* **Relatórios detalhados:** Gera relatórios com informações sobre os tipos de poluentes encontrados e sua localização na imagem, auxiliando na tomada de decisão para ações de limpeza e preservação.

## Tecnologias Utilizadas:

* **React:** Framework JavaScript para a construção da interface do usuário.
* **Azure Computer Vision:** Serviço de IA da Microsoft para análise de imagens.
* **Node.js:** Ambiente de execução JavaScript para o backend.

## Como executar o projeto:

1. **Clone o repositório:** `git clone https://github.com/lucashcribeiro/Azure-computer-vision`
2. **Instale as dependências:** `npm install`
3. **Configure as credenciais do Azure:**
    * Crie uma conta no Azure e obtenha as chaves de acesso para o serviço Computer Vision.
    * Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:
        ```
        AZURE_COMPUTER_VISION_KEY=SUA_CHAVE_DE_ACESSO
        AZURE_COMPUTER_VISION_ENDPOINT=SEU_ENDPOINT
        ```
4. **Inicie o projeto:** `npm start`

## Observação:

Devido ao custo do serviço Azure Computer Vision, a funcionalidade de análise de imagens está desativada por padrão. No entanto, você pode facilmente ativá-la inserindo suas próprias credenciais do Azure no arquivo `.env`, conforme descrito acima.

## Contribuições:

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Autor:

Lucas H. C. Ribeiro

## Licença:

MIT
