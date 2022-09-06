// import Joi from 'joi';

// export const emailValidator = (email) => {
//   return !(
//     'error' in
//     Joi.string()
//       .email({ tlds: { allow: false } })
//       .validate(email)
//   );
// };

// export const nicknameValidator = (nickname) => {
//   return !(
//     'error' in
//     Joi.string()
//       .pattern(/^[a-zA-Z0-9가-힣]*$/)
//       .max(12)
//       .validate(nickname)
//   );
// };
