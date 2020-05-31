---
id: installation
title: Installation
---

Open a Terminal in your project's folder and run:

#### Using `yarn`

```sh
yarn add react-native-bootstrap
```

#### Using `npm`

```sh
npm install react-native-bootstrap
```

## Using React Native Bootstrap

Import components & start using them.

```jsx
import { Alert } from 'react-native-elements';

const MyApp = () => {
  return (
    <View>
      <Alert message="Hey! I'm an Alert" />
    </View>
  );
};
```