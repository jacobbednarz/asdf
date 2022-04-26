import{r as e,o as s,c as a,a as o,F as n,b as t,d as r}from"./app.1d898324.js";const l={},c=t('<h1 id="asdf" tabindex="-1"><a class="header-anchor" href="#asdf" aria-hidden="true">#</a> asdf</h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p>guia de contribuição principal <code>asdf</code>.</p><h2 id="configuracao-inicial" tabindex="-1"><a class="header-anchor" href="#configuracao-inicial" aria-hidden="true">#</a> Configuração inicial</h2><p>Fork <code>asdf</code> no GitHub e/ou Git clone o branch padrão:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># clone your fork</span></span>\n<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">GITHUB_USER</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">/asdf.git</span></span>\n<span class="line"><span style="color:#88846F;"># or clone asdf</span></span>\n<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/asdf-vm/asdf.git</span></span>\n<span class="line"></span></code></pre></div><p>As ferramentas para o desenvolvimento do núcleo estão em <code>.tool-versions</code> deste repositório. Se você deseja gerenciar com o próprio <code>asdf</code>, adicione os plugins:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add bats https://github.com/timgluz/asdf-bats.git</span></span>\n<span class="line"><span style="color:#F8F8F2;">asdf plugin add shellcheck https://github.com/luizm/asdf-shellcheck.git</span></span>\n<span class="line"><span style="color:#F8F8F2;">asdf plugin add shfmt https://github.com/luizm/asdf-shfmt.git</span></span>\n<span class="line"></span></code></pre></div><p>Instale as versões para desenvolver <code>asdf</code> com:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install</span></span>\n<span class="line"></span></code></pre></div><p><em>pode</em> ser útil não usar <code>asdf</code> para gerenciar as ferramentas durante o desenvolvimento em sua máquina local, pois você pode precisar quebrar funcionalidades que, então, quebrariam suas ferramentas de desenvolvimento. Aqui está a lista bruta de ferramentas:</p>',11),i={href:"https://github.com/bats-core/bats-core",target:"_blank",rel:"noopener noreferrer"},p=r("bats-core"),d=r(": Bash Automated Testing System, para testes unitários de scripts compatíveis com Bash ou POSIX."),u={href:"https://github.com/koalaman/shellcheck",target:"_blank",rel:"noopener noreferrer"},m=r("shellcheck"),h=r(": Ferramenta de análise estática para scripts de shell."),f={href:"https://github.com/mvdan/sh",target:"_blank",rel:"noopener noreferrer"},g=r("shfmt"),b=r(": Um analisador, formatador e interpretador de shell com suporte a bash; inclui shfmt"),v=t('<h2 id="desenvolvimento" tabindex="-1"><a class="header-anchor" href="#desenvolvimento" aria-hidden="true">#</a> Desenvolvimento</h2><p>Se você quiser testar suas alterações sem fazer alterações em seu <code>asdf</code> instalado, você pode definir a variável <code>$ASDF_DIR</code> para o caminho onde você clonou o repositório e anexar temporariamente o diretório <code>bin</code> e <code>shims</code> do diretório para o seu caminho.</p><p>É melhor formatar, lint e testar seu código localmente antes de confirmar ou enviar para o controle remoto. Use os seguintes scripts/comandos:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># Shellcheck</span></span>\n<span class="line"><span style="color:#F8F8F2;">./scripts/shellcheck.bash</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88846F;"># Format</span></span>\n<span class="line"><span style="color:#F8F8F2;">./scripts/shfmt.bash</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88846F;"># Test: all tests</span></span>\n<span class="line"><span style="color:#F8F8F2;">bats test/</span></span>\n<span class="line"><span style="color:#88846F;"># Test: for specific command</span></span>\n<span class="line"><span style="color:#F8F8F2;">bats test/list_commands.bash</span></span>\n<span class="line"></span></code></pre></div>',4),F={class:"custom-container tip"},y=o("p",{class:"custom-container-title"},"TIP",-1),k=o("strong",null,"Adicione testes!",-1),x=r(" - Os testes são "),q=o("strong",null,"necessários",-1),_=r(" para novos recursos e aceleram a revisão de correções de bugs. Por favor, cubra novos caminhos de código antes de criar um Pull Request. Consulte "),w={href:"https://bats-core.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"},A=r("documentação do bats-core"),S=o("h2",{id:"teste-de-bats",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#teste-de-bats","aria-hidden":"true"},"#"),r(" Teste de BATS")],-1),I=r("É "),T=o("strong",null,"fortemente recomendado",-1),D=r(" examinar o conjunto de testes existente e a "),E={href:"https://bats-core.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"},B=r("documentação do bats-core"),C=r(" antes de escrever os testes."),O=t('<p>A depuração de BATs pode ser difícil às vezes. Usar a saída TAP com o sinalizador <code>-t</code> permitirá que você imprima saídas com o descritor de arquivo especial <code>&gt;&amp;3</code> durante a execução do teste, simplificando a depuração. Como um exemplo:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># test/some_tests.bats</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#66D9EF;">printf</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;%s\\n&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;Will not be printed during bats test/some_tests.bats&quot;</span></span>\n<span class="line"><span style="color:#66D9EF;">printf</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;%s\\n&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;Will be printed during bats -t test/some_tests.bats&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&amp;3</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',2),P=r("Isso está documentado em bats-core "),z={href:"https://bats-core.readthedocs.io/en/stable/writing-tests.html#printing-to-the-terminal",target:"_blank",rel:"noopener noreferrer"},G=r("Imprimindo no Terminal"),R=r("."),U=o("h2",{id:"pull-requests-releases-e-commits-convencionais",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#pull-requests-releases-e-commits-convencionais","aria-hidden":"true"},"#"),r(" Pull Requests, Releases e Commits Convencionais")],-1),j=r("O "),H=o("code",null,"asdf",-1),V=r(" está usando uma ferramenta de lançamento automatizada chamada "),L={href:"https://github.com/googleapis/release-please",target:"_blank",rel:"noopener noreferrer"},W=r("Release Please"),M=r(" para aumentar automaticamente a versão "),N={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},X=r("SemVer"),$=r(" e gerar a "),J={href:"https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},K=r("Changelog"),Q=r(". Essas informações são determinadas lendo o histórico de confirmação desde a última versão."),Y={href:"https://www.conventionalcommits.org/",target:"_blank",rel:"noopener noreferrer"},Z=r("Mensagens de confirmação convencionais"),ee=r(" definem o formato do título da solicitação pull que se torna o formato da mensagem de confirmação na ramificação padrão. Isso é aplicado com GitHub Action "),se={href:"https://github.com/amannn/action-semantic-pull-request",target:"_blank",rel:"noopener noreferrer"},ae=o("code",null,"amannn/action-semantic-pull-request",-1),oe=r("."),ne=t('<p>O Commit Convencional segue este formato:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">&lt;type&gt;[optional scope][optional !]: &lt;description&gt;\n\n&lt;!-- examples --&gt;\nfix: some fix\nfeat: a new feature\ndocs: some documentation update\ndocs(website): some change for the website\nfeat!: feature with breaking change\n</span></span></code></pre></div><p>A lista completa de <code>&lt;types&gt;</code> é: <code>feat</code>, <code>fix</code>, <code>docs</code>, <code>style</code>, <code>refactor</code>, <code>perf</code>, <code>test</code>, <code>build</code>, <code>ci</code>, <code>chore</code>, <code>revert</code>.</p><p>O <code>!</code> indica uma mudança de ruptura.</p><p><code>fix</code>: will create a new SemVer <code>patch</code><code>feat</code>: will create a new SemVer <code>minor</code><code>&lt;type&gt;!</code>: will create a new SemVer <code>major</code></p><p>O título da solicitação pull deve seguir este formato.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Use o formato de mensagem de confirmação convencional para seu título de solicitação de pull.</p></div><h2 id="imagens-docker" tabindex="-1"><a class="header-anchor" href="#imagens-docker" aria-hidden="true">#</a> Imagens Docker</h2>',8),te=r("Os projetos "),re={href:"https://github.com/vic/asdf-alpine",target:"_blank",rel:"noopener noreferrer"},le=r("asdf-alpine"),ce=r(" e "),ie={href:"https://github.com/vic/asdf-ubuntu",target:"_blank",rel:"noopener noreferrer"},pe=r("asdf-ubuntu"),de=r(" são um esforço contínuo para fornecer imagens de algumas ferramentas asdf. Você pode usar essas imagens docker como base para seus servidores de desenvolvimento ou para executar seus aplicativos de produção.");l.render=function(t,r){const l=e("OutboundLink");return s(),a(n,null,[c,o("ul",null,[o("li",null,[o("a",i,[p,o(l)]),d]),o("li",null,[o("a",u,[m,o(l)]),h]),o("li",null,[o("a",f,[g,o(l)]),b])]),v,o("div",F,[y,o("p",null,[k,x,q,_,o("a",w,[A,o(l)])])]),S,o("p",null,[I,T,D,o("a",E,[B,o(l)]),C]),O,o("p",null,[P,o("a",z,[G,o(l)]),R]),U,o("p",null,[j,H,V,o("a",L,[W,o(l)]),M,o("a",N,[X,o(l)]),$,o("a",J,[K,o(l)]),Q]),o("p",null,[o("a",Y,[Z,o(l)]),ee,o("a",se,[ae,o(l)]),oe]),ne,o("p",null,[te,o("a",re,[le,o(l)]),ce,o("a",ie,[pe,o(l)]),de])],64)};export default l;
