/*
      EXO 1
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir les nombres de 1 a 10 inclus
      Sans espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */
//       // Variable
// let finalRes = '';
//       // Boucle pour parcourir les 10 chiffres
// for(let i = 0; i <= 10; i++){
//             // Ajouter 1 à 0 et afficher le resultat
//       let result = i += 0;
//       finalRes += result;
// }
//       // Afficher le resultat
// console.log(finalRes);
/*
      EXO 2
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir les nombres de 1 a 10 inclus
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */
//       // Variable
// let finalRes = '';
//       // Boucle pour parcourir les 10 chiffres
// for(let i = 0; i < 10; i++){
//       // Ajouter un a 0 a chaque tour et afficher le resultat
//       let res = i += 0;
//       finalRes = finalRes + ' ';
//       finalRes += res;
// }
//       // Afficher le resultat
// console.log(finalRes);

/*
      EXO 3
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir les nombres impaires inférieurs a 100
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */
//       // Variables
// let finalRes = '';
//       // Boucles pour verifier tout les nb de 0 à 100
// for(let i = 0; i <= 100; i++){
//             // Condition pour savoir si le chiffre est impaire
//       if(i%2==1){
//                   // Ajouter le chiffre impaire à res
//             let res = i;
//                   // Ajouter un espace entre chaque chiffres
//             finalRes = finalRes + ' ';
//             finalRes += res;
//       }
// }
//       // Afficher le resultat
// console.log(finalRes);

/*
      EXO 4
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir la table de multiplication de 7
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */
//       // Variables
// let multiplicateur = 7;
// let finalRes = '';
//       // Boucles pour ajouter un à chaque tour à mon multiplicateur 
// for(let i = 1; i <= 10; i++){
//             // Nouvelle variable pour stocker le resultat
//       let res = multiplicateur * i;
//             // Pour ajouter un espace entre chaque res
//       finalRes = finalRes + ' ';
//       finalRes += res;
// }
//       // Afficher le resultat 
// console.log(finalRes);

/*
      EXO 5
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir toutes les tables de multiplication
      de 1 a 10
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
 */
//       // Variable
// let finalRes = '';
//       // Premiere boucle pour le premier chiffre a multiplier
// for(let i = 0; i <= 10; i++){
//             // Deuxieme boucle pour le deuxieme chiffre a multiplier
//       for(let j = 0; j <= 10; j++){
//                   // Calcul pour les multiplier et ajouter un espace entre chaque resultat
//             let res = i * j;
//             finalRes = finalRes + ' ';
//             finalRes += res;
//       }
// }
//       // Afficher le resultat
// console.log(finalRes);

/*
      EXO 6
      Construire un nombre en utilisant une boucle
      ce nombre devra être la somme des nombres de 1 a 10
      La fonction doit retourner le résultat
 */
//       // Création d'une fonction
// function sommes(){
//             // Variables
//       let res = 0;
//       let result;
//             // Boucle pour parcourir et additioner les chiffres de 1 à 10
//       for(let i = 0; i <= 10; i++){
//             result = res += i;
//       }
//             // Afficher le resultat
//       console.log(result);
// }
//       // Afficher la fonction
// sommes();

/*
      EXO 7
      Construire un nombre en utilisant une boucle
      ce nombre devra être le factoriel du nombre 10
      La fonction doit retourner le résultat
 */
//       // Création d'une fonction
// function fact(){
//             // Crée variable result pour stocker le resultat
//       let result = 1;
//             // Boucle qui parcour les chiffres de 1 à 10 pour ensuite les multiplier entre eux
//       for(let i = 1; i <= 10; i++){
//             result *= i;
//       }
//             // Afficher le resultat
//       console.log(result);
// }
//       // Afficher la fonction
// fact();

/*
      EXO 8
      Construire un nombre en utilisant une boucle
      ce nombre devra être la somme des nombres paires de 10 a 30
      La fonction doit retourner le résultat
 */
//       // Création d'une fonction
// function calc(){
//             // Variable qui stockera le result
//       let res = 0;
//             // Boucle qui parcours tout les chiffres de 10 a 30 et qui garde uniquement les nombres paires et les additionnes entre eux
//       for(let i = 10; i <= 30; i++){
//             if(i%2==0){
//                   res += i;
//             }
//       }
//             // Afficher le resultat
//       console.log(res);
// }
//       // Afficher la fonction
// calc();

/*
      EXO 9
      Écrire une fonction qui convertit une temperature de Celsius a Fahrenheit
      La fonction prend un paramètre temperature (en Celsius)
      La fonction doit retourner la température en Fahrenheit
      ex: (30 °C × 9/5) + 32 = 86 °F
 */
//       // Création d'une fonction
// function convertisseur(celcius){
//             // Variable pour stocker le res
//       let res;
//             // Calcul pour la convertion
//       res = (celcius * 9/5) + 32;
//             // Afficher le resultat
//       console.log(res);
// }
//       // Afficher la fonction
// convertisseur(30);


/*
      EXO 10
      Écrire une fonction qui calcule la somme d'un tableau de nombres
      La fonction prend un paramètre numbers qui est un tableau de taille minimum 1
      La fonction doit retourner le résultat
      Vous devez utiliser une boucle (pas de reduce)
 */
      // Création d'une fonction
// function sommetab(numbers){
//             // Variable pour stocker le resultat
//       let res = 0;
//             // Boucle qui parcours mon tableau et qui additionne les chiffres du tableaux a res 
//       for(let i = 0; i < numbers.length; i++){
//             res += numbers[i];
//       }
//             // Afficher mon resultat
//       return res;
// }
//       // Afficher ma fonction
// console.log(sommetab([5, 10, 15]));


/*
      EXO 11
      Écrire une fonction qui calcule la moyenne d'un tableau de nombres
      La fonction prend un paramètre numbers qui est un tableau de taille minimum 1
      La fonction doit retourner le résultat
      Vous devez utiliser une boucle (pas de reduce)
 */
//       // Création d'une variable
// function moyenneArr(numbers){
//             // Variable qui stock mon resultat
//       let res = 0;
//             // Boucle qui parcours mon tableau pour ensuite l'additionner
//       for(let i = 0; i < numbers.length; i++){
//             res += numbers[i];
//       }
//             // Afficher la moyenne en divisant l'addition de mon tableau avec sa taille
//       return res / numbers.length;
// }
//       // Afficher ma fonction
// console.log(moyenneArr([0, 10]));


/*
      EXO 12
      Écrire une fonction qui prend un tableau de nombres en paramètre (numbers)
      Et retourne un nouveau tableau contenant uniquement les nombres positifs
      La fonction doit retourner le nouveau tableau
      Vous devez utiliser une boucle (pas de filter)
 */
//       // Création d'une fonction
// function triPositif(numbers){
//             // Variable pour stocker pour nouveau tableau
//       let newArr = [];
//             // Boucle qui parcours mon tableau pour trier et garder uniquement les nombres positifs
//       for(let i = 0; i < numbers.length; i++){
//             if(numbers[i] >= 0){
//                   newArr.push(numbers[i]);
//             }
//       }
//             // Afficher mon nouveau tableau
//       return newArr;
// }
//       // Afficher ma fonction
// console.log(triPositif([-1, 5, 12, -45]));


/*
      EXO 13
      Écrire une fonction qui prend un tableau de nombres en paramètre (numbers)
      Et retourne le nombre maximum dans ce tableau
      La fonction doit retourner le résultat
 */
//       // Création d'une fonction
// function biggest(numbers){
//             // Afficher le plus grand chiffre du tableau
//       return Math.max(...numbers);
// }
//       // Afficher ma console
// console.log(biggest([5, 7, -5, -59, 14]));

/*
      EXO 14
      Construire une chaîne de caractères en utilisant une boucle
      Cette chaîne de caractères devra contenir les 10 premiers nombres de la suite
      de fibonacci
      Avec des espaces entre les nombres
      Ne pas retourner la chaîne de caractères, affichez la avec un console.log()
      Tips: Fibonacci => 0 1 1 2 3 (2+1) 5 (3+2)... n (n-2 + n-1)
 */
//       // Création d'une fonction
// function fib(){
//             // Variable qui stock mes premiers element que je vais additionner pour la suite de Fibonacci
//       let fibArr = [1, 2];
//             // Boucle pour qu'il y ai les 10 chiffres de ma suite Fibonacci
//       for(let i = 2; i < 10; i++){
//                   // Additionner le dernier et l'avant dernier chiffre entres eux pour avoir le prochain chiffre de ma suite Fibonacci
//             fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
//       }
//             // Afficher mon resultat
//       return fibArr.join(" ");
// }
//       // Afficher ma fonction
// console.log(fib());

/*
      EXO 15
      Écrire une fonction qui prend un nombre entier positif en paramètre (number)
      Et retourne la somme des chiffres qui composent ce nombre
      La fonction doit retourner le résultat
 */
// //       Création d'une fonction
// function somme(number){
//             // Variable pour stocker le resultat final
//       let finalRes = 0;
//             // Stocker number dans un array
//       let arrNb = number.split('');
//             // Boucle qui parcours mon tableau pour additionner les chiffres entres eux
//       for(let i = 0; i < arrNb.length; i++){
//             finalRes += parseInt(arrNb[i]); // ou finalRes += +arrNb[i];
//       }
//          // Afficher le resultat
//       return finalRes;
// }
//       // Afficher ma fonction
// console.log(somme('12'));

/*
      EXO 16
      Écrire une fonction qui prend un tableau de nombres de taille minimum 2 en
      paramètre (numbers)
      Et retourne le même tableau en inversant le premier et le dernier élément
      La fonction doit retourner le tableau
 */
//       // Création d'une fonction
// function inverse(numbers){
//             // Variables qui stock le premier et le dernier element du tableau
//       let firstElement = numbers.shift();
//       let lastElement = numbers.pop();
//             // Ajouter le premier element du tableau a la fin de ce dernier
//       numbers.push(firstElement);
//             // Ajouter le dernier element du tableau au debut de ce dernier
//       numbers.unshift(lastElement);
//             // Afficher mon tableau
//       return numbers;
// }
//       // Afficher ma fonction
// console.log(inverse([5, 3, 2, 6]));


/*
      EXO 17
      Écrire une fonction qui prend une chaîne de caractères en paramètre (text)
      Et retourne le nombre de caractères spéciaux contenus dans ce texte
      § ! @ # $ % * ( ) _ - = + { } [ ] \ | < > ? / . , ; sont les seuls caractères      spéciaux que vous pourrez trouvez dans le texte
      La fonction doit retourner le résultat
 */

//       // Création d'une fonction
// function nbSpecial(text){
//             // regEx pour tout mes caractères speciaux
//       const regEx = /[^a-zA-Z\d\s]/gm;
//             // Trouver les caractères speciaux de mon text
//       let found = text.match(regEx);
//             // Retourne le nombre de caractères speciaux 
//       return found.length;
// }
//       // Affiche ma fonction
// console.log(nbSpecial("Je poste des photos, et j'ai mis le #super"));


/*
      EXO 18
      Écrire une fonction qui prend une chaîne de caractères en paramètre (text)
      text contient des nombres séparés par des virgules
      la fonction doit calculer la moyenne des nombres présents dans cette chaîne de      caractères
      La fonction doit retourner le résultat
 */
//       // Création d'une fonction
// function moy(text){
//             // Variable pour enlever les virgules et l'avoir en tableaux
//       let supVirgule = text.split(',');
//             // Variable pour mon resultat final
//       let finalRes = 0;
//             // Boucle qui parcours tout mon tableau
//       for(let i = 0; i < supVirgule.length; i++){
//             finalRes +=  parseInt(supVirgule[i]);   
//       }
//             // Affiche la moyenne 
//       return finalRes / supVirgule.length;
// }
//       // Afficher ma fonction
// console.log(moy('0,100,200'));

