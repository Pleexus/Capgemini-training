function ReverseString(str) {
    return str.split('').reverse().join('')
 }
    
 function max(a, b)
 {
     if (a > b)
         return a;
     else
         return b;
 }
 function printLCS(str1, str2) {
     var len1 = str1.length;
     var len2 = str2.length;
     var lcs = new Array(len1 + 1);
     for (var i = 0; i <= len1; i++) {
         lcs[i] = new Array(len2 + 1)
     }
     for (var i = 0; i <= len1; i++) {
         for (var j = 0; j <= len2; j++) {
             if (i == 0 || j == 0) {
                 lcs[i][j] = 0;
             }
             else {
                 if (str1[i - 1] == str2[j - 1]) {
                     lcs[i][j] = 1 + lcs[i - 1][j - 1];
                 }
                 else {
                     lcs[i][j] = max(lcs[i][j - 1], lcs[i - 1][j]);
                 }
             }
         }}
         
         var n = lcs[len1][len2];
          console.log("Length of common subsequence is: " +
          n + "\n" + "The subsequence is : ");
         var str="";
        var i = len1;
        var j = len2;
        while(i>0&&j>0)
        {
             if(str1[i - 1] == str2[j - 1])
             {
                 str += str1[i - 1];
                 i--;
                 j--;
             }
             else{
             if(lcs[i][j-1]>lcs[i-1][j])
             {
                 j--;
             }
             else
             {
                 i--;
             }
             }
         }
        return ReverseString(str);
     }
     var str1 = "AGGTAB";
     var str2 = "GXTXAYB";
     console.log(printLCS(str1, str2));