# Calculadora de Impacto da Automação

Aplicação privada para precificação de serviços de automação por valor.

## Segurança
- Login validado no servidor
- Senha nunca fica no JavaScript do navegador
- Sessão assinada em cookie HttpOnly, Secure e SameSite=Strict
- Sessão expira em 8 horas
- Bloqueio básico após tentativas inválidas
- CSP, HSTS, anti-frame, no-sniff e política de permissões
- Conteúdo protegido com no-store
- robots.txt bloqueia indexação

## Variáveis obrigatórias no Vercel
- `ADMIN_PASSWORD_HASH`: SHA-256 da senha de acesso
- `SESSION_SECRET`: segredo aleatório de no mínimo 32 bytes

Nunca publique a senha ou o SESSION_SECRET no GitHub.
