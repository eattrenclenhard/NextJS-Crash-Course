// a layout specific for topics
import BreadCrumbs from "../../components/BreadCrumbs";

export default function TopicLayout({ children, params: { topicName } }) {
  // , params: { topicName }
  return (
    <>
      <BreadCrumbs topicName={topicName} />

      {/* would override what's in /src/app/topics/page.js if you navigate to a certain paths */}
      {children}
    </>
  );
}

// what does this kind of destructuring mean?
// {children, params:{varName}}
/* This is **nested destructuring** in JavaScript. The syntax:

```js
{ children, params: { varName } }
```

means you're extracting:

- `children` directly from the main object
- `varName` from a nested object called `params`

### Example:
Given this object:

```js
const props = {
  children: "<div>Hello</div>",
  params: {
    varName: "value123"
  }
};
```

You can destructure it like this:

```js
const { children, params: { varName } } = props;
```

Now:
- `children` → `"<div>Hello</div>"`
- `varName` → `"value123"`

You don’t get the full `params` object—just the `varName` property from it. */
// so the original object contains a property named "params" and we're only interested in the value and not the key itself?
// Correct. The original object contains a property named **`params`**, but with:

// ```js
// { params: { varName } }
// ```

// you're saying:

// - "I don't need the whole `params` object."
// - "Just extract its `varName` property directly."

// This is useful when you only care about specific nested values and not the full structure.

// so this will produce 2 separate variables, namely 'children' and 'varName'?
// Yes, exactly. This destructuring:

// ```js
// { children, params: { varName } }
// ```

// produces two separate variables:

// - `children` (from the top-level object)
// - `varName` (from inside the `params` object)

// You **do not** get a `params` variable in this case.
