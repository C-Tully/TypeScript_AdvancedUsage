// type FileSource = {
//     type: 'file',
//     path: string;
// };

// const fileSource: FileSource = {
//     type:'file',
//     path: "some/path/to/file.csv",
// };

// type DBSource = { type:'db', connectionUrl: string };

// const dbSource: DBSource = {
//     type:'db',
//   connectionUrl: "some-connection-url",
// };

// type Source = FileSource | DBSource;

// //Note the return type is a predicate
// // this is a prefered type guard for TS. 
// // Similar to how I was already doing it...
// function isFile(source: Source) {
//     return source.type === 'file';
// }

// function loadData(source: Source) {

//   if (source.type === 'file') {
//     return;
//   }
// }

// class User {
//     constructor(public name: string) { }

//     join() { }
// }

// class Admin {
//     constructor(permissions: string[]) { }

//     scan() { }
// }

// const user = new User("Chris");
// const admin = new Admin(["ban", "restore"]);

// type Entity = User | Admin;

// function init(entity: Entity) {    
//     if (entity instanceof User) {
//         entity.join();
//         return;
//     }
    
//     entity.scan();
// }
  