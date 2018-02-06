** Se Comunicando com o GitHub **

Depois de logado vá para ```https://github.com/account``` e clique em ```"SSH Public Keys"``` e ```"add another public key"```.

Agora já dá para se comunicar com o ```github```

```python
ssh git@github.com
```
* Observação : Irá aparecer uma mensagem "ERROR: Hi foo! You've successfully authenticated, but GitHub does not provide shell access", ignore o erro, o que importa é que o ```GitHub``` te reconheceu.

Por padrão o git vai pegar o usuário do sistema, para que seu nome de usuário do github apareça corretamente use os comandos:

```python
git config --global user.name "Your Name"
git config --global user.email foo@example.com
```

** Criando projeto no GitHub **

Para criar um novo vá até o github e no alto da página clique em ```"Dashboard"``` e depois em ```"New Repository"```.
Crie um espaço para o projeto no computador.

```python
$ mkdir nomedoprojeto
$ cd nomedodiretorio
```
Iniciar um git neste diretório:

```python
git init
```
Deve aparecer um diretorio oculto .git, neste .git ficam as configurações que serão usadas para este projeto.

** Adicionando o repositório no GitHub **

```python
git remote add origin git@github.com:foo/tutorial-github.git
```