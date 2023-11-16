const subredditNameClass = "_2yYPPW47QxD4lFQTKpfpLQ"

async function getOutrageClassification(text) {
    try {
        const response = await fetch(
            `http://localhost:5000/api/classify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({text: text}),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`error: ${error}`);
    }
}


function makeSubredditNameGrey() {
    console.log("Running the extension!")
    const subredditName = document.querySelector('h1._2yYPPW47QxD4lFQTKpfpLQ');
    if (subredditName) {
        const originalText = subredditName.textContent;
        subredditName.textContent = `${originalText} (this is the subreddit)`;
        subredditName.style.color = 'grey';
    }
}

function classifySubredditThreads() {
    const pElements = document.querySelectorAll('div._292iotee39Lmt0MkQZ2hPV.RichTextJSON-root p');
    pElements.forEach(async (pElement) => {
        const text = pElement.textContent;
        //const result = await getOutrageClassification(text);
        const result = 0;
        pElement.textContent += ` this text has ${result.class == 0 ? 'no' : ''} outrage, prob = ${result.prob}, label = ${result.class}`;
        pElement.style.color = 'grey';
    });
}

function createDropdownToggle() {
    const dropdownDiv = document.createElement('div');
    dropdownDiv.className = 'dropdown';

    const paragraph = document.createElement('p');
    paragraph.className = 'dropdown-toggle-text';
    const span = document.createElement('span');
    span.textContent = '▶ ';
    const text = document.createTextNode('Click here to expand the toggle.');
    paragraph.appendChild(span);
    paragraph.appendChild(text);

    dropdownDiv.appendChild(paragraph);
    return dropdownDiv;
}

function createExpandableDiv() {
    // converts thread divs into expandable divs
    console.log("Created expandable div...");
    const originalDiv = document.querySelector('div._292iotee39Lmt0MkQZ2hPV.RichTextJSON-root');
    if (originalDiv) {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'expandable-div not-expanded';
        
        const dropdownToggle = createDropdownToggle();
        dropdownToggle.className = 'dropdown-toggle not-expanded';
        dropdownToggle.addEventListener('click', toggleTarget);
        
        wrapperDiv.appendChild(dropdownToggle);
        wrapperDiv.appendChild(originalDiv.cloneNode(true));
        
        originalDiv.parentNode.replaceChild(wrapperDiv, originalDiv);
    }
}

function toggleTarget(event) {
    // expand and toggle the target
    const target = event.currentTarget;
    if ('expanded' in target.classList) {
        console.log("Toggling expanded to not-expanded");
        target.classList.remove('expanded');
        target.classList.add('not-expanded');
    } else {
        console.log("Toggling not-expanded to expanded");
        target.classList.remove('not-expanded');
        target.classList.add('expanded');
    }
}

/*
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('expandable-div')) {
        toggleExpandableDiv(event);
    }
});
*/
window.addEventListener('load', makeSubredditNameGrey);
window.addEventListener('load', classifySubredditThreads);
window.addEventListener('load', createExpandableDiv);