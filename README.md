# APP

  - Minimalistic social media web app for dogs - Woofy

# RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível o usuário escolher se ele é apenas um visitante ou um tutor;
- [ ] Deve ser possível fazer a troca de senha caso o usuário tenha esquecido;
- [ ] Deve ser possível fazer login com a rede social do Twitter/X
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível o usuário cadastrar vários cachorros;
- [ ] Deve ser possível fazer a busca de um usuário ou cachorro;
- [ ] Deve ser possível o usuário logado criar um post;
- [ ] Deve ser possível o usuário logado comentar em um post;
- [ ] Deve ser possível o usuário logado curtir um post;
- [ ] Deve ser possível o usuário logado editar suas informações de perfil;
- [ ] Deve ser possível o usuário logado editar as informações do cachorro;


# RNs (Regras de negócios)

- [ ] O usuário não pode acessar funcionalidades sem estar autenticado;
- [ ] O usuário não pode se cadastrar com e-mail já existente;
- [ ] O usuário não pode curtir um post mais de uma vez;
- [ ] O usuário não pode comentar em posts sem estar autenticado;
- [ ] O usuário não pode excluir posts de outros usuários;
- [ ] O usuário não pode excluir comentários de outros usuários;
- [ ] O usuário não pode criar um cachorro se não estiver autenticado;
- [ ] O usuário não pode editar ou excluir cachorro que não seja dele; 
- [ ] O post não pode ser criado por usuário não autenticado;
- [ ] O post não pode ser editado por outro usuário que não seja o autor;
- [ ] O post não pode ser deletado por outro usuário que não seja o autor;
- [ ] O post não pode ter curtidas duplicadas do mesmo usuário;
- [ ] O comentário não pode ser criado por usuário não autenticado;
- [ ] O comentário não pode ser deletado por outro usuário que não seja o autor;
- [ ] O cachorro não pode ser criado sem um dono (usuário autenticado);
- [ ] O cachorro não pode ser editado ou deletado por outro usuário que não seja o dono;

# RNFs (Requisitos não funcionais)

- [ ] O dados devem ser persistidos em um banco de dados PostgreSQL;
- [ ] O sistema não pode armazenar senhas sem cryptografia;
- [ ] O sistema não pode permitir acesso a rotas protegidas sem autenticação JWT (JSON Web Token);
- [ ] O usuário não pode acessar dados de outros usuários sem autorização;
- [ ] O sistema não pode permitir upload de arquivos fora dos formatos permitidos (ex: .jpg, .png);
- [ ] O sistema não pode aceitar inputs sem validação (contra XSS, SQL/NoSQL Injection, etc);
- [ ] O código não pode ser escrito sem padronização (ex: ESLint, Prettier);
- [ ] O sistema não pode crescer sem modularização e separação de responsabilidades (MVC, serviços, etc);