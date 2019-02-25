---
title: "VS Code snippets: Skyrocket your development in 1 minute"
date: "2015-05-06T23:46:37.121Z"
summary: "Code productivity is an ultimate part of the developer’s life. Writing less code and..."
---
<p width="100%" align="center">
  <img src="https://cdn-images-1.medium.com/max/2560/0*agR0P0-AgvbGbK8H"/>
  <sup>
    Photo by <a href="https://unsplash.com/@lux17?utm_source=medium&utm_medium=referral">Lucas Clara</a> on
    <a href="https://unsplash.com/?utm_source=medium&utm_medium=referral">Unsplash</a>
</p>

Code productivity is an ultimate part of the developer’s life. Writing less code
and staying clear of repeatable snippets will eventually result in being focused
on the important parts of software engineering. Don’t underestimate the benefits
of your mental health, too.

> Writing less code and staying clear of repeatable snippets will eventually
> result in being focused on the important part of software engineering.

Lately, I started using **VS Code custom snippets** and it was quite a surprise
that my productivity was extremely boosted 🚀

The exciting part is that you can dedicate **up to 1 minute** in order to set up
your first code snippet. 😵

<p width="100%" align="center">
  <img width="100%" src="https://media.giphy.com/media/2nj3hg9hlzeefc0aZT/giphy.gif"/>
  <sup>
    Yeah, you read that correctly! Just 1 MINUTE!
</p>

### 🏁 Let’s start

I’m gonna assume that *you’ve already defined the repeating code sample*, which will become our awesome VS Code snippet.

For me and the majority of front-end developers,** the creation of a stateless (or dumb) component** is a pretty de-facto programming chore.

![](https://cdn-images-1.medium.com/max/800/1*d1GM99zfLNnPNXDZHPKEAQ.png)

### 1. Define the core snippet

It’s super easy! The core snippet is the repeatable part of your code you’re
willing to abstract. Component-specific functionality (e.g. variable names or
string messages) should be removed.

Here you’ll only need the **skeleton** of your snippet.

![](https://cdn-images-1.medium.com/max/800/1*MJkdYwasqpxVXv9rmByi_w.png)

*****

### 2. Find your tabstops

Firstly, what the heck is a **tabstop**?!

> Tabstop is the cursor location when you press the Tab key.

With tabstops, you can make the editor cursor move inside a snippet. Use `$1`,
`$2`,etc. to specify **cursor locations**. The real fun is that multiple
occurrences of the same tabstop are linked and updated** in sync**.

![](https://cdn-images-1.medium.com/max/800/1*IDR2ffyvUv8dPcigSGrgzg.png)

*****

### 3. Add variables

With `$name` or `${name:default}` you can insert the **value** of a variable.
When a variable isn’t set, its *default* or *the empty string* is inserted.

![](https://cdn-images-1.medium.com/max/800/1*YASzpeljMX9eBMIhQa0aiA.png)

🙋‍♂ ️**PRO TIP:**

VS Code provides some great [predefined
variables](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables).

*For example, the *`TM_FILENAME_BASE`* autocompletes the filename of the current
document without its extensions.*

*****

### 3. Generate the VS Code snippet JSON

Snippets are defined in a pretty straightforward JSON format.

You can either convert your code manually or use
[this](https://snippet-generator.app/) great tool build by [Pawel
Grzybek](https://pawelgrzybek.com/). Snippet generator converts your code to VS
Code, Sublime or Atom snippet!

![](https://cdn-images-1.medium.com/max/800/1*fJW497tJ3zZoZ55YX8dSyw.png)

The major attributes are the following:

`prefix:` type the snippet* prefix*, and press Tab to insert the snippet. In
this case dumb*.*

`body:` is the content and either a single string or an array of strings of
which each element will be inserted as a separate line.

*****

### 4. Open the snippet config file

Select `User Snippets` under `File > Preferences (Code > Preferences on macOS)`.
Then, you’ll be prompted to select the language scope for which the snippets
should appear.

Our snippet is created for React Js so we’re gonna use
`javascript.json(Javascript Babel)` snippet file type.

![](https://cdn-images-1.medium.com/max/800/1*7d3IwcHzHLmplteHZS0UqA.gif)

Other option could be, `javascript.json(Javascript React)`. However, keep in
mind that your snippet will be available only with `.jsx` extension.

🙋‍♂ ️**PRO TIP:**

I totally recommend setting `"editor.snippetSuggestions": "top"`, so your
snippets appear above IntelliSense.

*****

### 5. Add your snippet

Just copy-paste your snippet inside the opened JSON file and save.

![](https://cdn-images-1.medium.com/max/800/1*EFdDYGjYdr86HsxCwLE2sA.gif)

*****

### 🤸‍♂️ Enjoy your snippet

Open a new `.js` file and type the prefix `dumb`.

![](https://cdn-images-1.medium.com/max/800/1*Mp75tK2EiV16IwfgAgncaQ.gif)

*****

### Are you lazy like me?

👉 You can find a curated list of useful React snippets at my
[repo](https://github.com/dimitrisraptis96/vscode-react-snippets) 👈

🔗 Useful links:

* [https://github.com/dimitrisraptis96/vscode-react-snippets](https://github.com/dimitrisraptis96/vscode-react-snippets)
* [https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables)
* [https://snippet-generator.app](https://snippet-generator.app/)
