const text=`wmhdajdawgjawydgawyadwadawkudhakhdkahdkwdhuakwhkjdja
Idhdakuwdhukadwhdhuadaludhuhd
awdkdhaukhkdahakwuhdakuhkawdhk
`
const newtext = text
  .split('\n')
  .map(li => li.toUpperCase())
  .filter(li => li.includes('I'));

console.log(newtext);
