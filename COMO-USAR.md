# 📊 Gestão Lucrativa — Guia de Uso

Sistema de gestão da sua agência de marketing. Funciona offline, salva tudo
automaticamente, vira **app instalável** e **sincroniza entre seus aparelhos**.

---

## ▶️ Como abrir (no computador)

1. Abra a pasta `gestao-lucrativa`.
2. Dê **dois cliques** em `index.html` → abre no navegador.

> ⚠️ Para usar como APP e para a SINCRONIZAÇÃO funcionar 100%, o ideal é
> colocar online (Passo abaixo "Colocar online"). Aberto por duplo-clique
> funciona, mas sem instalação como app.

---

## 🧭 O que tem dentro

| Seção | Para que serve |
|---|---|
| **Visão Geral** | Resumo geral com gráficos: faturamento, lucro, ROI, reuniões, contratos. |
| **Faturamento e Lucro** | Lance o que recebeu e o custo — o lucro é calculado sozinho. |
| **Investimento em Ads** | Quanto investiu e o retorno — o ROI é automático. |
| **Reuniões (CRM)** | Funil de clientes: lead, reunião, proposta, fechado. |
| **Contratos** | Contratos ativos e avisos de vencimento. |
| **Backup e Dados** | Backup, sincronização na nuvem e dados de exemplo. |

**No dia a dia:** botão verde **"+ Novo"** para adicionar · ✏️ para editar ·
🗑️ para excluir · barra de busca no topo. Tudo é salvo automaticamente.

---

## ☁️ SINCRONIZAR entre celular e PC (modo nuvem)

**A nuvem já vem configurada!** Você edita no PC e aparece atualizado no
celular sozinho. Só precisa criar um código secreto:

### Ativar (faça em cada aparelho)
1. Abra o sistema → **Backup e Dados → Ativar sincronização**.
2. Invente um **Código do espaço** secreto e único
   (ex: `gestao-vitor-2026-k9x3`). **Anote esse código!**
3. Clique **Ativar nuvem**. Vai aparecer ☁️ "Sincronizado na nuvem".
4. Nos outros aparelhos (celular, tablet, outro PC): mesma coisa, usando o
   **MESMO código**. Pronto — tudo igual e atualizado em todos! 🎉

> 🔒 O **código do espaço é a sua senha**. Use um código longo e único e
> **não compartilhe** — quem tiver ele acessa seus dados.

> Obs.: a URL e a chave do banco (Supabase) já estão embutidas no sistema,
> em "Configurações avançadas". Você não precisa mexer nelas.

---

## 📱 Colocar online + Instalar como APP

Para acessar por um link em qualquer lugar e instalar como aplicativo:

1. Acesse **https://app.netlify.com/drop**
2. Arraste a pasta `gestao-lucrativa` inteira para a página.
3. Você recebe um **link** (ex: `gestao-lucrativa.netlify.app`).
4. Abra esse link no celular/PC.

### Instalar como app
- **Celular (Android/Chrome):** menu ⋮ → **"Instalar app"** / "Adicionar à tela inicial".
- **iPhone (Safari):** botão compartilhar → **"Adicionar à Tela de Início"**.
- **PC (Chrome/Edge):** ícone de instalar ⊕ na barra de endereço.

Vai aparecer com a sua logo, como um aplicativo de verdade. 🚀

---

## 💾 Backup (segurança extra)

Mesmo com a nuvem, vale exportar de vez em quando:
**Backup e Dados → Exportar backup** → guarda um arquivo `.json`.
Para restaurar: **Importar backup**.

---

## ❓ Dúvidas comuns

- **"Não conectou" na nuvem** → confira se rodou o código SQL (Parte A.3) e se
  copiou a URL e a chave **anon** corretas.
- **Dados não sincronizam** → confirme que usou o **mesmo código do espaço** nos
  aparelhos e que há internet.
- **Quero mudar algo (cor, campo, logo)** → peça pro Claude.
- **Gráficos não aparecem** → precisa de internet na 1ª vez (depois funciona offline).

---

Feito com a skill **UI/UX Pro Max** · Tema preto + verde da marca · PWA · 100% responsivo
