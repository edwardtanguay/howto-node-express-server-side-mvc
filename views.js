export const siteView = ({ nouns }) => {
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
    <ul>${nouns.map((m) => `<li>${m.article} ${m.singular}</li>`).join('')}</ul>
</body>
</html>
`;
};
