const argon2 = require('argon2');
const passwordValidator = require('password-validator');
async function hash(password = 'sss') {
  const hash = await argon2.hash(password, { hashLength: 40 });
  return (hash);
};
async function compare(hash, password) {
  try {
    if (await argon2.verify(hash, password)) {
      // password match
    } else {
      // password did not match
    }
  } catch (err) {
    // internal failure
  }
};
function validPassword(password) {
  const schema = new passwordValidator();
  schema
    .is().min(12)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits(2)
    .has().not().spaces();

    return schema.validate(password)
}
module.exports = {
  hash,
  compare,
  validPassword
}