<template>
  <div>
    <header>
      <router-link tag="a" to="/" exact><h1>SIAO Limoges</h1></router-link>
        <div class="choixLangue">
          <div>
          <label for="langue">Langue</label>
          <select id="langue">
            <option>Français</option>
            <option>Anglais</option>
            <option>Arabe</option>
            <option>Russe</option>
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
