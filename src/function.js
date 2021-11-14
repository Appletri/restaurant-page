export {addText, addContainer};

function addText(num, cssName, parent ) {
    for (let i=1; i<=num; i++){
        const element = document.createElement('p');
        element.className = cssName + i;
        parent.appendChild(element);
    }
    
};

function addContainer(num, cssName, parent) {
    for (let i=1; i<=num; i++){
        const element = document.createElement('div');
        element.className = cssName + i;
        parent.appendChild(element);
    }

};