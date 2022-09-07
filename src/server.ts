import { App } from './app';

new App().server.listen(process.env.PORT || 8080, () =>
  // eslint-disable-next-line no-console
  console.log(
    '\n\n\n 😎 Server is running 😎 \n\n',
    '📝 http://localhost:8080/api-docs \n\n\n',
  ),
);
