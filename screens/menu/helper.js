import React from 'react'

var menu = []

export function returnMenuItem(){
    return menu
}

export function addSectionItems(date, title, item3, item4){
    let obj = {date:date, title:title, data:[[item3, item4]]}
    var found = menu.some(function (el) {
        return el.title === title;
    });
    if (!found) { 
        menu.push(obj); 
    }else{
        for(var i = 0; i<menu.length; i++){
            if(found){
                if(menu[i].title === title){
                    menu[i].data.push([item3, item4]);
                }
            }
        } 
    }
}

