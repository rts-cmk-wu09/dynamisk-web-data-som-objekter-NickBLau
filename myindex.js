document.querySelector("#data").innerHTML = 
`<section>
<h1> Min liste af ting

<h2 class="text_align_center"> sidst spillede genre: ${minListe.spil} </h2>
<p> rogutelites: ${minListe.rogueLites.hades.title} , ${minListe.rogueLites.rogueLegacy.title}  </p>

<section class="roguelite"> 

<h3> roguelite: ${minListe.rogueLites.hades.title} </h3>
<p> dato: ${minListe.rogueLites.hades.dato} </p>
<p> score: ${minListe.rogueLites.hades.score} </p>
<p> pris: ${minListe.rogueLites.hades.pris} </p>
<p> publisher: ${minListe.rogueLites.hades.publisher} </p>
<p> store: ${minListe.rogueLites.hades.store} </p>

</section>

<section class="roguelite"> 

<h3> roguelite: ${minListe.rogueLites.rogueLegacy.title} </h3>
<p> dato: ${minListe.rogueLites.rogueLegacy.dato} </p>
<p> score: ${minListe.rogueLites.rogueLegacy.score} </p>
<p> pris: ${minListe.rogueLites.rogueLegacy.pris} </p>
<p> publisher: ${minListe.rogueLites.rogueLegacy.publisher} </p>
<p> store: ${minListe.rogueLites.rogueLegacy.store} </p>

</section>


<section class="sandbox"> 

<h3> sandbox: ${minListe.sandbox.minecraft.title} </h3>
<p> dato: ${minListe.sandbox.minecraft.dato} </p>
<p> score: ${minListe.sandbox.minecraft.score} </p>
<p>fps pris: ${minListe.sandbox.minecraft.pris} </p>
<p> publisher: ${minListe.sandbox.minecraft.publisher} </p>
<p> store: ${minListe.sandbox.minecraft.store} </p>

</section>


<section class="sandbox"> 

<h3> sandbox: ${minListe.sandbox.terraria.title} </h3>
<p> dato: ${minListe.sandbox.terraria.dato} </p>
<p> score: ${minListe.sandbox.terraria.score} </p>
<p> pris: ${minListe.sandbox.terraria.pris} </p>
<p> publisher: ${minListe.sandbox.terraria.publisher} </p>
<p> store: ${minListe.sandbox.terraria.store} </p>
</section>
<section class="fps"> 

<h3> fps: ${minListe.fps.doom.title} </h3>
<p> dato: ${minListe.fps.doom.dato} </p>
<p> score: ${minListe.fps.doom.score} </p>
<p> pris: ${minListe.fps.doom.pris} </p>
<p> publisher: ${minListe.fps.doom.publisher} </p>
<p> store: ${minListe.fps.doom.store} </p>

</section>

<section class="fps"> 


<h3> fps: ${minListe.fps.superhot.title} </h3>
<p> dato: ${minListe.fps.superhot.dato} </p>
<p> score: ${minListe.fps.superhot.score} </p>
<p> pris: ${minListe.fps.superhot.pris} </p>
<p> publisher: ${minListe.fps.superhot.publisher} </p>
<p> store: ${minListe.fps.superhot.store} </p>
</section>

<section class="deckbuilder"> 


<h3> deckbuilder: ${minListe.deckBuilder.Slay_the_sprire.title} </h3>
<p> dato: ${minListe.deckBuilder.Slay_the_sprire.dato} </p>
<p> score: ${minListe.deckBuilder.Slay_the_sprire.score} </p>
<p> pris: ${minListe.deckBuilder.Slay_the_sprire.pris} </p>
<p> publisher: ${minListe.deckBuilder.Slay_the_sprire.publisher} </p>
<p> store: ${minListe.deckBuilder.Slay_the_sprire.store} </p>
</section>

<section class="Survivor"> 


<h3> Survivor: ${minListe.Survivor.vampire_survivor.title} </h3>
<p> dato: ${minListe.Survivor.vampire_survivor.dato} </p>
<p> score: ${minListe.Survivor.vampire_survivor.score} </p>
<p> pris: ${minListe.Survivor.vampire_survivor.pris} </p>
<p> publisher: ${minListe.Survivor.vampire_survivor.publisher} </p>
<p> store: ${minListe.Survivor.vampire_survivor.store} </p>
</section>

<section class="Survivor"> 


<h3> Survivor: ${minListe.Survivor.holocure.title} </h3>
<p> dato: ${minListe.Survivor.holocure.dato} </p>
<p> score: ${minListe.Survivor.holocure.score} </p>
<p> pris: ${minListe.Survivor.holocure.pris} </p>
<p> publisher: ${minListe.Survivor.holocure.publisher} </p>
<p> store: ${minListe.Survivor.holocure.store} </p>
</section>




<h2> sidst set tv: ${minListe.tv} </h2>
</section>`