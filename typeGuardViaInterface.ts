//Typeguards Via Interface TODO
//instanceof is another way to determine
//which class we're using.

class User {
  constructor(public name: string) {}

  join() {}
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {}
}

const user = new User("Chris");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
  // .join() OR .scan()
  if (entity instanceof User) {
    entity.join();
    return;
  }
  //by using the return we can then use the other class
  entity.scan();
}
