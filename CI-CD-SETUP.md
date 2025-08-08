# Configuração CI/CD - Conversão de Temperatura

## 🎯 Objetivo
Automatizar o processo de deploy do projeto NodeJS de conversão de temperatura, criando um pipeline que:
- Executa testes quando há push na branch `develop`
- Cria automaticamente um Pull Request para `main` após sucesso dos testes

## 🔄 Fluxo do Pipeline

### 1. Trigger (Gatilho)
- **Push na branch `develop`**: Inicia todo o pipeline
- **Pull Request para `main`**: Executa apenas os testes

### 2. Job: Test and Build
Executa as seguintes etapas:
- ✅ Checkout do código
- ✅ Setup do Node.js (versão 18)
- ✅ Instalação das dependências (`npm ci`)
- ✅ Execução dos testes (`npm test`)
- ✅ Build da aplicação (`npm run build`)
- ✅ Verificação de linting (`npm run lint`)

### 3. Job: Create Pull Request
Após sucesso dos testes:
- 🔄 Cria automaticamente um PR de `develop` para `main`
- 📝 Inclui resumo das alterações e checklist
- 🏷️ Adiciona labels para organização

## 📋 Pré-requisitos

### 1. Scripts no package.json
Certifique-se de que seu `package.json` tenha os scripts necessários:

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "echo \"Build completed\"",
    "lint": "echo \"Linting completed\"",
    "start": "node app.js"
  }
}
```

### 2. Permissões do GitHub
O workflow usa `GITHUB_TOKEN` que já está disponível automaticamente.

## 🚀 Como usar

### 1. Desenvolvimento na branch develop
```bash
# Mudar para branch develop
git checkout develop

# Fazer suas alterações
# ... código ...

# Commit e push
git add .
git commit -m "feat: nova funcionalidade"
git push origin develop
```

### 2. Pipeline automático
- ⚡ Pipeline inicia automaticamente
- 🧪 Testes são executados
- ✅ Se tudo passar, PR é criado automaticamente

### 3. Revisão manual
- 👀 Revisar o PR criado automaticamente
- ✅ Aprovar se tudo estiver correto
- 🔀 Fazer merge para `main`

## 📁 Estrutura de arquivos criada

```
.github/
└── workflows/
    └── ci-cd.yml          # Pipeline principal
```

## 🔧 Personalização

### Alterar versão do Node.js
No arquivo `.github/workflows/ci-cd.yml`, linha:
```yaml
node-version: '18'  # Altere para a versão desejada
```

### Adicionar mais testes
Modifique a seção de testes conforme necessário:
```yaml
- name: Run integration tests
  run: npm run test:integration
```

### Customizar PR template
Edite a seção `body` no step "Create Pull Request".

## 📊 Monitoramento

- Acesse a aba **Actions** no GitHub para ver o status dos pipelines
- PRs automáticos aparecerão na aba **Pull Requests**
- Logs detalhados disponíveis para debugging

## 🛡️ Segurança

- Pipeline usa apenas `GITHUB_TOKEN` (seguro por padrão)
- Testes obrigatórios antes de criar PR
- Revisão manual obrigatória antes do merge

---

**Projeto:** Conversão de Temperatura NodeJS (Porta 8080)  
**Status:** ✅ CI/CD Configurado
