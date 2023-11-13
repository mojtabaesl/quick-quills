# Quick Quills List Maker

<img src="./images/Avatar.png"/>

## Description

There is a wizard (let’s call him Neville) who wants to buy some books for going to his
wizardry school before a new year of school starts. But Neville is quite forgetful and asked
his very good friend, the Head of the Department of Frontend Sorcery, to build him a
magical application which helps him make a Todo list of the books that he needs to buy, and
show the ones he has already bought from the Magical inventory of available books.

[Click to see demo](https://nx.dev/core-features/share-your-cache)

## Start the app

```
npm install
```

```
npx nx run-many -t serve
```

Open your browser and navigate to http://localhost:4200/. Happy coding!

## Glossary

- **Book**
  - **id** : A unique identifier for the book. Each book in the collection should have a distinct id
  - **Title**: The title of the book. It represents the name or title given to the book
  - **Author**: The name of the author who wrote the book. It indicates the person responsible for creating the content.
  - **isPurchased** : A boolean flag indicating whether the book has been purchased. If true, the book has been bought; if false, it has not been purchased
  - **purchaseDate**: The date when the book was purchased. It is represented as a string or null if the book has not been purchased. If the book is purchased, this property holds the date of purchase.
- **Todo List**: A list of books that the user wants to buy.
- **My Inventory** : A list of all books that user bought.
- **All Books** : A list of all books.

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `npx nx run-many -t build` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.
