<template>
  <div>
  <header>
    <h1>SIAO Limoges</h1>
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
      <li><router-link tag="a" to="/association" exact>Association</router-link></li>
    </ul>
  <h2> Signaler quelque chose ?  </h2>
  <button>  115  </button>
  </nav>
  </div>
</template>
