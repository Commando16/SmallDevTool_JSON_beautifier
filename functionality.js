$( document ).ready(function() {
    // global variables
    let input_box = $("#text-to-convert-input");
    let output_box = $("#text-to-convert-output");
    let convert_button = $("#convert-button"); 

    // event binds
    convert_button.click(function(){
        let text_to_convert = input_box.val();
        let indent_level = 0;
        let converted_text = "";
        let comma_line_breaker = "";

        // console.log(text_to_convert); 
        for( let character of text_to_convert){
            // console.log(character);
            // string.repeat(count);
            if(character=="[" || character=="{"){
                let indent = " ".repeat(4*indent_level);
                converted_text+=indent+character+"\n";
                indent_level+=1;
                
                indent = " ".repeat(4*indent_level);
                converted_text+=indent;
            }
            else if(character=="]" || character=="}"){
                indent_level-=1;
                let indent = " ".repeat(4*indent_level);
                converted_text+="\n"+indent+character+"\n";
            }
            else if(character==","){
                comma_line_breaker+=character;
                converted_text+character;
            }
            else if(comma_line_breaker=="," && character==" "){
                comma_line_breaker+=character;
            }
            else if(comma_line_breaker==", "){
                if(character=="\'"){
                    let indent = " ".repeat(4*indent_level);
                    converted_text+=", \n"+indent+"\'";
                }
                comma_line_breaker="";
            }
            else{
                converted_text+=character;
            }
        }

        // outputing the converted text
        output_box.text(converted_text);
    });
});