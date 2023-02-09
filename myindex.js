document.querySelector("#data").innerHTML = 
`<section>
<h1> Min liste af ting

<h2> sidst spillede genre: ${minListe.spil} </h2>
<p> rogutelites: ${minListe.rogueLites.hades.title} , ${minListe.rogueLites.andet.title}  </p>


<h3> roguelite: ${minListe.rogueLites.hades.title} </h3>
<p> sandbox: ${minListe.sandbox.minecraft.dato} </p>

<h2> sidst set tv: ${minListe.tv} </h2>
</section>`