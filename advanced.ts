type DataStore = {    
    [prop: string]:  boolean | number;
};

//Remember the record type? 
                        //key, value
// let someObj: Record<string, number | boolean>;

let store: DataStore = {};

store.id = 5;
store.isOpen = false;

 let roles = ['admin','guest','editor'] as const; 
 const firstRole = roles[0];

 //satisfies keyword
 //

//  const dataEntries: Record<string, number> = {
//     entry1: 0.51,
//     entry2: -1.23,
//  };
//becomes...
const dataEntries = {
    entry1: 0.51,
    entry2: -1.23,
} satisfies Record<string, number>;

 //note that entry3 doesn't exist
 // due to dataEntries being a record type with a string,
 // TS does not check if it actually exists
 // so what we might want to do is write some type safe code 
 // to ensure a narrow type as possible, this is where the satisfies comes in
 // to help

//  dataEntries.entry3;

//Note that once the satisfies is added, TS changes
// the access to the .entry3 
// its good to help enforce a specific type and help
// to get the best type inference in the end.
// Take a look at the ReactRouter documentation which uses (used?)
// in the app/routes.ts they suggest using satisfies RouteConfig
// to ensure the correct array type. 
// This can help to create a more streamlined debugging process at least 
// when we want type safety.
