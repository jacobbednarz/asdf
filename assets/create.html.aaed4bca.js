import{r as a,o as e,c as s,a as o,F as n,b as i,d as r}from"./app.1d898324.js";const l={},p=i('<h1 id="criar-um-plug-in" tabindex="-1"><a class="header-anchor" href="#criar-um-plug-in" aria-hidden="true">#</a> Criar um plug-in</h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><h2 id="o-que-ha-em-um-plug-in" tabindex="-1"><a class="header-anchor" href="#o-que-ha-em-um-plug-in" aria-hidden="true">#</a> O que há em um plug-in</h2><p>Um plugin é um repositório git, com alguns scripts executáveis, para dar suporte ao versionamento de outra linguagem ou ferramenta. Esses scripts são executados quando os comandos <code>list-all</code>, <code>install</code> ou <code>uninstall</code> são executados. Você pode definir ou desmarcar env vars e fazer qualquer coisa necessária para configurar o ambiente para a ferramenta.</p><h2 id="scripts-obrigatorios" tabindex="-1"><a class="header-anchor" href="#scripts-obrigatorios" aria-hidden="true">#</a> Scripts obrigatórios</h2><ul><li><code>bin/list-all</code> - lista todas as versões instaláveis</li><li><code>bin/download</code> - baixe o código fonte ou binário para a versão especificada</li><li><code>bin/install</code> - instala a versão especificada</li></ul><h2 id="variaveis-de-ambiente" tabindex="-1"><a class="header-anchor" href="#variaveis-de-ambiente" aria-hidden="true">#</a> Variavéis de Ambiente</h2><p>Todos os scripts, exceto <code>bin/list-all</code>, terão acesso aos seguintes env vars para agir:</p><ul><li><code>ASDF_INSTALL_TYPE</code> - <code>version</code> ou <code>ref</code></li><li><code>ASDF_INSTALL_VERSION</code> - se <code>ASDF_INSTALL_TYPE</code> é <code>version</code> então este será o número da versão. Caso contrário, será o git ref que será passado. Pode apontar para uma tag/commit/branch no repositório.</li><li><code>ASDF_INSTALL_PATH</code> - o diretório onde <em>foi</em> instalado (ou <em>deve</em> ser instalado no caso do script <code>bin/install</code>)</li></ul><p>Essas variáveis de ambiente adicionais estarão disponíveis para o script <code>bin/install</code>:</p><ul><li><code>ASDF_CONCURRENCY</code> - o número de núcleos a serem usados ao compilar o código-fonte. Útil para definir <code>make -j</code>.</li><li><code>ASDF_DOWNLOAD_PATH</code> - o caminho para onde o código fonte ou binário foi baixado pelo script <code>bin/download</code>.</li></ul><p>Essas variáveis de ambiente adicionais estarão disponíveis para o script <code>bin/download</code>:</p><ul><li><code>ASDF_DOWNLOAD_PATH</code> - o caminho para onde o código-fonte ou binário deve ser baixado.</li></ul><h4 id="bin-list-all" tabindex="-1"><a class="header-anchor" href="#bin-list-all" aria-hidden="true">#</a> bin/list-all</h4><p>Deve imprimir uma string com uma lista de versões separadas por espaço. A saída de exemplo seria a seguinte:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">1.0.1 1.0.2 1.3.0 1.4</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Observe que a versão mais recente deve ser listada por último para que apareça mais próxima do prompt do usuário. Isso é útil já que o comando <code>list-all</code> imprime cada versão em sua própria linha. Se houver muitas versões, é possível que as primeiras versões fiquem fora da tela.</p>',17),d=r("Se as versões estiverem sendo extraídas da página de lançamentos em um site, é recomendável não classificar as versões, se possível. Muitas vezes as versões já estão na ordem correta ou, na ordem inversa, nesse caso algo como "),c=o("code",null,"tac",-1),t=r(" deve ser suficiente. Se você precisar classificar as versões manualmente, não poderá confiar em "),u=o("code",null,"sort -V",-1),m=r(", pois não é suportado no OSX. Uma função de classificação alternativa "),b={href:"https://github.com/vic/asdf-idris/blob/master/bin/list-all#L6",target:"_blank",rel:"noopener noreferrer"},h=r("como esta é uma escolha melhor"),F=r("."),f=i('<h4 id="bin-download" tabindex="-1"><a class="header-anchor" href="#bin-download" aria-hidden="true">#</a> bin/download</h4><p>Este script deve baixar o código fonte ou binário, no caminho contido na variável de ambiente <code>ASDF_DOWNLOAD_PATH</code>. Se o código-fonte ou binário baixado estiver compactado, apenas o código-fonte ou binário descompactado poderá ser colocado no diretório <code>ASDF_DOWNLOAD_PATH</code>.</p><p>O script deve sair com um status de <code>0</code> quando o download for bem-sucedido. Se o download falhar, o script deve sair com qualquer status de saída diferente de zero.</p><p>Se possível, o script deve apenas colocar arquivos no <code>ASDF_DOWNLOAD_PATH</code>. Se o download falhar, nenhum arquivo deve ser colocado no diretório.</p><p>Se este script não estiver presente, o asdf assumirá que o script <code>bin/install</code> está presente e fará o download e instalará a versão. asdf só funciona sem este script para suportar plugins legados. Todos os plugins devem incluir este script e, eventualmente, o suporte para plugins legados será removido.</p><h4 id="bin-install" tabindex="-1"><a class="header-anchor" href="#bin-install" aria-hidden="true">#</a> bin/install</h4><p>Este script deve instalar a versão, no caminho mencionado em <code>ASDF_INSTALL_PATH</code>. Por padrão, o asdf criará shims para qualquer arquivo em <code>$ASDF_INSTALL_PATH/bin</code> (isso pode ser personalizado com o script opcional <a href="#binlist-bin-paths">bin/list-bin-paths</a>).</p><p>O script de instalação deve sair com um status de <code>0</code> quando a instalação for bem-sucedida. Se a instalação falhar, o script deve sair com qualquer status de saída diferente de zero.</p>',8),v=r("Se possível, o script deve apenas colocar os arquivos no diretório "),g=o("code",null,"ASDF_INSTALL_PATH",-1),y=r(" uma vez que a compilação e instalação da ferramenta são consideradas bem sucedidas pelo script de instalação. asdf "),x={href:"https://github.com/asdf-vm/asdf/blob/242d132afbf710fe3c7ec23c68cec7bdd2c78ab5/lib/utils.sh#L44",target:"_blank",rel:"noopener noreferrer"},_=r("verifica a existência"),q=r(" do diretório "),A=o("code",null,"ASDF_INSTALL_PATH",-1),D=r(" para determinar se essa versão da ferramenta está instalado. Se o diretório "),S=o("code",null,"ASDF_INSTALL_PATH",-1),E=r(" for preenchido no início do processo de instalação, outros comandos asdf executados em outros terminais durante a instalação podem considerar essa versão da ferramenta instalada, mesmo quando não estiver totalmente instalada."),I=i('<p>Se você quiser que seu plugin funcione com asdf versão 0.7._ e anterior e versão 0.8._ e mais recente, verifique a presença da variável de ambiente <code>ASDF_DOWNLOAD_PATH</code>. Se não estiver definido, baixe o código-fonte no retorno de chamada bin/install. Se estiver definido, suponha que o script <code>bin/download</code> já tenha baixado.</p><h2 id="scripts-opcional" tabindex="-1"><a class="header-anchor" href="#scripts-opcional" aria-hidden="true">#</a> Scripts Opcional</h2><h4 id="scripts-bin-help" tabindex="-1"><a class="header-anchor" href="#scripts-bin-help" aria-hidden="true">#</a> scripts bin/help</h4><p>Este não é um script de retorno de chamada, mas sim um conjunto de scripts de retorno de chamada que imprimem documentação diferente para STDOUT. Os scripts de retorno de chamada possíveis estão listados abaixo. Observe que <code>bin/help.overview</code> é um caso especial, pois deve estar presente para que qualquer saída de ajuda seja exibida para o script.</p><ul><li><code>bin/help.overview</code> - Este script deve gerar uma descrição geral sobre o plugin e a ferramenta que está sendo gerenciada. Nenhum título deve ser impresso, pois o asdf imprimirá títulos. A saída pode ser um texto de formato livre, mas idealmente apenas um parágrafo curto. Este script deve estar presente se você quiser que o asdf forneça informações de ajuda para seu plugin. Todos os outros scripts de retorno de chamada de ajuda são opcionais.</li><li><code>bin/help.deps</code> - Esse script deve gerar a lista de dependências adaptadas ao sistema operacional. Uma dependência por linha.</li><li><code>bin/help.config</code> - Este script deve imprimir qualquer configuração obrigatória ou opcional que possa estar disponível para o plug-in e a ferramenta. Quaisquer variáveis de ambiente ou outros sinalizadores necessários para instalar ou compilar a ferramenta (para o sistema operacional dos usuários quando possível). A saída pode ser texto de formato livre.</li><li><code>bin/help.links</code> - Esta deve ser uma lista de links relevantes para o plug-in e a ferramenta (mais uma vez, adaptados ao sistema operacional atual, quando possível). Um link por linha. As linhas podem estar no formato <code>&lt;title&gt;: &lt;link&gt;</code> ou apenas <code>&lt;link&gt;</code>.</li></ul><p>Cada um desses scripts deve adaptar sua saída ao sistema operacional atual. Por exemplo, quando no Ubuntu, o script deps pode gerar as dependências como pacotes apt-get que devem ser instalados. O script também deve adaptar sua saída ao valor de <code>ASDF_INSTALL_VERSION</code> e <code>ASDF_INSTALL_TYPE</code> quando as variáveis forem definidas. Eles são opcionais e nem sempre serão definidos.</p><p>O script de retorno de chamada de ajuda NÃO DEVE gerar nenhuma informação que já esteja coberta na documentação principal do asdf-vm. As informações gerais de uso do asdf não devem estar presentes.</p><h4 id="bin-list-bin-paths" tabindex="-1"><a class="header-anchor" href="#bin-list-bin-paths" aria-hidden="true">#</a> bin/list-bin-paths</h4><p>Liste os executáveis para a versão especificada da ferramenta. Deve imprimir uma string com uma lista separada por espaços de caminhos de diretórios que contêm executáveis. Os caminhos devem ser relativos ao caminho de instalação passado. A saída de exemplo seria:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">bin tools veggies</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Isso instruirá o asdf a criar shims para os arquivos em <code>&lt;install-path&gt;/bin</code>, <code>&lt;install-path&gt;/tools</code> e <code>&lt;install-path&gt;/veggies</code></p><p>Se este script não for especificado, o asdf procurará o diretório <code>bin</code> em uma instalação e criará shims para eles.</p><h4 id="bin-exec-env" tabindex="-1"><a class="header-anchor" href="#bin-exec-env" aria-hidden="true">#</a> bin/exec-env</h4><p>Configure o env para executar os binários no pacote.</p><h4 id="bin-exec-path" tabindex="-1"><a class="header-anchor" href="#bin-exec-path" aria-hidden="true">#</a> bin/exec-path</h4><p>Obtenha o caminho executável para a versão especificada da ferramenta. Deve imprimir uma string com o caminho executável relativo. Isso permite que o plug-in substitua condicionalmente o caminho executável especificado do shim, caso contrário, retorne o caminho padrão especificado pelo shim.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">Usage:</span></span>\n<span class="line"><span style="color:#F8F8F2;">  plugin/bin/exec-path </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">install-path</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">executable-path</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">Example Call:</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/plugins/foo/bin/exec-path </span><span style="color:#E6DB74;">&quot;~/.asdf/installs/foo/1.0&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;foo&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;bin/foo&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">Output:</span></span>\n<span class="line"><span style="color:#F8F8F2;">  bin/foox</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="bin-uninstall" tabindex="-1"><a class="header-anchor" href="#bin-uninstall" aria-hidden="true">#</a> bin/uninstall</h4><p>Desinstala uma versão específica de uma ferramenta.</p><h4 id="bin-list-legacy-filenames" tabindex="-1"><a class="header-anchor" href="#bin-list-legacy-filenames" aria-hidden="true">#</a> bin/list-legacy-filenames</h4><p>Registre arquivos setter adicionais para este plugin. Deve imprimir uma string com uma lista de nomes de arquivos separados por espaços.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">.ruby-version .rvmrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Nota: Isso só se aplica a usuários que habilitaram a opção <code>legacy_version_file</code> em seu <code>~/.asdfrc</code>.</p><h4 id="bin-parse-legacy-file" tabindex="-1"><a class="header-anchor" href="#bin-parse-legacy-file" aria-hidden="true">#</a> bin/parse-legacy-file</h4><p>Isso pode ser usado para analisar ainda mais o arquivo legado encontrado pelo asdf. Se o <code>parse-legacy-file</code> não for implementado, o asdf simplesmente irá cat o arquivo para determinar a versão. O script receberá o caminho do arquivo como seu primeiro argumento.</p><h4 id="bin-post-plugin-add" tabindex="-1"><a class="header-anchor" href="#bin-post-plugin-add" aria-hidden="true">#</a> bin/post-plugin-add</h4><p>Isso pode ser usado para executar qualquer ação pós-instalação depois que o plug-in for adicionado ao asdf.</p><p>O script tem acesso ao caminho em que o plugin foi instalado (<code>${ASDF_PLUGIN_PATH}</code>) e o URL de origem (<code>${ASDF_PLUGIN_SOURCE_URL}</code>), se algum foi usado.</p><p>Veja também os ganchos relacionados:</p><ul><li><code>pre_asdf_plugin_add</code></li><li><code>pre_asdf_plugin_add_${plugin_name}</code></li><li><code>post_asdf_plugin_add</code></li><li><code>post_asdf_plugin_add_${plugin_name}</code></li></ul><h4 id="bin-pre-plugin-remove" tabindex="-1"><a class="header-anchor" href="#bin-pre-plugin-remove" aria-hidden="true">#</a> bin/pre-plugin-remove</h4><p>Isso pode ser usado para executar qualquer ação de pré-remoção antes que o plug-in seja removido do asdf.</p><p>O script tem acesso ao caminho em que o plugin foi instalado (<code>${ASDF_PLUGIN_PATH}</code>).</p><p>Veja também os ganchos relacionados:</p><ul><li><code>pre_asdf_plugin_remove</code></li><li><code>pre_asdf_plugin_remove_${plugin_name}</code></li><li><code>post_asdf_plugin_remove</code></li><li><code>post_asdf_plugin_remove_${plugin_name}</code></li></ul><h2 id="comandos-de-extensao-para-asdf-cli" tabindex="-1"><a class="header-anchor" href="#comandos-de-extensao-para-asdf-cli" aria-hidden="true">#</a> Comandos de extensão para asdf CLI.</h2><p>É possível que plugins definam novos comandos asdf fornecendo scripts ou executáveis <code>lib/commands/command*.bash</code> que será chamado usando a interface de linha de comando asdf usando o nome do plug-in como um subcomando.</p><p>Por exemplo, suponha que um plugin <code>foo</code> tenha:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">foo/</span></span>\n<span class="line"><span style="color:#F8F8F2;">  lib/commands/</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command.bash</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command-bat.bash</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command-bat-man.bash</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command-help.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Os usuários agora podem executar</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">$ asdf foo         </span><span style="color:#88846F;"># same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command.bash`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo bar     </span><span style="color:#88846F;"># same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command.bash bar`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo </span><span style="color:#66D9EF;">help</span><span style="color:#F8F8F2;">    </span><span style="color:#88846F;"># same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-help.bash`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo bat man </span><span style="color:#88846F;"># same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bat-man.bash`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo bat baz </span><span style="color:#88846F;"># same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bat.bash baz`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Os autores de plugins podem usar esse recurso para fornecer utilitários relacionados às suas ferramentas, ou até mesmo criar plugins que são apenas novas extensões de comando para o próprio asdf.</p><p>Quando invocados, se os comandos de extensão não tiverem seus bits executáveis definidos, eles serão originado como scripts bash, tendo todas as funções de <code>$ASDF_DIR/lib/utils.bash</code> disponíveis. Além disso, o <code>$ASDF_CMD_FILE</code> resolve para o caminho completo do arquivo que está sendo originado. Se o bit executável estiver definido, eles são apenas executados e substituem a execução do asdf.</p>',43),T=r("Um bom exemplo desse recurso é para plugins como "),O={href:"https://github.com/asdf-community/asdf-haxe",target:"_blank",rel:"noopener noreferrer"},k=o("code",null,"haxe",-1),L=r(" que fornece o "),N=o("code",null,"asdf haxe neko-dylibs-link",-1),P=r(" para corrigir um problema onde os executáveis haxe esperam encontrar bibliotecas dinâmicas relativas ao diretório executável."),B=i('<p>Se o seu plug-in fornecer um comando de extensão asdf, certifique-se de mencioná-lo no README do seu plug-in.</p><h2 id="modelos-de-calcos-personalizados" tabindex="-1"><a class="header-anchor" href="#modelos-de-calcos-personalizados" aria-hidden="true">#</a> Modelos de calços personalizados</h2><p><strong>POR FAVOR, use este recurso apenas se for absolutamente necessário</strong></p><p>asdf permite modelos de calços personalizados. Para um executável chamado <code>foo</code>, se houver um arquivo <code>shims/foo</code> no plug-in, o asdf copiará esse arquivo em vez de usar seu modelo padrão de shim.</p><p>Isso deve ser usado com sabedoria. Por enquanto AFAIK, está sendo usado apenas no plugin Elixir, porque um executável também é lido como um arquivo Elixir, além de ser apenas um executável. O que torna impossível usar o calço bash padrão.</p><h2 id="testando-plug-ins" tabindex="-1"><a class="header-anchor" href="#testando-plug-ins" aria-hidden="true">#</a> Testando plug-ins</h2><p><code>asdf</code> contém o comando <code>plugin-test</code> para testar seu plugin. Você pode usá-lo da seguinte forma</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin </span><span style="color:#66D9EF;">test</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">plugin-name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">plugin-url</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [--asdf-tool-version </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">] [--asdf-plugin-gitref </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">git-ref</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">] [test-command</span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Apenas os dois primeiros argumentos são necessários. Se _<em>version</em> for especificado, a ferramenta será instalada com essa versão específica. O padrão é o que retorna <code>asdf mais recente &lt;plugin-name&gt;</code>. Se <em>git-ref</em> for especificado, o plug-in em si é verificado nesse commit/branch/tag, útil para testar um pull-request no CI do seu plug-in.</p><p>Os argumentos Rest são considerados o comando a ser executado para garantir que a ferramenta instalada funcione corretamente. Normalmente seria algo que leva <code>--version</code> ou <code>--help</code>. Por exemplo, para testar o plugin NodeJS, podemos executar</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin </span><span style="color:#66D9EF;">test</span><span style="color:#F8F8F2;"> nodejs https://github.com/asdf-vm/asdf-nodejs.git node --version</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>É altamente recomendável que você teste seu plug-in em um ambiente CI e verifique se ele funciona no Linux e no OSX.</p><h4 id="exemplo-github-action" tabindex="-1"><a class="header-anchor" href="#exemplo-github-action" aria-hidden="true">#</a> Exemplo GitHub Action</h4>',13),$=r("O repositório "),H={href:"https://github.com/asdf-vm/actions",target:"_blank",rel:"noopener noreferrer"},U=r("asdf-vm/actions"),j=r(" fornece uma ação do GitHub para testar seus plugins hospedados no github."),R=i('<div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">steps</span><span style="color:#F8F8F2;">:</span></span>\n<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#F92672;">name</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">asdf_plugin_test</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">uses</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">asdf-vm/actions/plugin-test@v1</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">with</span><span style="color:#F8F8F2;">:</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">command</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;my_tool --version&quot;</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">env</span><span style="color:#F8F8F2;">:</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">GITHUB_API_TOKEN</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">${{ secrets.GITHUB_TOKEN }}</span><span style="color:#F8F8F2;"> </span><span style="color:#88846F;"># automatically provided</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="exemplo-de-configuracao-do-travisci" tabindex="-1"><a class="header-anchor" href="#exemplo-de-configuracao-do-travisci" aria-hidden="true">#</a> Exemplo de configuração do TravisCI</h4><p>Aqui está um arquivo <code>.travis.yml</code> de amostra, personalize-o de acordo com suas necessidades</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">language</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">c</span></span>\n<span class="line"><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">asdf plugin test nodejs $TRAVIS_BUILD_DIR &#39;node --version&#39;</span></span>\n<span class="line"><span style="color:#F92672;">before_script</span><span style="color:#F8F8F2;">:</span></span>\n<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">git clone https://github.com/asdf-vm/asdf.git asdf</span></span>\n<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">. asdf/asdf.sh</span></span>\n<span class="line"><span style="color:#F92672;">os</span><span style="color:#F8F8F2;">:</span></span>\n<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">linux</span></span>\n<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">osx</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Notas: Ao usar outro IC, você precisará verificar qual variável mapeia para o caminho do repositório.</p><p>Você também tem a opção de passar um caminho relativo para <code>plugin-test</code>.</p><p>Por exemplo, se o script de teste for executado no diretório: <code>asdf plugin test nodejs . &#39;node --version&#39;</code>.</p><h2 id="limitacao-de-taxa-da-api-do-github" tabindex="-1"><a class="header-anchor" href="#limitacao-de-taxa-da-api-do-github" aria-hidden="true">#</a> Limitação de taxa da API do GitHub</h2><p>Se o <code>list-all</code> do seu plug-in depender do acesso à API do GitHub, certifique-se de fornecer um token de autorização ao acessá-lo, caso contrário, seus testes podem falhar devido à limitação de taxa.</p>',9),z=r("Para fazer isso, crie um "),w={href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"},C=r("novo token pessoal"),G=r(" com apenas acesso "),V=o("code",null,"public_repo",-1),K=r("."),W=i('<p>Em seguida, nas configurações de compilação do travis.ci, adicione uma variável de ambiente <em>secure</em> para ela chamada algo como <code>GITHUB_API_TOKEN</code>. E <em>NUNCA</em> publique seu token em seu código.</p><p>Finalmente, adicione algo como o seguinte para <code>bin/list-all</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">cmd=</span><span style="color:#E6DB74;">&quot;curl -s&quot;</span></span>\n<span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> [ </span><span style="color:#F92672;">-n</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$GITHUB_API_TOKEN</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;"> ]</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">then</span></span>\n<span class="line"><span style="color:#F8F8F2;"> cmd=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$cmd</span><span style="color:#E6DB74;"> -H &#39;Authorization: token </span><span style="color:#F8F8F2;">$GITHUB_API_TOKEN</span><span style="color:#E6DB74;">&#39;&quot;</span></span>\n<span class="line"><span style="color:#F92672;">fi</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">cmd=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$cmd</span><span style="color:#E6DB74;"> </span><span style="color:#F8F8F2;">$releases_path</span><span style="color:#E6DB74;">&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="enviando-plugins-para-o-repositorio-oficial-de-plugins" tabindex="-1"><a class="header-anchor" href="#enviando-plugins-para-o-repositorio-oficial-de-plugins" aria-hidden="true">#</a> Enviando plugins para o repositório oficial de plugins</h2><p><code>asdf</code> pode facilmente instalar plugins especificando o url do repositório de plugins, por exemplo. <code>plugin add my-plugin https://github.com/user/asdf-my-plugin.git</code>.</p><p>Para facilitar para seus usuários, você pode adicionar seu plugin ao repositório oficial de plugins para ter seu plugin listado e facilmente instalável usando um comando mais curto, por exemplo <code>asdf plugin add my-plugin</code>.</p>',6),M=r("Siga as instruções no repositório de plugins: "),Y={href:"https://github.com/asdf-vm/asdf-plugins",target:"_blank",rel:"noopener noreferrer"},Q=r("asdf-vm/asdf-plugins"),X=r(".");l.render=function(i,r){const l=a("OutboundLink");return e(),s(n,null,[p,o("p",null,[d,c,t,u,m,o("a",b,[h,o(l)]),F]),f,o("p",null,[v,g,y,o("a",x,[_,o(l)]),q,A,D,S,E]),I,o("p",null,[T,o("a",O,[k,o(l)]),L,N,P]),B,o("p",null,[$,o("a",H,[U,o(l)]),j]),R,o("p",null,[z,o("a",w,[C,o(l)]),G,V,K]),W,o("p",null,[M,o("a",Y,[Q,o(l)]),X])],64)};export default l;
