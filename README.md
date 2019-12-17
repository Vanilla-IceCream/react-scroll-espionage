# React Scroll Espionage

Scrollspy component for React.

## Installation and Usage

```bash
$ npm i react-scroll-espionage -S
# or
$ yarn add react-scroll-espionage
```

```js
// for commonjs
const ScrollEspionage = require('react-scroll-espionage');

// for es modules
import ScrollEspionage from 'react-scroll-espionage';
```

## Getting Started

[![Edit react-scroll-espionage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-scroll-espionage-6bw7m?fontsize=14&hidenavigation=1&theme=dark)

```js
<ScrollEspionage
  nav={({ current, positions }) => (
    <menu>
      <div
        className={current === 0 ? 'is-active' : ''}
        onClick={() => window.scrollTo(0, positions[0])}
      >
        Section 1
      </div>

      <div
        className={current === 1 ? 'is-active' : ''}
        onClick={() => window.scrollTo(0, positions[1])}
      >
        Section 2
      </div>

      <div
        className={current === 2 ? 'is-active' : ''}
        onClick={() => window.scrollTo(0, positions[2])}
      >
        Section 3
      </div>
    </menu>
  )}
  selector="section[data-scrollspy]"
  threshold={64}
>
  <section id="section-1" data-scrollspy>
    <h1>Section 1</h1>
  </section>

  <section id="section-2" data-scrollspy>
    <h1>Section 2</h1>
  </section>

  <section id="section-3" data-scrollspy>
    <h1>Section 3</h1>
  </section>
</ScrollEspionage>
```

## API

| Name        | Type         | Default            | Description                                                                          |
|-------------|--------------|--------------------|--------------------------------------------------------------------------------------|
| `nav`       | `React.Node` | `null`             | Render prop that returns `current` index in view and all `positions` of items.       |
| `selector`  | `string`     | `[data-scrollspy]` | Any CSS selector to specify which elements in `children` to attach the scrollspy to. |
| `threshold` | `number`     | `0`                | Trigger point at which `current` watches.                                            |
