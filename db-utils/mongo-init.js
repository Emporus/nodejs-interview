db.createUser({
  user: 'user',
  pwd: '12345678',
  roles: [
    {
      role: 'readWrite',
      db: 'market_analysis',
    },
  ],
});