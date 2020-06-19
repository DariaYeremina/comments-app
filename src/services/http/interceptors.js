export function onFulfilled(response) {
  return response;
}

export function onRejected(error) {
  return Promise.reject(error);
}
