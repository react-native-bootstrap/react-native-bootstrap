---
id: alert
title: Alert
---
import useBaseUrl from '@docusaurus/useBaseUrl'

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

### Examples

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight `variant`s.

<img src={useBaseUrl("img/alert/variants.png")} width="360px" title="Alert Type" />


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

### Heading

Alerts can also contain heading.

<img src={useBaseUrl("img/alert/heading.png")} width="360px" title="Alert Heading" />

```jsx
<Alert
  title="Heading"
  message="This is a primary alert—check it out!"
/>
```

### Dismissing

Add the `dismissible` prop to add a functioning dismiss button to the Alert.

<img src={useBaseUrl("img/alert/dismissible.png")} width="360px" title="Alert with dismiss icon" />

```jsx
const [alert, showAlert] = useState(true);

return (
  {alert ? (
    <Alert
      dismissible
      title="Dismissible Alert"
      containerStyle={{ marginBottom: 8 }}
      onClose={() => showAlert(false)}
      message="This is a primary alert—check it out!"
    />
  ) : (
    <Button title="Show Alert" onPress={() => showAlert(true)} />
  )}
)
```

### Props

| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
| variant | `primary` \|<br/> `secondary` \|<br/>  `success` \|<br/>  `danger` \|<br/>  `warning` \|<br/>  `info` \|<br/>  `light` \|<br/>  `dark` | The Alert visual variant | ❌ | `primary` |
| message | string | Message to be displayed in Alert | ✔️ | - |
| title | string | Title to be displayed in Alert | ❌ | - |
| dismissible | boolean | Renders a properly aligned dismiss button, as well as adding extra horizontal padding to the Alert | ❌ | false |
| onClose | function | Callback fired when alert is closed | ❌ | - |
| containerStyle | [View style (object)](https://reactnative.dev/docs/view-style-props) | Style for the container which host the text message | ❌ | {} |
| messageStyle | [Text style (object)](https://reactnative.dev/docs/text-style-props) | Text style for message | ❌ | {} |
| titleStyle | [Text style (object)](https://reactnative.dev/docs/text-style-props) | Text style for title | ❌ | {} |
