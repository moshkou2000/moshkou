import { environment } from 'src/environments/environment';

export const DEFAULT_URL = {
  sample: 'https://api.github.com/search/issues', // TODO: it's just for dmeo
  logout: `${environment.base_url}auths/logout`,
  profile: `${environment.base_url}users/profile`,
  upload_single: `${environment.base_url}files/single`,
  upload_multiple: `${environment.base_url}files/multiple`,
};

export const TOKENLESS_URL = {
  login: `${environment.base_url}auths/login`,
  verify: `${environment.base_url}auths/verify`,
  register: `${environment.base_url}auths/register`,
  confirm: `${environment.base_url}auths/confirm`,
};
