---
title: "Test"
date: "2015-05-06T23:46:37.121Z"
summary: "Test prismjs plugin..."
---

```jsx{numberLines: false}
class FlavorForm extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }
}
```

