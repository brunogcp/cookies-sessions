<div align="center">
  <h3 align="center">Cookies</h3>
  <div>
  <a href="https://bgcp.vercel.app/article/94669bc8-beae-4b6b-b84d-b53072b3b2ac">
  <img src="https://img.shields.io/badge/Download PDF (ENGLISH)-black?style=for-the-badge&logoColor=white&color=000000" alt="three.js" />
  </a>
  </div>
</div>

## 🚀 Introdução a Cookies e Sessões <a href="https://github.com/brunogcp/cookies-sessions"><img src="https://img.shields.io/badge/Github-black?style=for-the-badge&logoColor=white&logo=github&color=000000" alt="Link do Github" /></a>

Cookies e sessões são fundamentais para criar experiências web dinâmicas e personalizadas, permitindo que aplicações lembrem dos usuários e suas interações. Enquanto cookies são pequenos arquivos de dados armazenados no navegador do cliente, sessões mantêm dados do usuário no servidor, tipicamente indexados por um cookie no lado do cliente.

### 🌟 Principais Características:

- **🍪 Cookies**: Armazenam dados do lado do cliente, possibilitando login persistente, preferências e rastreamento.
- **🔐 Sessões**: Mantêm informações sensíveis do usuário no lado do servidor para maior segurança.
- **⏳ Gerenciamento de Expiração**: Controla por quanto tempo o estado do usuário é lembrado.
- **🔄 Experiência de Usuário Sem Interrupções**: Fornece uma experiência de navegação personalizada sem reautenticação constante.

## 🛠️ Instalação

Este tutorial usa Node.js e Express para demonstrar cookies e sessões.

### Passos para Instalação:

1. **Configuração do Projeto**:
   - Inicie um novo projeto Node.js: `npm init -y`.

2. **Instalar Express e Middleware de Sessão**:
   - Instale os pacotes necessários: `npm install express express-session cookie-parser`.

## 📊 Uso Básico

### Configuração Inicial:

1. **Configurar o Express**:
   - Crie um arquivo `server.js` e configure um servidor Express.
   
2. **Configuração do Middleware**:
   - Use `cookie-parser` para manipular cookies e `express-session` para gerenciar dados de sessão.

### Implementando Cookies e Sessões:

1. **server.js**: Configuração do Servidor Express com Cookies e Sessão.

```javascript
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.use(cookieParser());
app.use(session({
    secret: 'seu_segredo',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 60000 } // 1 minuto para demonstração
}));

app.get('/', (req, res) => {
    // Verificando e configurando um cookie
    if (!req.cookies.hello) {
        res.cookie('hello', 'world', { maxAge: 900000, httpOnly: true });
        res.send('🍪 Cookie configurado!');
    } else {
        res.send('👋 Olá de novo!');
    }
});

app.get('/session', (req, res) => {
    // Configurando dados da sessão
    if (req.session.views) {
        req.session.views++;
        res.send(`👀 Você visitou esta página ${req.session.views} vezes`);
    } else {
        req.session.views = 1;
        res.send('👋 Bem-vindo à demonstração de sessão. Atualize!');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌍 Servidor rodando na porta ${PORT}`));
```

## 📈 Cookies para Preferências de Usuário

### Conceito de Preferências de Usuário com Cookies:

💡 Armazenar preferências do usuário como tema ou idioma em cookies proporciona uma experiência personalizada sem necessidade de login.

### Por Que Usar Cookies para Preferências:

🚀 Cookies permitem acesso instantâneo às preferências do usuário, melhorando a experiência de navegação sem armazenamento do lado do servidor.

### Implementando Preferências de Usuário:

👨‍💻 Crie rotas em seu aplicativo Express para configurar e recuperar preferências do usuário via cookies.

### 🔍 Testes:

1. **Definir Preferência**:
   - Visite uma rota para definir seu tema ou idioma preferido em um cookie.
   
2. **Recuperar Preferência**:
   - Acesse outra rota que lê o cookie e personaliza o conteúdo de acordo.

## 🏆 Conclusão

Neste tutorial, exploramos os fundamentos de cookies e sessões, cruciais para criar aplicações web personalizadas e seguras. Por meio de exemplos práticos, demonstramos como gerenciar preferências de usuário com cookies e lidar com autenticação usando sessões em Node.js.

Espero que este guia inspire você a implementar cookies e sessões em seus projetos, melhorando a experiência do usuário e a segurança. Continue experimentando e divirta-se programando!