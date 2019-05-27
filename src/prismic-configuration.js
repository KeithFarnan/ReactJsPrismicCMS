export default {

  apiEndpoint: 'https://react-test-test.prismic.io/api/v2',

  // -- Access token if the Prismic repository is not public
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  
  linkResolver(doc) {
    if (doc.type === 'page') return `/pages/${doc.uid}`;
    if (doc.type === 'pages') return `/pages/`;
    if (doc.type === 'document') return `/documents/${doc.uid}`;
    if (doc.type === 'documents') return `/documents`;
    return '/';
  },
};
