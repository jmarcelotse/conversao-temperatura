# Guia: Migração para seu próprio repositório Git

## Situação atual
Você fez o clone de um repositório e agora quer usar seu próprio repositório com o mesmo nome.

## Comandos necessários

### 1. Verificar o repositório remoto atual
```bash
git remote -v
```

### 2. Remover o repositório remoto original
```bash
git remote remove origin
```

### 3. Adicionar seu novo repositório como origin
```bash
git remote add origin <URL_DO_SEU_REPOSITORIO>
git remote add origin git@github.com:jmarcelotse/conversao-temperatura.git
```
*Substitua `<URL_DO_SEU_REPOSITORIO>` pela URL do seu repositório no GitHub/GitLab/etc.*

### 4. Verificar se o novo remote foi adicionado corretamente
```bash
git remote -v
```

### 5. Fazer o primeiro push para seu repositório
```bash
git branch -M main
git push -u origin main
```
*Ou `git push -u origin master` se sua branch principal for master*

### 6. (Opcional) Verificar o status do repositório
```bash
git status
```

## Comandos adicionais úteis

### Se você quiser renomear a branch principal
```bash
git branch -M main
```

### Para verificar todas as branches
```bash
git branch -a
```

### Para fazer commit de mudanças futuras
```bash
git add .
git commit -m "Sua mensagem de commit"
git push
```

## Observações importantes

- Certifique-se de que seu repositório remoto já foi criado no GitHub/GitLab
- Se houver conflitos no primeiro push, use `git push -f origin main` (com cuidado!)
- Mantenha sempre backups do seu código antes de fazer operações que podem sobrescrever dados

## Projeto: Conversão de Temperatura
Este projeto NodeJS roda na porta 8080 e serve como exemplo para criação de ambientes com containers.
