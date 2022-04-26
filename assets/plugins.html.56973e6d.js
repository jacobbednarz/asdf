import{r as a,o as s,c as e,a as n,w as o,F as l,d as i,b as r}from"./app.1d898324.js";const p={},d=n("h1",{id:"plugins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),i(" Plugins")],-1),t=n("blockquote",null,[n("p",null,'Hi, we\'ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the "Edit this page" link at the bottom of the page.')],-1),c=n("p",null,[i("Plugins são como "),n("code",null,"asdf"),i(" sabe lidar com diferentes ferramentas, tais quais Node.js, Ruby, Elixir etc.")],-1),u=i("Veja "),h=i("Criando Plugins"),g=i(" para a API do plugin usada para suportar mais ferramentas."),m=r('<h2 id="adicionar" tabindex="-1"><a class="header-anchor" href="#adicionar" aria-hidden="true">#</a> Adicionar</h2><p>Adicione os plugins via sua Url Git:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">git-url</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin add elm https://github.com/vic/asdf-elm</span></span>\n<span class="line"></span></code></pre></div><p>ou pelo nome abreviado dentro do repositório de plugins:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin add erlang</span></span>\n<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Recommendation</p><p>Prefira o método mais longo <code>git-url</code>, pois ele é independente do repositório de nome abreviado.</p></div><h2 id="listar-instalados" tabindex="-1"><a class="header-anchor" href="#listar-instalados" aria-hidden="true">#</a> Listar Instalados</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>\n<span class="line"><span style="color:#88846F;"># java</span></span>\n<span class="line"><span style="color:#88846F;"># nodejs</span></span>\n<span class="line"></span></code></pre></div><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list --urls</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>\n<span class="line"><span style="color:#88846F;"># java            https://github.com/halcyon/asdf-java.git</span></span>\n<span class="line"><span style="color:#88846F;"># nodejs          https://github.com/asdf-vm/asdf-nodejs.git</span></span>\n<span class="line"></span></code></pre></div><h2 id="listar-todos-nomes-abreviados-no-repositorio" tabindex="-1"><a class="header-anchor" href="#listar-todos-nomes-abreviados-no-repositorio" aria-hidden="true">#</a> Listar todos nomes abreviados no repositório</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list all</span></span>\n<span class="line"></span></code></pre></div>',11),F=i("Veja "),f={href:"https://github.com/asdf-vm/asdf-plugin-template",target:"_blank",rel:"noopener noreferrer"},v=i("Plugins Shortname Index"),b=i(" para toda a lista de nomes curtos de plugins."),y=r('<h2 id="atualizar" tabindex="-1"><a class="header-anchor" href="#atualizar" aria-hidden="true">#</a> Atualizar</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update --all</span></span>\n<span class="line"></span></code></pre></div><p>Se você quiser atualizar um pacote específico, apenas use.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin update erlang</span></span>\n<span class="line"></span></code></pre></div>',4),k=i("Esta atualização irá buscar o último "),x=n("em",null,"commit",-1),z=i(" na "),j=n("em",null,"branch",-1),_=i(" padrão no "),P=n("em",null,"origin",-1),I=i(" de seu respositório. Plugins e atualizações das versões estão sendo desenvolvidas ("),R={href:"https://github.com/asdf-vm/asdf/pull/916",target:"_blank",rel:"noopener noreferrer"},q=i("#916"),w=i(")"),A=r('<h2 id="remover" tabindex="-1"><a class="header-anchor" href="#remover" aria-hidden="true">#</a> Remover</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin remove </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"><span style="color:#88846F;"># asdf plugin remove erlang</span></span>\n<span class="line"></span></code></pre></div><p>Removendo o plugin irá remover todas as instalações feitas com o plugin. Isso pode ser usado como um atalho para apagar/remover sujeiras de versões não utilizadas de uma ferramenta.</p><h2 id="sincronizar-nome-abreviado-no-repositorio" tabindex="-1"><a class="header-anchor" href="#sincronizar-nome-abreviado-no-repositorio" aria-hidden="true">#</a> Sincronizar nome abreviado no repositório</h2><p>O nome abreviado do repositório é sincronizado em seu máquina local e periodicamente atualizado. Esse período pode ser determinado com o seguinte método:</p>',5),E=n("li",null,[i("comandos "),n("code",null,"asdf plugin add <name>"),i(" ou "),n("code",null,"asdf plugin list all"),i(" disparam a sincronização")],-1),L=n("li",null,[i("ocorre uma sincronização se não houver nenhuma nos últimos "),n("code",null,"X"),i(" minutos")],-1),S=n("code",null,"X",-1),O=i(" por padrão é "),V=n("code",null,"60",-1),X=i(", mas pode ser mudado em "),C=n("code",null,".asdfrc",-1),G=i(" via as opções do "),H=n("code",null,"plugin_repository_last_check_duration",-1),N=i(". Seja mais em "),U=i("asdf documentação de configuração"),B=i(".");p.render=function(i,r){const p=a("RouterLink"),D=a("OutboundLink");return s(),e(l,null,[d,t,c,n("p",null,[u,n(p,{to:"/pt-br/plugins/create.html"},{default:o((()=>[h])),_:1}),g]),m,n("p",null,[F,n("a",f,[v,n(D)]),b]),y,n("p",null,[k,x,z,j,_,P,I,n("a",R,[q,n(D)]),w]),A,n("ul",null,[E,L,n("li",null,[S,O,V,X,C,G,H,N,n(p,{to:"/pt-br/manage/configuration.html"},{default:o((()=>[U])),_:1}),B])])],64)};export default p;
