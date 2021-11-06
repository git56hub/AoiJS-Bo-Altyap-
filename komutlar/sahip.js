//Bu komutun ne işe yaradığını öğrenmek için readme.md dosyasına gözat
const config = require("../config");
module.exports = {
  name: "sahip",
  code: `
Merhaba Sahibim.
$onlyForIDs[${config.sahip};Bu komutu sadece sahibim kullanabilir.]
`
}