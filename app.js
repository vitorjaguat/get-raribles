const form = document.querySelector('#input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  list.innerHTML = '';
  const text = document.querySelector('textarea').value;

  //Limpar o início e split:
  const ref = 'href="/_/';
  const text2 = text.slice(text.indexOf(ref) + ref.length);
  //   console.log(initialCode2);
  const textSplit = text2.split('href="/_/');
  console.log(textSplit);

  //Iterate and construct urls:
  let ec;
  let tokenID;
  const urlArray = textSplit.map((item) => {
    ec = item.slice(0, 42);
    tokenID = item.slice(43).slice(0, item.replace(ec + '/', '').search(/\D/));
    return `https://www.rarible.com/token/${ec}:${tokenID}`;
  });
  console.log(urlArray);

  const countText = `Total <b style='color: red'>${urlArray.length}</b> URLs:`;
  let newText = document.createElement('p');
  newText.innerHTML = countText;
  list.append(newText);

  urlArray.forEach((url) => {
    let newLI = document.createElement('li');
    newLI.innerHTML = `<a href="${url}">${url}`;
    list.append(newLI);
  });
});
