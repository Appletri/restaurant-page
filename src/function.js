export {addText, addContainer, addIconLabel, addStep};

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
        element.id = arrText[i];
        parent.appendChild(element);
    }
};

function addStep(num, picture, titleArr, textArr, parent, arrPic, picCSSName){
    for (let i=0; i<num; i++){
        const element = document.createElement('div');
        if (picture === true){
            const pic = new Image();
            pic.src = arrPic[i];
            pic.className = picCSSName;
            element.appendChild(pic);
        }
        else {
            const num = document.createElement('p');
            num.textContent = i+1;
            num.className = 'numberStepIcon'
            element.appendChild(num);
        }
        const textbox = document.createElement('div');
        textbox.className = 'textbox';
        const text = document.createElement('p');
        const subText = document.createElement('p');
        text.textContent = titleArr[i];
        subText.textContent = textArr[i];
        text.className = 'stepTitle';
        textbox.appendChild(text);
        textbox.appendChild(subText);
        element.className = `hidden${i}`
        element.appendChild(textbox);
        parent.appendChild(element);        
    }
  
};