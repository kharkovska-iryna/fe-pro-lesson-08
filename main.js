const books = [
    {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        path: 'images/don_quixote'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        path: 'images/lord_of_the_rings'
    },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        path: 'images/harry_potter'
    },
    {
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        path: 'images/alice_adventures_in_wonderland'
    },
    {
        title: 'Twenty Thousand Leagues Under the Sea',
        author: 'Jules Verne',
        path: 'images/twenty_thousand_leagues_under_the_sea'
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        path: 'images/moby_dick'
    },
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        path: 'images/the_picture_of_dorian_gray'
    }
];

let rows = books.map(function(item) {
    return `<tr><td style=" padding: 20px"><img src=${item.path}.jpeg alt=" " width="150" height="200"></td><td style="padding: 20px">${item.title}</td><td style="padding: 20px">${item.author}</td></tr>`;
});


document.write(`
<table border="1" style="border-collapse: collapse; text-align: center">
    <thead>
        <tr>
            <th style=" padding: 20px">Cover</th>
            <th style=" padding: 20px">Title</th>
            <th style=" padding: 20px">Author</th>
        </tr>
    </thead>
    ${rows}
</table>
`   
);

