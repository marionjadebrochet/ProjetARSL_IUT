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
