function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}
// Enums
define("ClientType_Screen", 0);
define("ClientType_Mobile", 1);
