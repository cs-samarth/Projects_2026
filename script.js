function formatName(firstName,lastName)
{
    return `${firstName} ${lastName}`
}

function getGreeting(timeOfDay){
    if(timeOfDay === 'morning'){
        return `Good ${timeOfDay}`
    }
    else if(timeOfDay === 'afternoon'){
        return `Good ${timeOfDay} `
    }
    else{
        return `Good ${timeOfDay}`
    }
}



function createGreeting(firstName,lastName,tod)
{
    return `${getGreeting(tod)}, ${formatName(firstName,lastName)}`
}


console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
















