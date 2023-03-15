/**
 * Récupération des données du fichier json
 * @returns un tableau avec les données de tous les appartements
 */

export async function getDatasLogements() {
    try {
        const fetchJson = await fetch('/logements.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        const backFetch = await fetchJson.json();
        // console.log("réponse de backFetch", backFetch);
        return backFetch;
    } catch (erreur) {
        console.log(erreur);
    }
}