```javascript
//Correct usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({"_id": ObjectId("someId")}, {"$inc": {"field": 1}});
//check if field exists and is a number before increment
db.collection('myCollection').findOne({"_id": ObjectId("someId")}).then(doc =>{
if(doc && typeof doc.field === 'number'){
db.collection('myCollection').updateOne({"_id": ObjectId("someId")}, {"$inc": {"field": 1}});
}else{
console.log("Field does not exist or is not a number");
}
})
```