function hasProperty(obj, propertyName){
    console.log(obj.hasOwnProperty(propertyName));
    }
    const dataObject = {name: 'Alice', age: 25}
    hasProperty(dataObject,'age')
    hasProperty(dataObject,'name')
    hasProperty(dataObject,'email')