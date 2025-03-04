// Global tilstand for at holde styr på, hvilken variant der er aktiv (Pink eller Green)
let currentVariant = "green"; // Starter med "green"

// Funktion til at ændre informationerne til Zero Pink
function changeToPink() {
    if (currentVariant === "green") { // Tjekker om den nuværende variant er grøn
        // Opdater billede og tekst for Zero Pink
        document.getElementById("billedeZeroGreen").src = "images/pink.png"; // Skift billede
        document.querySelector("h2").innerText = "ZERO PINK"; // Skift overskrift
        document.getElementById("tekstBeskrivelse").innerText = "MED GRAPE. FRISK OG FRUGTIG"; // Skift beskrivelse
        document.getElementById("tekstNaeringsindhold").innerText = "Kalorier og Næringsindhold per 100ml:"; // Skift næringsindhold overskrift

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
            Zero Pink er en forfriskende og sprudlende alkoholfri øl med en perfekt balance mellem syrlig grape og let bitterhed fra humlen. Med sin frugtige karakter og livlige smagsprofil er den det oplagte valg til
                både solrige dage, spontane aftener og hyggelige sammenkomster.<br><br>Den friske side: En let og
                perlende øl med friske noter af grape, der giver en sprød og opkvikkende smagsoplevelse.
                <br><br>Den aromatiske side: En velafstemt kombination af nøje udvalgte humler og let maltprofil, der
                sikrer dybde og balance i hver tår.<br><br>  `;

        // Skift variantens tilstand til Pink
        currentVariant = "pink";

        // Aktiver funktionen til at ændre tilbage til Zero Green
        document.querySelector(".boksTilHverVariantGreen").style.display = "flex"; // Gør ZeroBuzz Green containeren synlig

        // Skjul ZeroBuzz Pink containeren 
        document.querySelector(".boksTilHverVariantPink").style.display = "none";

        // Rul til toppen af siden når funktionen er kørt
        window.scrollTo(0, 0);

    }
}

// Funktion til at ændre informationerne tilbage til Zero Green
function changeToGreen() {
    if (currentVariant === "pink") { // Tjekker om den nuværende variant er Pink
        // Opdater billede og tekst for Zero Green
        document.getElementById("billedeZeroGreen").src = "images/green.png"; // Skift billede
        document.querySelector("h2").innerText = "ZERO GREEN"; // Skift overskrift
        document.getElementById("tekstBeskrivelse").innerText = "MED LIME. FRISK OG FRUGTIG"; // Skift beskrivelse
        document.getElementById("tekstNaeringsindhold").innerText = "Kalorier og Næringsindhold per 100ml:"; // Skift næringsindhold overskrift

        // Skift indholdet i tabellen (tilføj din ønskede indhold for Zero Green)
        let table = document.querySelector(".kolonneTabel");
        table.innerHTML = `
            <tr>
                <td class="tekstIndholdGreen">Kalorier</td>
                <td class="tekstIndhold">185kJ - 45kcal</td>
            </tr>
            <tr>
                <td class="tekstIndholdGreen">Fedt</td>
                <td class="tekstIndhold">0.1g</td>
            </tr>
            <tr>
                <td class="tekstIndholdGreen">Mættede fedtsyrer</td>
                <td class="tekstIndhold">0.0g</td>
            </tr>
            <tr>
                <td class="tekstIndholdGreen">Kulhydrat</td>
                <td class="tekstIndhold">3.0g</td>
            </tr>
            <tr>
                <td class="tekstIndholdGreen">Sukkerarter</td>
                <td class="tekstIndhold">0.3g</td>
            </tr>
            <tr>
                <td class="tekstIndholdGreen">Protein</td>
                <td class="tekstIndhold">0.5g</td>
            </tr>
            <tr>
                <td class="tekstIndholdGreen">Salt</td>
                <td class="tekstIndhold">&lt;0,01g</td>
            </tr>
        `;

        // Skift beskrivelsen af Zero Green
        document.querySelector(".tekstBeskrivelseZeroGreen").innerHTML = `
            Zero Green er en forfriskende og sprudlende alkoholfri øl med en
                perfekt balance mellem syrlig lime og
                let bitterhed fra humlen. Med sin frugtige karakter og livlige smagsprofil er den det oplagte valg til
                både solrige dage, spontane aftener og hyggelige sammenkomster.<br><br>Den friske side: En let og
                perlende øl med friske noter af lime, der giver en sprød og opkvikkende smagsoplevelse.
                <br><br>Den aromatiske side: En velafstemt kombination af nøje udvalgte humler og let maltprofil, der
                sikrer dybde og balance i hver tår.<br><br>
        `;

        // Skift variantens tilstand til Green
        currentVariant = "green";

        // Skjul ZeroBuzz Green containeren igen
        document.querySelector(".boksTilHverVariantGreen").style.display = "none";

        // Skjul ZeroBuzz Pink containeren igen
        document.querySelector(".boksTilHverVariantPink").style.display = "flex";


        // Rul til toppen af siden når funktionen er kørt
        window.scrollTo(0, 0);
    }
}

// Tilføj event listeners
document.querySelector(".boksTilHverVariantPink").addEventListener("click", changeToPink);
document.querySelector(".boksTilHverVariantGreen").addEventListener("click", changeToGreen);