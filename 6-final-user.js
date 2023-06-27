import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

export function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName); // Call signUpUser function
  const photoPromise = uploadPhoto(fileName); // Call uploadPhoto function

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      const fulfilledPromises = results.filter((result) => result.status === 'fulfilled');
      const rejectedPromises = results.filter((result) => result.status === 'rejected');

      const fulfilledValues = fulfilledPromises.map((promise) => promise.value);
      const rejectedReasons = rejectedPromises.map((promise) => promise.reason);

      return [fulfilledValues, rejectedReasons];
    });
}
