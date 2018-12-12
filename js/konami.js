var global = {

    konami: function() {
        var konamikeys = [38,38,40,40,37,39,37,39,66,65],
            started = false,
            count = 0;

        $(document).keydown(function(e){
            var reset = function() {
                started = false;
                count = 0;
                return;
            };

            key = e.keyCode;

            // Begin watching if first key in sequence was pressed.
            if(!started){
                if(key === 38){
                    started = true;
                }
            }

            if (started){

                if (konamikeys[count] === key){
                    count++;
                } else {
                    reset();
                }
                if (count === 10){
                    alert('You have added 30 lives!');
                    reset();
                }
            } else {
                reset();
            }
        });
    }
};

console.log(global.konami());