# Site SIAO : mode d'emploi
 - [Partie grand public](#GPublic)
	- [Langue](#langue)
	- [Page d'accueil](#accueil)
	- [Associations](#asso)
	- [Maraudes](#maraude)
	- [Services](#service)
- [Partie admin](#admin)
	- [Associations](#adasso)
	- [Maraudes](#admaraude)
	- [Centres](#adcentre)
	- [Services](#adservice)
	- [Partenaires](#adpartenaire)
	- [Membres](#admembre)
	- [Alertes](#adalerte)
## Partie grand public <a id="GPublic"></a>
### Langue <a id="langue"></a>
Le site est disponible en 4 langues différentes : **Français, Anglais, Russe et Arabe**. Pour changer la langue du site il suffit de se rendre dans le **menu** en haut à droite de la page.
### Page d'accueil <a id="accueil"></a> 
Sur la première page du site on peut trouver deux informations principales : une description du **SIAO** et des informations sur les **accueils de jour** des différentes associations.

Les centres visibles sont ceux ouverts au moment où l'on se trouve sur le site.
On y trouve les informations suivantes :
- L'adresse
- L’horaire d'ouverture
- Les lignes de bus par lesquelles on peut s'y rendre
- Un lien pour avoir accès à plus d'informations sur ses [services](#service)

Dessous la liste des centres, on a accès à une carte interactive montrant l'emplacement des différents centres. 

On peut finalement trouver sur la page d'accueil en haut et tout à fait en bas un bouton : **"Appelez le 115"**, qui lorsqu'on clique dessus, si un téléphone est associé va directement nous rediriger vers notre interface d'appel avec le numéro déjà composé.

### Associations <a id="asso"></a>
La page des associations liste toutes les associations travaillant avec l'ARSL. En cliquant sur le bouton "plus d'informations" vous pourrez accéder à une **description** ainsi qu'aux **centres** proposés par les associations.
### Maraudes <a id="maraude"></a>
Sur cette page la personne visitant le site pourra voir toutes les information sur les **maraudes du jour** (heures, lieux...) mais aussi sur les **maraudes en prévision**.

Il aura, la possibilité de voir ces maraudes sur une **carte**.
### Services <a id="service"></a>
Cette page liste les différents services que proposent les associations, avec une image pour facilement les identifier.

Quand on clique sur "plus d'informations" on peut voir la **localisation** de ces services. Il y a la possibilité de les identifier sur une **carte**.

Et quand on clique encore une fois sur "plus d'informations", on peut voir les autres services que propose l'accueil de jour où se trouve le services sélectionné ainsi que leurs **horaires d'ouvertures**.
## Partie admin <a id="admin"></a>
Pour pouvoir accéder à la partie admin, l'utilisateur doit atteindre la page de **connexion** via le menu en haut à droite et avoir un **identifiant** et un **mot de passe** propre à lui. 

En fonction de la personne qui se connecte les **droits** ne serons pas les même.
### Associations <a id="adasso"></a>
> Tout le monde à le droit de visualiser l'association

VISUALISER
Vous pouvez voir quelle est la description de votre association, ainsi que  l'image qui la représente.
### Maraudes<a id="admaraude"></a>
> Seul des référents de maraudes peuvent commencer une maraude mais n'importe qui peut les visualiser.

Les maraudes peuvent être commencées par n'importe quel **référent d'association** via le bouton **commencer une maraude**. Il sera demandé de rentrer le **nom de la maraude**, pour la référencer plus facilement, ainsi que le **lieu et l'heure de départ**, le **lieu et l'heure du rendez-vous** et le **lieu d'arrivé**. Il sera ensuite redirigé vers une autre page où il pourra compléter son rapport de maraude.
Une fois sa **maraude** commencée, le référent remplira une nouvelle ligne contenant les informations importantes concernant la personne (nom de famille ou pseudo, lieu de rencontre, situation, etc) via un **formulaire** à chaque fois qu'il rencontrera une **personne en difficulté**.
La maraude une fois terminée pourra être validée et le rapport enregistré dans la base de données.

Les rapports pourront être ensuite consultés via un bouton **Visualiser** dans la partie **Maraudes**.
### Centres <a id="adcentre"></a>
> Tout le monde peut les visualiser mais seulement l’administrateur de l'association peut ajouter ou supprimer.

VISUALISER
Cette fonctionnalité vous permet de voir tous les centres d'accueil de votre association. Les informations visibles sont l'**adresse**, et les **horaires d'ouverture**. 

AJOUTER
Vous avez via cette page la possibilité d'ajouter un nouveau centre d'accueil avec pour information : **l'adresse, le numéro de téléphone, l'autorisation aux animaux et le public concerné**.

SUPPRIMER
Sur cette page vous verrez tous vos centres et aurez la possibilité de les supprimer. Une telle suppression **supprimera tous les services** qui étaient associés à ce centre.

### Services <a id="adservice"></a>
> Tout le monde peut les visualiser mais seulement l’administrateur de l'association peut ajouter ou supprimer.

VISUALISER
Via cette page vous pouvez voir les différents services proposés par les centres de votre associations. Vous pouvez donc voir le **lieu** du service et ses **horaires d'ouverture**.

AJOUTER
Vous avez via cette page la possibilité d'ajouter un nouveau service avec pour information : son **nom**, sa **description**, son **centre associé** et les **horaires d'ouverture**.

SUPPRIMER
Vous pouvez sur cette page voir la liste des services des centres de votre association et donc vous pouvez les supprimer. Les supprimer n'aura aucun impact que sur le service supprimé.

### Partenaires <a id="adpartenaire"></a>
> Tout le monde peut les visualiser mais seulement l’administrateur de l'association peut ajouter ou supprimer.

VISUALISER
Vous pouvez voir dans cette rubrique les différents partenaires de votre association (**nom, téléphone, mail**). 

AJOUTER
Dans cette rubrique vous pouvez ajouter un nouveau partenaire en renseignant son nom, son numéro de téléphone, son mail et une image.

SUPPRIMER
Sur cette page vous verrez tous vos partenaires et aurez la possibilité de les supprimer. Une telle suppression n'impactera rien d'autre que les partenaires.

### Membres <a id="admembre"></a>
> Tout le monde peut les visualiser mais seulement l’administrateur de l'association peut ajouter ou supprimer.

VISUALISER
Vous pouvez voir dans cette rubrique les différents membres de votre association (**nom, pseudo, prénom, téléphone, mail, rôle**). 

AJOUTER
Dans cette rubrique vous pouvez ajouter un nouveau membre en renseignant son **nom**, son **numéro de téléphone**, son **mail**, son **pseudo** et son **mot de passe**.

SUPPRIMER
Sur cette page vous verrez tous les membres de votre association et vous aurez la possibilité de les supprimer. Une telle suppression supprimera leur compte et le membre supprimé n'aura plus accès à la partie admin du site.

### Alertes <a id="adalerte"></a>
> Seul l'administrateur de l'état peut déclencher une alerte

DÉCLENCHER 
Des alertes sont créés, l'utilisateur n'a plus qu'à cliquer dessus pour qu'une alerte se créée.

CRÉER
Sur cette page l'utilisateur pourra créer l'alertes qu'il veut.

