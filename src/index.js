import {
  extractHost,
  extractPort,
  extractProtocol,
  extractQuery
} from './extractors';
import { isValidUrl } from './validators';

const getBaseProperties = ({ url, valid }) => ({ url, valid });

const getExtractedProperties = (url) => ({
  host: extractHost(url),
  hostname: `${extractHost(url)}:${extractPort(url)}`,
  port: extractPort(url),
  protocol: extractProtocol(url),
  query: extractQuery(url),
  ...getBaseProperties({ url, valid: true }),
});

export const queryParam = (url) => {
  if (!isValidUrl(url)) { return getBaseProperties({ url, valid: false }); }
  return getExtractedProperties(url);
};
