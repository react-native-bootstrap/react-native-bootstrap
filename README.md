<hr>
<p align="center">
  <b>Need help, if you want to contribute please mail sanjeevy133@protonmail.com or open issue</b>
</p>
<hr>

## React-Native-Bootstrap

> [Bootstrap](https://getbootstrap.com/) components built for [React Native](https://reactnative.dev/)

The idea behind is similar to [`react-bootstrap`](https://github.com/react-bootstrap/react-bootstrap), to write Bootstrap component for React Native. This is just the inception of the project, I haven't done anything like this, if you have knowledge and want to collaborate please help.

## Insllation

1. In your `package.json` add this line in `dependencies` section

    ```json
    "react-native-bootstrap" : "git+https://git@github.com/react-native-bootstrap/react-native-bootstrap.git"
    ```

2. In terminal, install dependencies by running

    ```bash
    npm install
    ```

## Alert Component

<div style="display:flex;" >
  <img  src=".github/screenshots/1.png" width="35%" >
</div>

```jsx
import { Alert } from 'react-native-bootstrap';
```

```jsx
[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert
    key={idx}
    variant={variant}
    containerStyle={{ marginBottom: 8 }}
    messageStyle={{ fontSize: 16 }}
    message={`This is a ${variant} alert—check it out!`}
  />
))
```

## Meanwhile please use

- [React Native Elements](https://github.com/react-native-elements/react-native-elements)

## Author

Sanjeev Yadav

[![Twitter Follow](https://img.shields.io/twitter/follow/alexakasanjeev.svg?style=social)](https://twitter.com/alexakasanjeev)

[![GitHub Follow](https://img.shields.io/github/followers/alexakasanjeev.svg?style=social&label=Follow)](https://github.com/alexakasanjeev)

## 🛡 License

This project is licensed under the GNU v3 Public License License - see the [LICENSE.md](LICENSE.md) file for details.
