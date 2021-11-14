export {addText, addContainer, addIconLabel};

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

function addIconLabel(num, cssName, parent, arrText){
    for (let i=0; i<num; i++){        
        const element = document.createElement('div');
        // const drink = new Image();
        // drink.src = arrPic[i];
        // element.appendChild(drink);
        const text = document.createElement('p');
        text.textContent = arrText[i];
        element.appendChild(text);
        element.className = cssName + i;
        parent.appendChild(element);
    }
}