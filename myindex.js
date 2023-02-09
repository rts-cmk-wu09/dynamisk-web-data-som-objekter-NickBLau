document.querySelector("#data").innerHTML = 
`<section>
<h1> Min liste af ting

<h2> sidst spillede genre: ${minListe.spil} </h2>
<p> rogutelites: ${minListe.rogueLites.hades.title} , ${minListe.rogueLites.rogueLegacy.title}  </p>

<p class="red"> heelllooo</p>

<h3> roguelite: ${minListe.rogueLites.hades.title} </h3>
<p> dato: ${minListe.rogueLites.hades.dato} </p>
<p> score: ${minListe.rogueLites.hades.score} </p>
<p> pris: ${minListe.rogueLites.hades.pris} </p>
<p> publisher: ${minListe.rogueLites.hades.publisher} </p>
<p> platform: ${minListe.rogueLites.hades.platform} </p>

<h3> roguelite: ${minListe.rogueLites.rogueLegacy.title} </h3>
<p> dato: ${minListe.rogueLites.rogueLegacy.dato} </p>
<p> score: ${minListe.rogueLites.rogueLegacy.score} </p>
<p> pris: ${minListe.rogueLites.rogueLegacy.pris} </p>
<p> publisher: ${minListe.rogueLites.rogueLegacy.publisher} </p>
<p> platform: ${minListe.rogueLites.rogueLegacy.platform} </p>


<h3> sandbox: ${minListe.sandbox.minecraft.title} </h3>
<p> sandbox: ${minListe.sandbox.minecraft.dato} </p>
<p> sandbox: ${minListe.sandbox.minecraft.score} </p>
<p> sandbox: ${minListe.sandbox.minecraft.pris} </p>
<p> sandbox: ${minListe.sandbox.minecraft.publisher} </p>
<p> sandbox: ${minListe.sandbox.minecraft.platform} </p>

<p> sandbox: ${minListe.sandbox.minecraft} </p>

<h2> sidst set tv: ${minListe.tv} </h2>
</section>`