export const siteView = ({ nouns, books, translations }) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="main.css" />
    <title>Info Site</title>
</head>
<body>
    <h1>Info Site</h1>
    <ul>
    <li><b>API call: </b>There are ${nouns.length} nouns.</li>	
    <li><b>Local JSON file: </b>There are ${books.length} books.</li>	
    <li><b>Local Excel file: </b>There are ${translations.length} translations.</li>	
    </ul>
</body>
</html>
`;
};
