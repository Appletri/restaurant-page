This is a <a href="https://Appletri.github.io/restaurant-page/dist" rel="nofollow" target="_blank">restaurant page</a> for the Odin Project.
# Restaurant Page
![](https://github.com/Appletri/Appletri/blob/main/assets/restaurant.gif)

## Links
- [Try Restaurant Page here!](https://appletri.github.io/restaurant-page/dist/)

- [Link to the Assignment](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page)

## About
Designed a starbucks page with a home, menu, and rewards page.

I wanted to try populating the menu page with many items in an easy way.
The code for the menu items:
```
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
```
It calls for the location of where to append the menu icons, the array of strings for the labels, and the array of links for the pictures.
With this small code, I was able to fill the menu page with the starbucks menu items.
