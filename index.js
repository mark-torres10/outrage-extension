const subredditNameClass = "_2yYPPW47QxD4lFQTKpfpLQ";
const toggleMessage = "[this comment has been flagged for having outrage]";


function createDropdownToggle() {
    const dropdownDiv = document.createElement('div');
    dropdownDiv.className = 'dropdown';

    const paragraph = document.createElement('p');
    paragraph.className = 'dropdown-toggle-text not-expanded';
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
        dropdownToggle.className = 'dropdown-toggle';

        /*
        dropdownToggle.addEventListener('click', (event) => {
            if (event.currentTarget.classList.contains('expanded')) {
                console.log("Toggling expanded to not-expanded");
                event.currentTarget.classList.remove('expanded');
                event.currentTarget.classList.add('not-expanded');
            }
            else if (event.currentTarget.classList.contains('not-expanded')) {
                console.log("Toggling not-expanded to expanded");
                event.currentTarget.classList.remove('not-expanded');
                event.currentTarget.classList.add('expanded');
            }
            else {
                console.log('Neither expanded nor not-expanded are in toggle list');
            }
        });
        */
        
        wrapperDiv.appendChild(dropdownToggle);
        wrapperDiv.appendChild(originalDiv.cloneNode(true));

        wrapperDiv.addEventListener('click', (event) => {
            if(event.currentTarget.classList.contains('expanded')) {
                console.log("Toggling expanded to not-expanded");
                event.currentTarget.classList.remove('expanded');
                event.currentTarget.classList.add('not-expanded');
            } else if (event.currentTarget.classList.contains('not-expanded')) {
                console.log("Toggling not-expanded to expanded");
                event.currentTarget.classList.remove('not-expanded');
                event.currentTarget.classList.add('expanded');
            } else {
                console.log('Neither expanded nor not-expanded are in toggle list');
            }
        });
        
        originalDiv.parentNode.replaceChild(wrapperDiv, originalDiv);
    }
}

window.addEventListener('load', makeSubredditNameGrey);
//window.addEventListener('load', classifySubredditThreads);
window.addEventListener('load', createExpandableDiv);