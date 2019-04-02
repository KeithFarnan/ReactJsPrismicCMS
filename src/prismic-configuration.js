export default {

  apiEndpoint: 'https://react-test-test.prismic.io/api/v2',

  linkResolver(doc) {
    if (doc.type === 'document') return `/document/${doc.uid}`;
    return '/';
  },
};
