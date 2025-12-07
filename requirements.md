# 🐶 woofy - requirements.md

## Visão geral:
### Nome do projeto: woofy - rede social para cachorros
### Descrição: App onde usuário que amam cachorros podem postar fotos sobre seus companheiros
### Tecnologias:
        - NodeJS
        - Fastify
        - PostgreSQL
        - Docker
        - JWT 

## RF (Requisitos funcionais)
- [ ] - O usuário pode criar uma conta com email e senha;
- [ ] - O usuário pode se autenticar;
- [ ] - O usuário pode trocar a senha de sua conta;
- [ ] - O usuário pode adicionar uma foto de perfil;
- [ ] - O usuário pode editar suas informações; 
- [ ] - O usuário pode criar um post;
- [ ] - O usuário pode editar um post;
- [ ] - O usuário pode deletar um post;
- [ ] - O usuário pode comentar em um post;
- [ ] - O usuário pode cutir um post;

## RN (Regras de negócios)
- [ ] - O usuário não pode criar uma conta com email duplicado;
- [ ] - O usuário não pode criar uma conta com nome de usuário duplicado;
- [ ] - O usuário não pode trocar a senha de uma conta terceira;
- [ ] - O usuário não pode adicionar uma foto de perfil com formato inválido;
- [ ] - O usuário não pode editar as informações de uma conta terceira;
- [ ] - O usuário não pode criar um post com conteúdo vazio;
- [ ] - O usuário não pode editar um post de uma conta terceira;
- [ ] - O usuário não pode deletar um post de uma conta terceira;
- [ ] - O usuário não pode curtir um post mais de uma vez;

## RFN (Requisitos não funcionais)
- [ ] - Os dados devem ser persistidos em um banco PostgreSQL;
- [ ] - A senha do usuário deve ser encrypitada antes de ser salva no banco de dados;
- [ ] - As listas devem ser paginadas;


## Modelagem de dados

### Entidade: User

| Campo                            | Tipo     | Obrigatório | Padrão        | Descrição                                         |
| -------------------------------- | -------- | ----------- | ------------- | ------------------------------------------------- |
| id                               | UUID     | Sim         | `auto`        | Identificador único                               |
| name                             | string   | Sim         | —             | Nome do usuário                                   |
| username                         | string   | Sim         | —             | Username do usuário                               |
| email                            | string   | Sim         | —             | Deve ser único                                    |
| password_hash                    | string   | Sim         | —             | Hash da senha                                     |
| bio                              | string   | Não         | —             | Biografia do usuário                              |
| profile_pic                      | string   | Não         | —             | URL da imagem de perfil                           |
| profile_pic_id                   | string   | Não         | —             | ID da imagem de perfil                            |
| verification_token               | string   | Não         | —             | Codigo OTP                                        |
| verification_token_expires_at    | datetime | Não         | —             | Data que expira o Codigo OTP                      |
| reset_password_token             | string   | Não         | —             | Codigo OTP para reset de senha                    |
| reset_password_token_expires_at  | datetime | Não         | —             | Data que expira o Codigo OTP para reset de senha  |
| created_at                       | datetime | Sim         | `now()`       | Data de criação                                   |
| updated_at                       | datetime | Sim         | `updatedAt()` | Ultima atualização                                |



### Entidade: Dog

| Campo      | Tipo     | Obrigatório | Descrição         |
| ---------- | -------- | ----------- | ----------------- |
| id         | UUID     | Sim         | ID do cachorro    |
| owner_id   | UUID     | Sim         | FK → User.id      |
| name       | string   | Sim         | Nome do cachorro  |
| avatar_url | string   | Não         | Foto de perfil    |
| breed      | string   | Não         | Raça              |
| age        | number   | Não         | Idade             |
| weight     | number   | Não         | Peso              |
| created_at | datetime | Sim         | Data de criação   |



### Entidade: Post

| Campo      | Tipo     | Obrigatório | Descrição         |
| ---------- | -------- | ----------- | ----------------- |
| id         | UUID     | Sim         | ID do post        |
| dog_id     | UUID     | Sim         | FK → Dog.id       |
| content    | string   | Sim         | Texto da postagem |
| image_url  | string   | Não         | Imagem opcional   |
| created_at | datetime | Sim         | Data da postagem  |



### Entidade: Like

| Campo      | Tipo     | Obrigatório | Descrição     |
| ---------- | -------- | ----------- | ------------- |
| id         | UUID     | Sim         | ID da curtida |
| post_id    | UUID     | Sim         | FK → Post.id  |
| dog_id     | UUID     | Sim         | FK → Dog.id   |
| created_at | datetime | Sim         | Data          |




### Entidade: Comment

| Campo      | Tipo     | Obrigatório | Descrição           |
| ---------- | -------- | ----------- | ------------------- |
| id         | UUID     | Sim         | ID do comentário    |
| post_id    | UUID     | Sim         | FK → Post.id        |
| dog_id     | UUID     | Sim         | FK → Dog.id         |
| content    | string   | Sim         | Texto do comentário |
| created_at | datetime | Sim         | Data                |




### Entidade: Follow

| Campo        | Tipo     | Obrigatório | Descrição                    |
| ------------ | -------- | ----------- | ---------------------------- |
| id           | UUID     | Sim         | ID                           |
| follower_id  | UUID     | Sim         | FK → Dog.id (quem segue)     |
| following_id | UUID     | Sim         | FK → Dog.id (quem é seguido) |
| created_at   | datetime | Sim         | Data                         |



### Relacionamentos

User (1) ---------- (N) Dog

Dog (1) ----------- (N) Post
Dog (1) ----------- (N) Like
Dog (1) ----------- (N) Comment

Post (1) ---------- (N) Like
Post (1) ---------- (N) Comment

Dog (N) ----------- (N) Dog   (via Follow)
