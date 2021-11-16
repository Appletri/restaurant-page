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

function addIconLabel(parent, arrText, arrPic){
    for (let i=0; i<arrText.length; i++){        
        const element = document.createElement('div');
        function addDivForImg (){
            const imgMask = document.createElement('div');
            const drink = new Image();
            drink.src = arrPic[i];
            imgMask.className = 'imgMask'
            imgMask.appendChild(drink);
            element.appendChild(imgMask);
        }
        addDivForImg();
        const text = document.createElement('p');
        text.textContent = arrText[i];
        element.appendChild(text);
        element.className = `menuIcon`;
        parent.appendChild(element);
    }
};