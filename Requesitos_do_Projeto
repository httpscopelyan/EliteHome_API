# Jornada Do Usuário

![image.png](attachment:d689c7cc-681e-419a-9769-286be4e21c6c:image.png)

## Requisitos Funcionais ( RF’s)

- O usuário deve poder filtrar os imóveis;
- O usuário deve poder listar os imóveis com informações basicas;
- O usuário deve poder visualizar todas informações dos imóveis;
- O usuário deve poder agendar uma visita;
- O usuário deve receber um e-mail de interesse de visita recebido;
- O usuário deve receber um e-mail de confirmação de visita;
- O usuário deve receber um e-mail de visita realizada;
- O usuário deve receber um e-mail de cancelamento de visita;
- O administrador deve pode receber e-mail de interesse de visita;
- O administrador deve poder se autenticar na aplicação;
- O administrador deve poder sair logout da aplicação;
- O administrador deve poder gerenciar os próprios imóveis;
- O administrador deve poder criar novos imóveis;
- O administrador deve poder editar os imóveis;
- O administrador deve poder gerenciar as visitas de um imóvel;

## Regras de Negocio (RN’s)

- Todas listagens devem estar paginadas;
- O administrador deve poder se autenticar na aplicação;
    - A sessão do usuário deve valer por 5 dias;
- Apenas usuários logados podem gerencias imóveis;
- Apenas usuários logados podem editar imóveis;
- Cada imóvel só pode ter no máximo 10 imagens;
- Apenas usuários logados podem editar visitas;
- Um imóvel não pode ser criado com as coordenadas de um imóvel já existentes;
- Um usuário não pode ter duas visitas ativas para o mesmo imóvel;

## Requisitos Não funcionais

- Autenticação com Email + Senha (JWT);
- Backend com Typescript + Fastfy;
    - Google Maps
    - AWS S3
    - AWS SES
    - Zod
    - Seed
- Frontend com Typescript + ReactJS + Vite;
    - Zustand + ReactQuery;
    - React Hook Forms + Zod;
    - Tailwind;
- Banco de dados SQL (Postgres);

## Design da API

ROTAS DE QUANDO NÃO ESTÁ LOGADO:

- /POST /properties → cria um novo imóvel;
- /GET /properties?filters → listar imóveis por filtros;
- /GET /properties/:id → Mostra dados completos de um imóvel;
- /POST /properties/:id/visits → Cria um interesse de visita;
- /POST /auth → Cria uma nova sessão;

ROTAS DE QUANDO ESTÁ LOGADO :

- /GET /manager/properties?filters → lista imóveis para gerenciar;
- /POST /manager/properties → Criar um novo imóvel
- /PUT /manager/properties/:id → Editar um novo imóvel
- /POST /manager/properties/:id/visits → Cria uma nova visita;
- /GET /manager/properties/:id/visits?filters → Lista todas as visitas de propriedades;
- /PUT /manager/properties/:id/visits?filters → edita a visita de uma propriedade;
