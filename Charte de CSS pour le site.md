#  Charte de CSS pour le site 
## Placement
### Mise au centre en colonne

HTML

```<div class=« center »>
		<div>…</div>
		ou <un élément>
	</div>
```

CSS 

```.center {
		display:flex;
		flex-direction:column;
		align-items:center;
	}
```
		
### Mettre en ligne

HTML

```<div class=« row »>
		<div>…</div>
		<div>…</div>
	</div>
```

CSS 

```.row {
		display:flex;
		flex-direction:row;
		justify-content:space-around;
	}
	.row :nth-child(1), .row :nth-child(2) {
		width:40%;
	}	
```

### Ligne avec espaces réguliers

HTML

```<div class=« justify-content »>
		<div>…</div>
		<div>…</div>
		<div>…</div>
		<div>…</div>
	</div>
```

CSS 

```.justify-content {
		display:flex;
		flex-direction:row;
		justify-content:space-around;
	}
	
```

## Bouton 
HTML

```
	<button class=« bouton »></button>
```

CSS 

```.bouton {
  border:3px solid black;
  color:black;
  padding:15px;
  font-weight: bold;
  font-size:22px;
  text-align:center;
}
.bouton:hover {
  color: #f26340;
  background-color: black;
  transition: 0.5s;
}
	
```

## Bouton centré
HTML

```
<div class=« center>
	<button class=« bouton »></button>
</div>
```

## Cadre 
HTML

```
	<div class=« cadre »>
		<div>…</div>
		ou <un élément>
	</div
```

CSS 

```.cadre {
  border:3px solid black;
  padding:15px;
  font-size:22px;
}
	
```

## Justifié 
HTML

```
	<p class=« justify_ »></p>
```

CSS 

```.justify {
  text-align:justify;
}
	
```

