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

Assim você edita no PC e aparece atualizado no celular sozinho. É **grátis**.
Você faz isso **uma vez**:

### Parte A — Criar o banco na nuvem (~5 min)
1. Crie conta grátis em **https://supabase.com** → **New project** (guarde a senha).
2. Espere o projeto criar. Abra **SQL Editor** (menu lateral) → **New query**.
3. Cole este código e clique **Run**:
   ```sql
   create table if not exists gestao_workspaces (
     code text primary key,
     data jsonb not null default '{}'::jsonb,
     updated_at bigint not null default 0
   );
   alter table gestao_workspaces enable row level security;
   create policy "acesso_publico" on gestao_workspaces
     for all to anon using (true) with check (true);
   ```
4. Vá em **Project Settings** (engrenagem) → **API**. Copie:
   - **Project URL** (ex: `https://abcd.supabase.co`)
   - **Project API keys → `anon` `public`** (uma chave bem longa)

### Parte B — Conectar no sistema
1. No sistema, vá em **Backup e Dados → Configurar nuvem**.
2. Cole a **URL** e a **chave anon**.
3. Invente um **Código do espaço** secreto e único
   (ex: `gestao-vitor-2026-k9x3`). **Anote esse código.**
4. Clique **Conectar**. Vai aparecer ☁️ "Sincronizado na nuvem".

### Parte C — Usar nos outros aparelhos
Abra o sistema no celular/tablet/outro PC → **Configurar nuvem** →
cole a mesma URL, a mesma chave e o **MESMO código do espaço**. Pronto:
tudo igual e atualizado em todos! 🎉

> 🔒 O **código do espaço é sua senha**. Use um código longo e único e não
> compartilhe — quem tiver ele acessa seus dados.

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
