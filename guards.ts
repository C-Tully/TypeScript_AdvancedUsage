// type FileSource = {
//   path: string;
// };
// const fileSource: FileSource = {
//   path: "some/path/to/file.csv",
// };

// type DBSource = { connectionUrl: string };

// const dbSource: DBSource = {
//   connectionUrl: "some-connection-url",
// };

// //Note the | usage here.
// type Source = FileSource | DBSource;

// function loadData(source: Source) {
//   // Open + read file OR reach out to db server
//   // We need to add a typeguard here, to ensure the proper
//   //piece of code is executed depending on the value we received as the
//   //source param.
//   //Because we know what the parm type is, we want to use this smaller
//   //check here because source will always be an object, the typeguard
//   // is just meant to check the source prop,
//   if ("path" in source) {
//     //source.path => //use this to open the file...
//   }
//   //else source.connectionUrl -> reachout to db..
//   //note that this typeguard works with TS and understands
//   //what's going on.
// }
