document.getElementById('jokeButton').addEventListener('click', async () => {
    try {
        const response = await fetch('https://simplontestbackend.onrender.com/api/v1/blagues/random');
        const joke = await response.json();
        document.getElementById('jokeText').innerText = joke.text;
    } catch (error) {
        document.getElementById('jokeText').innerText = "Erreur lors du chargement de la blague.";
        console.error("Erreur:", error);
    }
});
