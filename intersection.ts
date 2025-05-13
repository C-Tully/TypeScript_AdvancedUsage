// type FileData = {
//   path: string;
//   content: string;
// };

// type DatabaseData = {
//   connectionUrl: string;
//   credentials: string;
// };

// type Status = {
//   isOpen: boolean;
//   errorMessage?: string;
// };

// //Creating a intersecting data type is done with the
// // & in this example, we are connecting the two.
// // its worth noting we could acheive this using interfaces
// // as well, using the "extends" key word as well which is an
// // alternative approach. Custom types though can be done as well.

// type AccessedFileData = FileData & Status;

// type AccessedDatabaseData = DatabaseData & Status;
