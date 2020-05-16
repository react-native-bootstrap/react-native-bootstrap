<hr>
<p align="center">
  <b>Looking for contributors</b>
</p>
<hr>

<p align="center">
  <a href="https://react-native-elements.github.io/react-native-elements/">
    <img alt="react-native-elements" src=".github/logo/rnb.png" width="300">
  </a>
</p>

<p align="center">
  Cross Platform <a href="https://getbootstrap.com/">Bootstrap</a> components built for <a href="https://facebook.github.io/react-native/">React Native</a>
</p>


## React Native Bootstrap

The idea behind is similar to [`react-bootstrap`](https://github.com/react-bootstrap/react-bootstrap), to write Bootstrap component for React Native. The project is still in early phases, contributions are welcome.

## 📦 Table of Content

- [Getting Started](#getting-started)
- [Components](#components)
- [Demo App](#demo-app)

## <a name="getting-started"></a>🚀 Getting Started

1. Type below command to get install package from github

    ```bash
    npm install https://github.com/react-native-bootstrap/react-native-bootstrap.git
    ```

## <a name="components"></a>✨ Components

<details><summary>Alert</summary>

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
].map(variant => (
  <Alert
    variant={variant}
    containerStyle={{ marginBottom: 8 }}
    messageStyle={{ fontSize: 16 }}
    message={`This is a ${variant} alert—check it out!`}
  />
))
```

| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
| variant | `primary`,<br/> `secondary`,<br/>  `success`,<br/>  `danger`,<br/>  `warning`,<br/>  `info`,<br/>  `light`,<br/>  `dark` | The Alert visual variant | ❌ | `primary` |
| message | string | Message to be displayed in Alert | ✔️ | - |
| containerStyle | [View style (object)](https://reactnative.dev/docs/view-style-props) | Style for the container which host the text message | ❌ | {} |
| messageStyle | [Text style (object)](https://reactnative.dev/docs/text-style-props) | Text style for message | ❌ | {} |

</details>

## <a name="demo-app"></a>📱 Demo App

Checkout the official [React Native Bootstrap App](https://github.com/react-native-bootstrap/react-native-bootstrap-app) which uses all of the React Native Bootstrap components.

## Author

Sanjeev Yadav

[![Twitter Follow](https://img.shields.io/twitter/follow/alexakasanjeev.svg?style=social)](https://twitter.com/alexakasanjeev)

[![GitHub Follow](https://img.shields.io/github/followers/alexakasanjeev.svg?style=social&label=Follow)](https://github.com/alexakasanjeev)

## 🛡 License

This project is licensed under the GNU v3 Public License License - see the [LICENSE.md](LICENSE.md) file for details.
