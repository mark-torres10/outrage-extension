const subredditNameClass = "_2yYPPW47QxD4lFQTKpfpLQ"

function makeSubredditNameGrey() {
    console.log("Running the extension!")
    const subredditName = document.querySelector('h1._2yYPPW47QxD4lFQTKpfpLQ');
    if (subredditName) {
        const originalText = subredditName.textContent;
        subredditName.textContent = `${originalText} (this is the subreddit)`;
        subredditName.style.color = 'grey';
    }
}

window.addEventListener('load', makeSubredditNameGrey);
