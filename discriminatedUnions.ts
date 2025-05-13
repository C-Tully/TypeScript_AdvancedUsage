// //Discriminated Union Pattern:
// //
// // See guards.ts first then this file second.
// //in this case we're adding a type property
// //so that we know going forward the type instead of checking
// // for a "path"
// //this way we're future proofing it a bit better.
// type FileSource = {
//   type: "file";
//   path: string;
// };

// const fileSource: FileSource = {
//   type: "file",
//   path: "some/path/to/file.csv",
// };

// type DBSource = { type: "db"; connectionUrl: string };

// const dbSource: DBSource = {
//   type: "db",
//   connectionUrl: "some-connection-url",
// };

// type Source = FileSource | DBSource;

// function loadData(source: Source) {
//   if (source.type === "file") {
//     return source.path;
//     // if ("path" in source) {
//     //source.path => //use this to open the file...
//   }
// }
