const textArea = document.getElementById('textArea');

document.getElementById('boldBtn').addEventListener('click', function(){  
   if(textArea.style.fontWeight === 'normal'){
      textArea.style.fontWeight = 'bold'
   }else{
      textArea.style.fontWeight = 'normal'
   }
});
document.getElementById('italicBtn').addEventListener('click', function(){
   if(textArea.style.fontStyle === 'normal'){
      textArea.style.fontStyle = 'italic'
   }else{
      textArea.style.fontStyle = 'normal'
   }
})
document.getElementById('underlineBtn').addEventListener('click', function(){
   if(textArea.style.textDecoration === 'none'){
      textArea.style.textDecoration = 'underline'
   }else{
      textArea.style.textDecoration = 'none'
   }
})
document.getElementById('alignLeft').addEventListener('click', function(){
   textArea.style.textAlign = 'left'
})
document.getElementById('alignCenter').addEventListener('click', function(){
   textArea.style.textAlign = 'center'
})
document.getElementById('alignRight').addEventListener('click', function(){
   textArea.style.textAlign = 'right'
})
document.getElementById('alignJustify').addEventListener('click', function(){
   textArea.style.textAlign = 'justify'
});

const inputElement = document.getElementById('fontSizeBtn');
   inputElement.addEventListener('input', function(){
   const fontSize = parseFloat(inputElement.value);
   textArea.style.fontSize = fontSize + 'px';
});


const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', function(){
   textArea.style.color = colorPicker.value;
});

const sentenceCase = document.getElementById('sentenceCase');
sentenceCase.addEventListener('click', function(){
   if(textArea.style.textTransform == 'uppercase'){
      textArea.style.textTransform = 'none'
   }else{
      textArea.style.textTransform = 'uppercase'
   }
})