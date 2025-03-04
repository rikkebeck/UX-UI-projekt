// Variabel til at holde styr på, hvilken ZeroBuzz variant der er aktiv (Pink eller Green)
let currentVariant = "green"; // Starter med at "green" er aktiv

// Funktion til at ændre informationerne om til Zero Pink.
function changeToPink() {
    if (currentVariant === "green") { // funktionen tjekker om den nuværende variant er grøn når brugeren trykker
        
        // Her er de ændringer som funktionen laver
        document.getElementById("billedeZeroGreen").src = "images/pink.png"; // Skifter billede øverst på siden
        document.querySelector("h2").innerText = "ZERO PINK"; // Skifter overskriften
        document.getElementById("tekstBeskrivelse").innerText = "MED GRAPE. FRISK OG FRUGTIG"; // Skifter beskrivelsen

        // Skifter indholdet i tabellen + laver teksten til venstre pink istedet for grøn
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

        // Skifter beskrivelsen til Zero Pink's beskrivelse
        document.querySelector(".tekstBeskrivelseZeroGreen").innerHTML = `
            Zero Pink er en forfriskende og sprudlende alkoholfri øl med en perfekt balance mellem syrlig grape og let bitterhed fra humlen. Med sin frugtige karakter og livlige smagsprofil er den det oplagte valg til
                både solrige dage, spontane aftener og hyggelige sammenkomster.<br><br>Den friske side: En let og
                perlende øl med friske noter af grape, der giver en sprød og opkvikkende smagsoplevelse.
                <br><br>Den aromatiske side: En velafstemt kombination af nøje udvalgte humler og let maltprofil, der
                sikrer dybde og balance i hver tår.<br><br>  `;

        // Skifter variantens tilstand til Pink
        currentVariant = "pink";

        // nederst på siden under "De øvrige ZeroBuzz varianter" skal vi have den pinke byttet ud med grøn
        // Vi gør Green varianten synlig
        document.querySelector(".boksTilHverVariantGreen").style.display = "flex";

        // vi skjuler Pink varianten  
        document.querySelector(".boksTilHverVariantPink").style.display = "none";

        // Rul til toppen af siden når funktionen er kørt
        window.scrollTo(0, 0);

    }
}

// Funktion til at ændre informationerne tilbage til Zero Green (altså så man kan trykke på den grønne igen)
function changeToGreen() {
    if (currentVariant === "pink") { // Tjekker om den nuværende variant er Pink
        
        
        // Her er de ændringer som funktionen laver
        document.getElementById("billedeZeroGreen").src = "images/green.png"; // Skifter billede øverst på siden
        document.querySelector("h2").innerText = "ZERO GREEN"; // Skifter overskrift
        document.getElementById("tekstBeskrivelse").innerText = "MED LIME. FRISK OG FRUGTIG"; // Skifter beskrivelse

        // Skifter indholdet i tabellen + laver teksten til venstre grøn
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

        // Skifter beskrivelsen til Zero Green
        document.querySelector(".tekstBeskrivelseZeroGreen").innerHTML = `
            Zero Green er en forfriskende og sprudlende alkoholfri øl med en
                perfekt balance mellem syrlig lime og
                let bitterhed fra humlen. Med sin frugtige karakter og livlige smagsprofil er den det oplagte valg til
                både solrige dage, spontane aftener og hyggelige sammenkomster.<br><br>Den friske side: En let og
                perlende øl med friske noter af lime, der giver en sprød og opkvikkende smagsoplevelse.
                <br><br>Den aromatiske side: En velafstemt kombination af nøje udvalgte humler og let maltprofil, der
                sikrer dybde og balance i hver tår.<br><br>
        `;

        // Skifter variantens tilstand til Green
        currentVariant = "green";

        // Skjuler ZeroBuzz Green containeren igen
        document.querySelector(".boksTilHverVariantGreen").style.display = "none";

        // så man kan se og trykke på ZeroBuzz Pink igen
        document.querySelector(".boksTilHverVariantPink").style.display = "flex";

        // Rul til toppen af siden når funktionen er kørt
        window.scrollTo(0, 0);
    }
}

// Event listeners som reagerer når man trykker på dåserne nedest på siden
document.querySelector(".boksTilHverVariantPink").addEventListener("click", changeToPink);
document.querySelector(".boksTilHverVariantGreen").addEventListener("click", changeToGreen);