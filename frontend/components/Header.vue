<template>
  <div>
    <header>
      <router-link tag="a" to="/" exact><h1>SIAO 115 <br> Haute-Vienne</h1></router-link>
        <div class="choixLangue">
          <div>
          <label for="langue">Langue</label>
          <select v-on:change="doGTranslate(this)">
            <option value="">Choose your language</option>
            <option value="fr|ar">Arabic</option>
            <option value="fr|en">English</option>
            <option value="fr|fr">French</option>
            <option value="fr|ru">Russian</option>
            </select>
          </div>
        <button>Connexion</button>
        </div>
    </header>
    <nav>
      <ul>
        <li><router-link tag="a" to="/centre" exact>Accueil de jour</router-link></li>
        <li><router-link tag="a" to="/association" exact>Associations</router-link></li>
      </ul>
    </nav>
    <h2> Signaler quelque chose ?  </h2>
    <button class="call">  115  </button>
  </div>
</template>


<script>

<script type="text/javascript">
function googleTranslateElementInit2() {new google.translate.TranslateElement({pageLanguage: 'en',autoDisplay: false}, 'google_translate_element2');}
</script><script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"></script>


<script type="text/javascript">
/* <![CDATA[ */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}',43,43,'||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'),0,{}))
/* ]]> */
</script>


</script>
