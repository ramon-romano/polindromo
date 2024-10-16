function palindromo(palavra){

  const palavraLimpa = palavra.replace(/[\W_]/g, '').toLowerCase();
  const palavraInvertida = palavraLimpa.split('').reverse().join('');
  return palavraLimpa === palavraInvertida
  
}

console.log(palindromo("js"))