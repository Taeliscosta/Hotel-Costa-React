# Protótipo — Projeto 2
Autor: Taélis Costa de Holanda

## Link do Figma
https://www.figma.com/make/ftqK9cblRKnED5FKas96e9/Build-According-to-Instructions?t=wC4lWGvvDGVxXPhx-20&fullscreen=1

## Fluxo principal prototipado
1. Dashboard (Visão geral de quartos, clientes e reservas)
2. Clientes (Listagem com busca)
3. Cadastro de cliente
4. Quartos (Listagem de disponibilidade)
5. Reservas (Listagem ativa)
6. Nova reserva (Seleção de cliente, quarto e datas)
7. Confirmação da reserva

## Melhorias aplicadas (do relatório heurístico do E6)
1. **Visibilidade do status do sistema (Heurística #1):** Inclusão de estados de carregamento, sucesso, erro e estado vazio, melhorando o feedback durante as operações (ex: "⏳ Carregando clientes...").
2. **Prevenção de erros (Heurística #5):** Inclusão de labels e identificação clara nos campos de formulário, reduzindo a possibilidade de erros durante o cadastro de clientes e reservas.
3. **Reconhecer, diagnosticar e recuperar-se de erros (Heurística #9):** Criação de mensagens de erro mais claras e orientativas, informando ao usuário o que aconteceu e como ele pode resolver o problema (ex: CPF já cadastrado).

## Estados prototipados
- [x] Estado vazio (ex: "Nenhum cliente cadastrado. + Novo Cliente")
- [x] Estado de carregamento (ex: "⏳ Carregando clientes...")
- [x] Estado de erro (ex: "⚠️ Não foi possível carregar os clientes. Tentar novamente")
- [x] Estado de sucesso (ex: "✓ Cliente cadastrado com sucesso!")

## Feedbacks recebidos dos colegas
1. A navegação entre as telas ficou fácil de entender e bem intuitiva.
2. As informações principais do Dashboard são apresentadas de forma clara, ajudando na tomada de decisão rápida.
3. Os botões e menus facilitam o acesso às principais funcionalidades do hotel.
