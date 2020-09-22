$(document).ready(function(){

    $('.result').hide()

    $('#pathbutton').click((e) => {

        var length = parseInt($('#m').val(),10);

        var height = parseInt($('#n').val(),10);

        console.log($(".result").text(uniquePaths(length,height)));

        $('.result').show()

    })

    const uniquePaths = (m,n) => {
        // if m or n are zero, there is no grid, return 0 unique paths
            if(m === 0 || n === 0){
                return 0;
            }
        // make an array that is the length of m, the horizontal length
            let numberOfPaths = new Array(m)
        console.log(numberOfPaths)
            // set each index in the array to be another array that is the length of n, the vertical length
            for(var i = 0; i < numberOfPaths.length; i++) {
                numberOfPaths[i] = new Array(n);
            }
        
        // loop through rows, set the first index of each inner array to 1, this sets the number of unique paths TO this specific square to 1 for all the left side squares
            for(let i = 0; i < m; i++) {
                numberOfPaths[i][0] = 1
            }
        
            // // loop through the columns, set the whole first array to 1's, this sets the top row squares to have 1 unique path TO that square
            for (let j = 0; j < n; j++) {
                numberOfPaths[0][j] = 1
            }
        
        
            for (let i = 1; i < m; i++) {
                
                for (let j = 1; j < n; j++) {
                    
                    numberOfPaths[i][j] = numberOfPaths[i - 1][j] + numberOfPaths[i][j - 1]
                    
                }
                
            }
            
            console.log(numberOfPaths[m-1][n-1])
            return numberOfPaths[m-1][n-1]
        
        }
    

  });