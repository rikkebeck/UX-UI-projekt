// Funktion til at ændre informationerne til Zero Pink
function changeToPink() {
    // Opdater billede og tekst for Zero Pink
    document.getElementById("billedeZeroGreen").src = "images/pink.png";  // Skift billede
    document.querySelector("h2").innerText = "ZERO PINK";  // Skift overskrift
    document.getElementById("tekstBeskrivelse").innerText = "MED GRAPE. FRISK OG FRUGTIG";  // Skift beskrivelse
    document.getElementById("tekstNaeringsindhold").innerText = "Kalorier og Næringsindhold per 100ml:";  // Skift næringsindhold overskrift

    // Skift indholdet i tabellen (tilføj din ønskede indhold for Zero Pink)
    let table = document.querySelector(".kolonneTabel");
    table.innerHTML = `
        <tr>
            <td class="tekstIndholdPink">Kalorier</td>
            <td class="tekstIndhold">200kJ - 50kcal</td>
        </tr>
        <tr>
            <td class="tekstIndholdPink">Fedt</td>
            <td class="tekstIndhold">0.2g</td>
        </tr>
        <tr>
            <td class="tekstIndholdPink">Mættede fedtsyrer</td>
            <td class="tekstIndhold">0.0g</td>
        </tr>
        <tr>
            <td class="tekstIndholdPink">Kulhydrat</td>
            <td class="tekstIndhold">3.5g</td>
        </tr>
        <tr>
            <td class="tekstIndholdPink">Sukkerarter</td>
            <td class="tekstIndhold">0.5g</td>
        </tr>
        <tr>
            <td class="tekstIndholdPink">Protein</td>
            <td class="tekstIndhold">0.6g</td>
        </tr>
        <tr>
            <td class="tekstIndholdPink">Salt</td>
            <td class="tekstIndhold">&lt;0,01g</td>
        </tr>
    `;

    // Skift beskrivelsen af Zero Pink
    document.querySelector(".tekstBeskrivelseZeroGreen").innerHTML = `
        Zero Pink er en forfriskende og sprudlende alkoholfri øl med en perfekt balance mellem syrlig grape og let bitterhed fra humlen. Den friske side: En let og perlende øl med friske noter af grape, der giver en sprød og opkvikkende smagsoplevelse.
        <br><br>Den aromatiske side: En velafstemt kombination af nøje udvalgte humler og let maltprofil, der sikrer dybde og balance i hver tår.
    `;

    // Rul til toppen af siden
    window.scrollTo(0, 0);


    // Skift Zero Pink ud med Zero Green nede i containeren med øvrige varianter
document.getElementsByClassName("billedeVarianter")[0].src = "images/green.png";  // Skift billede
document.querySelector(".boksTilHverVariant .billedeVarianter + h4").innerText = "ZERO GREEN";  // Skift overskrift

document.querySelector(".tekstSmag").innerText = "MED LIME.";
document.querySelector(".boksTilHverVariant .tekstSmag h5").innerText = "FRISK OG FRUGTIG";

}
