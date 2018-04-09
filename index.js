import logger from './logger.js';
import catcher from './catcher.js';
import normalizer from './normalizer.js';

const request = [fetch, logger, normalizer, catcher].reduce((result, fn) => {
    if (typeof fn === 'function') {
        return fn(result);
    }
    return result;
}, 'https://swapi.co/api/people/1/');

request
    .then(films => {
        document.body.innerHTML = Array.isArray(films)
            ? `<ul>${films.map(film => `<li>${film}</li>`).join('')}</ul>`
            : 'Not work';
    })
    .catch(err => {
        document.body.innerHTML = err;
    });
