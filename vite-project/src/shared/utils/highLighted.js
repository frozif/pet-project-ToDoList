const escapeHTMl = (dangerString)=>{
return dangerString
.replaceAll(/</g, '&lt;')
.replaceAll(/>/g, '&gt;')
.replaceAll(/''/g, '&quot;')
.replaceAll(/'/g, '&#39;')
}


const escapeRegExp = (dangerString)=>{
  return dangerString.replace(/[.*+?^${}()|[\]\\]/g,  '\\$&')
}

export const highLightCaseInsent = (text, query) =>{
const safeText = escapeHTMl(text)
const queryFormated =  query.trim()
if(queryFormated.length === 0){
  return safeText
}

const pattern = new RegExp(escapeRegExp(queryFormated), 'ig')

return safeText.replace(
pattern,
`<mark>$&</mark>`
)
 
}

