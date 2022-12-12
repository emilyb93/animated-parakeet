# React Router - useSearchParams

## Learning Objectives

1. Learn how to use useSearchParams hook in React Router
2. Understand why you would use useSearchParams over useParams

## Part 1 - React Router vs Vanilla JavaScript

When working with **React** it can sometimes be difficult to understand how **DOM manipulation** works when in a **declarative framework**. It may seem that we no longer have access to DOM manipulation methods since we are working entirely within React. This is not entirely true since we can use these methods in the same way but often with diminishing returns.

What we mean by this is that React has certain ways it likes to do things, the main drawback of this is that we will often only get **re-renders** if we play by Reacts rules.

Fortunately React gives us access to the wonderful world of **_Hooks_**. Hooks are _functions_ in React that give us access to more complex functionality and code _abstraction_. One such Hook is **_useSearchParams_** from React Router, [click here for the docs](https://reactrouter.com/en/main/hooks/use-search-params).

The **_useSearchParams_** Hook is the React equivalent for `new URLSearchParams` when performing DOM manipulation in vanilla JavaScript in the browser. It is used in a slightly different way because it is a Hook and not just a default DOM manipulation method, although behind the scenes it is working very similarly.

## Examples

Consider the following example with **_vanilla JavaScript_**, for the following URL:

`www.example.com/articles?category=geology`

```js
const searchParams = new URLSearchParams();

const category = searchParams.get("category");

console.log(category); // Will log "geology" to console
```

Now lets look at the same functionality with **_useSearchParams_**, using the same URL:

```js
const [searchParams, setSearchParams] = useSearchParams();

const category = searchParams.get("category");

console.log(category); // Will log "geology" to console
```

## Summary

As you can see the process is extremely similar. The main difference is that we get two values from **_useSearchParams_** as oppose to the single searchParams object from `new URLSearchParams`.

## Examples

Consider the following example for **_vanilla JavaScript_** for adding a _query_ to this URL:

`www.example.com/articles`

```js
const searchParams = new URLSearchParams();

searchParams.set("category", "geology");

const URL = window.location.href;

console.log(URL); // Will log "www.example.com/articles?category=geology"
```

Now lets look at the same functionality with **_useSearchParams_**, for the same _query_:

```js
const [searchParams, setSearchParams] = useSearchParams();

setSearchParams({ category: "geology" });

const location = useLocation();

console.log(location.pathname); // Will log "www.example.com/articles?category=geology"
```

Note the use of the Hook **_useLocation_** here. This is another React Router Hook which gives us access to the location object, where we can find the full URL.
