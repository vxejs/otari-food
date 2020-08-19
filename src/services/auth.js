import api from './axios-api';

export function getCodeFromPhoneNumberService({ phone, device_id }) {
  return api.client
    .post('https://client.apis.stage.faem.pro/api/v2/auth/new', {
      device_id,
      phone
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
}

export function checkToEqualVerificationCodeService({ code, device_id }) {
  console.log(code, device_id);
  return api.client
    .post('https://client.apis.stage.faem.pro/api/v2/auth/verification', {
      device_id,
      code
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
}

export function logoutService() {
  api.token = null;
  api.refresh_token = null;
}
