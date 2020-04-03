# Site SIAO : mode d'emploi

-  [Partie grand public](#GPublic)

	-  [Langue](#langue)

	-  [Page d'accueil](#accueil)

	-  [Organismes](#asso)

	-  [Maraudes](#maraude)

	-  [Services](#service)

-  [Partie admin](#admin)

	-  [Comptes utilisateurs](#comptes)

	-  [Organismes](#adasso)

	-  [Maraudes](#admaraude)

	-  [Accueil de jour](#adcentre)

	-  [Lieux](#lieu)

	-  [Services](#adservice)

	-  [Partenaires](#adpartenaire)

	-  [Membres](#admembre)

	-  [Alertes](#adalerte)

## Partie grand public <a id="GPublic"></a>

### Langue <a id="langue"></a>

Le site est disponible en 4 langues différentes : **Français, Anglais, Russe et Arabe**. Pour changer la langue du site il suffit de se rendre dans le **menu** en haut à droite de la page.

### Page d'accueil <a id="accueil"></a>

Sur la première page du site on peut trouver trois informations principales : une description du **SIAO**, les logos pour voir les **services** proposés, et des informations sur les **accueils de jour** des différentes organismes.

**Services**
Lorsqu'on clique sur les logos des services nous sommes redirigé vers la page des services décrite [ici](#service)

**Accueils de jour**
Les Accueils de jour visibles sont ceux ouverts au moment où l'on se trouve sur le site.

On y trouve les informations suivantes :

- L'adresse

- L’horaire d'ouverture

- Les lignes de bus par lesquelles on peut s'y rendre

- Un lien pour avoir accès à plus d'informations sur ses [services](#service)



Dessous la liste des accueils de jour, on a accès à une carte interactive montrant leur différent emplacement.



On peut finalement trouver sur la page d'accueil en haut et tout à fait en bas un bouton : **"Appelez le 115"**, qui lorsqu'on clique dessus, si un téléphone est associé va directement nous rediriger vers notre interface d'appel avec le numéro déjà composé.



### Organismes <a id="asso"></a>

La page des organismes liste toutes les organismes travaillant avec l'ARSL. En cliquant sur le bouton "plus d'informations" vous pourrez accéder à une **description** ainsi qu'aux **accueils de jour** proposés par les organismes.

### Maraudes <a id="maraude"></a>

Sur cette page la personne visitant le site pourra voir toutes les information sur les **maraudes du jour** (heures, lieux...).



Il aura, la possibilité de voir ces maraudes sur une **carte**.

### Services <a id="service"></a>

Cette page liste les différents services que proposent les organismes, avec une image pour facilement les identifier.



Quand on clique sur "plus d'informations" on peut voir la **localisation** de ces services. Il y a la possibilité de les identifier sur une **carte**.



Et quand on clique encore une fois sur "plus d'informations", on peut voir les autres services que propose l'accueil de jour où se trouve le services sélectionné ainsi que leurs **horaires d'ouvertures**.

## Partie admin <a id="admin"></a>

Pour pouvoir accéder à la partie admin, l'utilisateur doit atteindre la page de **connexion** via le menu en haut à droite et avoir un **identifiant** et un **mot de passe** propre à lui.



En fonction de la personne qui se connecte les **droits** ne serons pas les même.

 **REMARQUE** : pensez à régulièrement rafraichir la page où vous sous trouvez pour être sûr que les ajouts et suppressions effectuer soit mis à jour.

### Compte utilisateurs <a id="comptes"></a>

Il existe un compte Administrateur qui permet de gérer toute la base de données du site internet, et lui seul à l'accès à la création et suppression de nouveaux utilisateurs et organismes. Son pseudo est **admin** et son mot de passe **projetarsl**. il faudra vous connecter avec lui pour pouvoir créer les premiers **administrateurs d'organisme**. Eux-même pourront ensuite créer les compte utilisateurs de leur organisme par la suite. Les détails sont écrits dans la partie **membres** un peu plus bas.

Si vous ne voulez pas qu'un utilisateur mette son adresse mail ou même son nom, il suffit de lui en inventer un. La base de donnée exige que ces données soit remplis, mais pas nécessairement juste.

Les **comptes** déjà existant sont admin et ETAT avec le pseudo **etatvisiteur** et le mot de passe **etat**.

### Organismes <a id="adasso"></a>

> Tout le monde à le droit de visualiser son organisme, ainsi que l'ensemble des organisme présent sur le site. Et seul le compte admin peut ajouter/supprimer à sa guise.



VISUALISER

Vous pouvez voir quelle est la description de votre association, ainsi que l'image qui la représente.



AJOUTER/SUPPRIMER

L'administrateur peut décider d'ajouter ou de supprimer des organismes. En raison de quelques problèmes techniques, il n'est pas encore possible d'ajouter un logo à une association.

### Maraudes<a id="admaraude"></a>

> Seul des référents de maraudes peuvent commencer une maraude mais n'importe qui peut les visualiser ou les télécharger.



Les maraudes peuvent être commencées par n'importe quel **référent d'association** via le bouton **commencer une maraude**. Il sera demandé de rentrer le **nom de la maraude**, pour la référencer plus facilement, ainsi que le **lieu et l'heure de départ**, le **lieu et l'heure du rendez-vous** et le **lieu d'arrivé**. Il sera ensuite redirigé vers une autre page où il pourra compléter son rapport de maraude.

Une fois sa **maraude** commencée, le référent remplira une nouvelle ligne contenant les informations importantes concernant la personne (nom de famille ou pseudo, lieu de rencontre, situation, etc) via un **formulaire** à chaque fois qu'il rencontrera une **personne en difficulté**.

La maraude une fois terminée pourra être validée et le rapport enregistré dans la base de données.

Le référent peut choisir un ancien rapport déjà complété, et pourra ensuite enlever les lignes dont ils jugent inutiles, et les réajouter si besoin. Il n'est malheureusement pas encore possible de modifier directement une ligne d'un rapport d'une maraude en cours.

Les rapports pourront être ensuite consultés et téléchargés au format Excel via le bouton **Télécharger Rapport**.

### Accueil de jour <a id="adcentre"></a>

> Tout le monde peut les visualiser mais seulement l’administrateur de l'organisme peut ajouter ou supprimer.



VISUALISER

Cette fonctionnalité vous permet de voir tous les accueils de jour de votre association. Les informations visibles sont l'**adresse**, et les **horaires d'ouverture**.
![](https://media.discordapp.net/attachments/645265451638587394/695545114440761354/visualiseraccueilJour.png?width=1431&height=671)


AJOUTER

Vous avez via cette page la possibilité d'ajouter un nouvel accueil de jour avec pour information : **l'adresse, le numéro de téléphone, l'autorisation aux animaux et le public concerné**. Vous devrez aussi lui associé un lieu prédéfini dans la base de donnée. La raison est que nous avons besoin de données spécifiques pour faire apparaître un lieu sur la carte Google Map. Nous vous demanderons d'ajouter les lieux qui ne figurent pas déjà dans la liste. Ceci est expliqué plus en détails [par la suite](#lieu).
![](https://media.discordapp.net/attachments/645265451638587394/695544187881521202/ajouterAccueilJour1.png)![](https://media.discordapp.net/attachments/645265451638587394/695544185473990678/ajoutAccueilJour2.png?width=1021&height=671)


SUPPRIMER

Sur cette page vous verrez tous vos accueils de jour et aurez la possibilité de les supprimer. Une telle suppression **supprimera tous les services** qui lui sont associés.



### Lieux <a id="lieu"></a>

AJOUTER

Tout d'abord vous rentrerez les informations principales, tel que l'adresse entière et son libellé.
![](https://media.discordapp.net/attachments/645265451638587394/695538342829359104/ajouterLieu.png)
Vous devrez ensuite vous rendre sur un site disponible en cliquant sur "Pour récupérer latitude et longitude".
![](https://media.discordapp.net/attachments/645265451638587394/695538456725815306/latitudeLongitude.png?width=1106&height=671)
Après avoir été redirigé, vous devrez simplement rentrer l'adresse du lieu et copié/collé les coordonnées latitude et longitude dans les champs correspondants.

SUPPRIMER

Vous pouvez supprimer un lieu si vous avez fait une erreur ou si le lieu ne convenait pas. ATTENTION ! La suppression d'un lieu supprimera aussi les données (du lieu) associées aux accueils de jour et maraude qui lui étaient associés.  

### Services <a id="adservice"></a>

> Tout le monde peut les visualiser mais seulement l’administrateur de l'association peut ajouter ou supprimer.



VISUALISER

Via cette page vous pouvez voir les différents services proposés par les accueils de jour de votre organismes. Vous pouvez donc voir le **lieu** du service et ses **horaires d'ouverture**.



AJOUTER

Vous avez via cette page la possibilité d'ajouter un nouveau service avec pour information : son **nom**, sa **description**, son **accueil de jour associé** et les **horaires d'ouverture**.



SUPPRIMER

Vous pouvez sur cette page voir la liste des services des accueils de jour de votre organisme et donc vous pouvez les supprimer.



### Partenaires <a id="adpartenaire"></a>

> Tout le monde peut les visualiser mais seulement l’administrateur de l'association peut ajouter ou supprimer.



VISUALISER

Vous pouvez voir dans cette rubrique les différents partenaires de votre organisme (**nom, téléphone, mail**).



AJOUTER

Dans cette rubrique vous pouvez ajouter un nouveau partenaire en renseignant son nom, son numéro de téléphone et son mail.



SUPPRIMER

Sur cette page vous verrez tous vos partenaires et aurez la possibilité de les supprimer. Une telle suppression n'impactera rien d'autre que les partenaires.



### Membres <a id="admembre"></a>

> Tout le monde peut les visualiser mais seulement l’administrateur de l'organisme peut ajouter ou supprimer.



VISUALISER

Vous pouvez voir dans cette rubrique les différents membres de votre organisme (**nom, pseudo, prénom, téléphone, mail, rôle**).



AJOUTER

Dans cette rubrique vous pouvez ajouter un nouveau membre en renseignant son **nom**, son **numéro de téléphone**, son **mail**, son **pseudo** et son **mot de passe**.
![](https://media.discordapp.net/attachments/645265451638587394/695539009296007168/ajouterMembre.png?width=1000&height=671)


SUPPRIMER
![](https://media.discordapp.net/attachments/645265451638587394/695542596709122088/supprimerMembre.png)
Sur cette page vous verrez tous les membres de votre organisme et vous aurez la possibilité de les supprimer. Une telle suppression supprimera leur compte et le membre supprimé n'aura plus accès à la partie admin du site.

### Utilisateurs

> Seul l'admin principal peut gérer cette partie.



VISUALISER

Vous pouvez voir dans cette rubrique les différents membres de votre organisme (**nom, pseudo, prénom, téléphone, mail, rôle**).



AJOUTER

Dans cette rubrique vous pouvez ajouter un nouveau membre en renseignant son **nom**, son **numéro de téléphone**, son **mail**, son **pseudo** ,son **mot de passe**, ainsi que son **rôle** et l'**organisme** auquel il va être associé.
![](https://media.discordapp.net/attachments/645265451638587394/695539069140205578/ajoutUtilisateur.png?width=1019&height=671)


SUPPRIMER

Sur cette page vous verrez tous les membres de votre organisme et vous aurez la possibilité de les supprimer. Une telle suppression supprimera leur compte et le membre supprimé n'aura plus accès à la partie admin du site.

### Alertes Globales <a id="adalerte"></a>

> Seul l'administrateur du SIAO qui à pour pseudo "SIAO" peut déclencher/désactiver une alerte



DÉCLENCHER /DÉSACTIVER

Des alertes présentent, l'utilisateur n'a plus qu'à cliquer dessus pour qu'une alerte se déclenche ou se désactive selon l'état dans lequel elle est. Par exemple, si une alerte est désactivée, il suffit de cliquer sur le bouton le concernant pour pouvoir l'activer, et vice-versa.
