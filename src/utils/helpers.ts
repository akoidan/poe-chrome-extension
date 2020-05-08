import FileSaver from "file-saver";

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve: () => void) => setTimeout(resolve, ms));
}

const getUniqueId = ((): () => number => {
  let id = 1;
  return (): number => id++;
})();


function escapeHtml(html: string) {
  let escapeMap: { [id: string]: string } = {
    '#': '{#}',
    '+': '{+}',
    '{': '{{}',
    '}': '{}}'
  };
  let replaceHtmlRegex = new RegExp("[" + Object.keys(escapeMap).join("") + "]", "g");
  return html.replace(replaceHtmlRegex, function (s) {
    return escapeMap[s];
  });
}

function saveToFile(data: string) {
  let escaped = escapeHtml(data);
  FileSaver.saveAs(new Blob([escaped], {
    type: "text/plain;charset=utf-8"
  }), 'buyItemsList.txt');
  return true;
}

export {sleep, getUniqueId, escapeHtml, saveToFile};
