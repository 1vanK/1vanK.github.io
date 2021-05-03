// Скрипт для любой страницы, кроме index.html


function GetIndexPath()
{
    return GetRootPath() + "index.html";
}


function RunArticleScript()
{
    // Добавляем шапку
    let headerDiv = document.createElement('div');
    headerDiv.id = 'header';
    headerDiv.innerHTML = "<a href='" + GetIndexPath() + "'><strong>На главную</strong></a>";
    document.body.prepend(headerDiv);

    // Добавляем подвал
    let footerDiv = document.createElement('div');
    footerDiv.id = 'footer';
    footerDiv.innerHTML = "<a href='" + GetIndexPath() + "'><strong>На главную</strong></a>";
    document.body.append(footerDiv);

    // Заменяем теги на ссылки
    let strongs = document.getElementsByTagName('strong');

    for (let i = 0; i < strongs.length; i++)
    {
        let strong = strongs[i];

        if (strong.childElementCount !== 0)
            continue;

        let content = strong.textContent;

        let match = /^Теги:(.+)$/.exec(content);
        if (match === null)
            continue;

        let tags = match[1].split(",");

        let newInnerHTML = "Теги: ";

        for (let j = 0; j < tags.length; j++)
        {
            let tag = tags[j].trim();
            newInnerHTML += "<a href='" + GetRootPath() + "___tags/" + tag + ".html'>" + tag + "</a>";
            if (j !== tags.length - 1)
                newInnerHTML += ", ";
        }

        strong.innerHTML = newInnerHTML;
    }
}


RunArticleScript();
