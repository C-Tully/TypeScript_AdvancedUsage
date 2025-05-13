// type DataStore = {
//     //Index type feature
//     //the "prop" becomes a placeholder for any 
//     //property from the developer whom later uses this object type
//     //aka a dynamic property
//     [prop: string]: boolean | number; // {} | CLASS
// };


// let store: DataStore = {};


// //TS normally wouldn't allow this dynamic prop additions
// //but due to the dynamic prop we've added, we can.
// //it is limited to what we set as acceptable.
// store.id = 5;
// store.isOpen = false;



// // Constant Types
// // "as const" is a TS feature
// // tells TS to be narrow when applying a type.
// // note "readonly" now.
// let roles = ['admin', 'guest', 'editor'] as const;

// //return is 'admin'
// const firstRole = roles[0];