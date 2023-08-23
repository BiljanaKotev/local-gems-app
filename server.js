const app = require('./app');
const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server listening on http://localhost:${PORT}`);
// });

const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

process.once('SIGUSR2', function () {
  server.close(function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

