const validation = (userName, password, cf_password) => {
  if (!userName || !password || !cf_password) {
    return 'All field required';
  }

  if (password !== cf_password) {
    return 'Passwords need to match';
  }
};

export default validation;
