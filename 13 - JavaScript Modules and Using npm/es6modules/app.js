import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key } from './src/config';

import User, { createURL, gravatar } from './src/user';

const george = new User('George Smith-Sweeper', 'george.smsweeper@gmail.com', 'george-smith-sweeper.com');
const profile = createURL(george.name);
const image = gravatar(george.email);

console.log(profile, image);
