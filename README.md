# o que é um Sistemas de Controle de Versão (VCS) ?

É um sistema que registra as mudanças feitas em um arquivo ou um conjunto de arquivos ao longo do tempo de forma que você possa recuperar versões específicas. Um Sistema de Controle de Versão permite reverter arquivos para um estado anterior, reverter um projeto inteiro para um estado anterior, comparar mudanças feitas ao decorrer do tempo, ver quem foi o último a modificar algo que pode estar causando problemas, quem introduziu um bug e quando, e muito mais.

## Tipos de VCS

__Locais__. Exemplo: rcs

__Centralizados__. Exemplo: Subversion e Perforce

__Distribuídos__. Exemplo:  Git, Mercurial, Bazaar ou Darcs

## Uma breve história do Git
O Git foi criando em 2005 quando o relacionamento entre a comunidade que desenvolvia o kernel e a empresa que desenvolvia comercialmente o BitKeeper se desfez.  Isso levou a comunidade de desenvolvedores do Linux (em particular Linus Torvalds, o criador do Linux) a desenvolver sua própria ferramenta baseada nas lições que eles aprenderam ao usar o BitKeeper.

Desde sua concepção em 2005, o Git evoluiu e amadureceu a ponto de ser um sistema fácil de usar e ainda assim mantém essas qualidades iniciais. É incrivelmente rápido, bastante eficiente com grandes projetos e possui um sistema impressionante de branching para desenvolvimento não-linear.

## Cronograma

* [Minicurso](docs/Minicurso.md)

## Como colocar sua foto como participante

1. Faça um Fork do repositório
2. Clone o repositório do github para seu local: `git clone git@github.com:seuUsuário/Minicurso-de-git-e-Github.git`
3. Crie uma branch para adicionar sua foto: `git checkout -b novoParticipante`
4. Crie um arquivo html com o seu nome sobrenome na pasta de participantes. Exemplo: josemaria.html
5. Pegue como exemplo a estrutura do arquivo allythyrenan.html (na pasta Participantes) e altere com suas informações que são: nome, github e foto
6. Commit suas alterações: `git commit -m "Novo participante Allythy Rennan"`
7. Mande o Push para sua branch: `git push origin novoParticipante`
8. Entre no Github e envie o seu pull request

## Rodando o projeto localmente

Instale o gulp globalmente, se tiver já instalado ignore essa etapa:

```
npm i -g gulp
```
Depois instale as dependências do node

```
npm install
```

Inicialize o lite-server:
```
npm run server
```

Inicialize o gulp:
```
gulp
```

OBS: Se você não souber instalar o nodejs no Debian e derivados eu fiz um post ensinando como fazer, [você pode ler aqui.](https://allythy.github.io/Como-instalar-o-NodeJS-no-Debian) Mas se você tiver com preguiça e quiser uma coisa mais rápida  [tem esse script que eu fiz para instalar o nodejs e outras coisas.](https://github.com/allythy/Pos-instalacao-Debian)
