function toggleChangelog(element) {
    // Verifica se l'utente ha cliccato sul bottone di download
    if (event.target.classList.contains('download-button')) {
        return; // Se sì, non espandere la barra
    }
    element.classList.toggle('expanded'); // Aggiungi/togli la classe expanded per mostrare il changelog
}
